import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

/* eslint-disable no-undef */

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const usersDbPath = path.join(__dirname, 'users.json');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json({ limit: '1mb' }));

// Environment variables expected (server-side):
// - JUDGE0_RAPIDAPI_KEY
// - GOOGLE_API_KEY (or GEMINI key)

const JUDGE0_API_URL = 'https://judge0-ce.p.rapidapi.com/submissions';
const JUDGE0_RAPIDAPI_KEY = process.env.JUDGE0_RAPIDAPI_KEY || process.env.REACT_APP_JUDGE0_API_KEY || process.env.VITE_JUDGE0_API_KEY || '';
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY || process.env.GEMINI_API_KEY || process.env.VITE_GOOGLE_API_KEY || process.env.REACT_APP_GOOGLE_API_KEY || '';

// language id map (subset)
const languageMap = {
  Python: 71,
  Java: 62,
  JavaScript: 63,
  'C++': 53,
  C: 49,
  Go: 60,
  Rust: 73,
  'C#': 51,
  PHP: 68,
  Ruby: 72,
  TypeScript: 74,
};

// ============ PERSISTENT USER DATABASE ============

// Load users from file
const loadUsers = () => {
  try {
    if (fs.existsSync(usersDbPath)) {
      const data = fs.readFileSync(usersDbPath, 'utf8');
      return JSON.parse(data);
    }
  } catch (err) {
    console.error('Error loading users:', err.message);
  }
  return [];
};

// Save users to file
const saveUsers = (users) => {
  try {
    fs.writeFileSync(usersDbPath, JSON.stringify(users, null, 2));
    console.log('Users saved to database');
  } catch (err) {
    console.error('Error saving users:', err.message);
  }
};

// Initialize database on startup
const initializeDatabase = () => {
  if (!fs.existsSync(usersDbPath)) {
    const defaultUsers = [
      {
        id: 'demo-user-001',
        email: 'demo@example.com',
        password: 'Demo@123!',
        fullName: 'Demo User',
        createdAt: new Date().toISOString(),
        photoURL: null
      }
    ];
    saveUsers(defaultUsers);
    console.log('✓ Database initialized with demo user');
  }
};

// ============ AUTHENTICATION ENDPOINTS ============

app.post('/api/auth/signup', (req, res) => {
  try {
    const { email, password, fullName } = req.body;

    if (!email || !password || !fullName) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const users = loadUsers();
    const userExists = users.find(u => u.email === email);

    if (userExists) {
      return res.status(409).json({ error: 'Email already registered' });
    }

    const newUser = {
      id: `user_${Date.now()}`,
      email,
      password,
      fullName,
      createdAt: new Date().toISOString(),
      photoURL: null
    };

    users.push(newUser);
    saveUsers(users);

    return res.status(201).json({
      error: null,
      user: {
        id: newUser.id,
        email: newUser.email,
        fullName: newUser.fullName,
        createdAt: newUser.createdAt,
        photoURL: newUser.photoURL
      }
    });
  } catch (err) {
    console.error('Signup error:', err);
    return res.status(500).json({ error: 'Server error during signup' });
  }
});

app.post('/api/auth/login', (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password required' });
    }

    const users = loadUsers();
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    return res.status(200).json({
      error: null,
      user: {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
        createdAt: user.createdAt,
        photoURL: user.photoURL
      }
    });
  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({ error: 'Server error during login' });
  }
});

app.get('/api/auth/users', (req, res) => {
  try {
    const users = loadUsers();
    const sanitizedUsers = users.map(u => ({
      id: u.id,
      email: u.email,
      fullName: u.fullName,
      createdAt: u.createdAt
    }));
    return res.json({ users: sanitizedUsers });
  } catch (err) {
    console.error('Get users error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
});

// ============ CODE COMPILATION ENDPOINT ============

app.post('/api/compile', async (req, res) => {
  try {
    const { code = '', language = 'Python', input = '' } = req.body;

    if (!JUDGE0_RAPIDAPI_KEY) {
      return res.status(400).json({ success: false, error: 'Judge0 API key missing on server. Set JUDGE0_RAPIDAPI_KEY in server env.' });
    }

    const languageId = languageMap[language];
    if (!languageId) return res.status(400).json({ success: false, error: `Language ${language} not supported` });

    // create submission
    const createResp = await axios.post(`${JUDGE0_API_URL}?base64_encoded=true&wait=false`, {
      language_id: languageId,
      source_code: Buffer.from(code).toString('base64'),
      stdin: Buffer.from(input).toString('base64'),
    }, {
      headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': JUDGE0_RAPIDAPI_KEY,
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
      }
    });

    const token = createResp.data.token;

    // poll result
    let attempts = 0;
    const maxAttempts = 30;
    let result = null;

    while (attempts < maxAttempts) {
       
      await new Promise(r => setTimeout(r, 1000));
       
      const getResp = await axios.get(`${JUDGE0_API_URL}/${token}?base64_encoded=true`, {
        headers: {
          'X-RapidAPI-Key': JUDGE0_RAPIDAPI_KEY,
          'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
        }
      });
      const data = getResp.data;
      if (data.status && data.status.id > 2) {
        result = data;
        break;
      }
      attempts++;
    }

    if (!result) return res.status(504).json({ success: false, error: 'Execution timeout' });

    const output = result.stdout ? Buffer.from(result.stdout, 'base64').toString('utf8') : '';
    const stderr = result.stderr ? Buffer.from(result.stderr, 'base64').toString('utf8') : '';
    const compile_output = result.compile_output ? Buffer.from(result.compile_output, 'base64').toString('utf8') : '';

    return res.json({
      success: result.status.id === 3,
      output: output,
      error: stderr || compile_output,
      statusId: result.status.id,
      statusDescription: result.status.description,
      executionTime: result.time,
      memory: result.memory,
    });
  } catch (err) {
    console.error('Compile proxy error', err?.response?.data || err.message || err);
    return res.status(500).json({ success: false, error: 'Server compile error' });
  }
});

app.post('/api/generate', async (req, res) => {
  try {
    const { message = '' } = req.body;
    if (!message) return res.status(400).json({ success: false, error: 'Missing message' });

    if (!GOOGLE_API_KEY) {
      return res.status(400).json({ success: false, error: 'Google/Gemini API key missing on server.' });
    }

    // Basic call to Google Generative Text API (text-bison example) - adapt model name if needed
    const endpoint = `https://generative.googleapis.com/v1beta2/models/text-bison-001:generate?key=${GOOGLE_API_KEY}`;
    const body = {
      prompt: { text: `User: ${message}\nAssistant:` },
      maxOutputTokens: 512
    };

    const pResp = await axios.post(endpoint, body, { headers: { 'Content-Type': 'application/json' } });
    const data = pResp.data;

    // Extract text
    const text = (data?.candidates && data.candidates[0]?.content) || data?.output?.[0]?.content || data?.response || '';
    return res.json({ success: true, output: String(text) });
  } catch (err) {
    console.error('Generate proxy error', err?.response?.data || err.message || err);
    return res.status(500).json({ success: false, error: 'Server generation error' });
  }
});

// ============ DELETE USER ENDPOINT ============
app.post('/api/delete-user', (req, res) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({ error: 'User ID required' });
    }

    // Load users from file
    let users = loadUsers();

    // Find user index
    const userIndex = users.findIndex(u => u.id === userId);

    if (userIndex === -1) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Remove user from array
    users.splice(userIndex, 1);

    // Save back to file
    fs.writeFileSync(usersDbPath, JSON.stringify(users, null, 2));

    console.log(`✅ User deleted: ${userId}`);
    return res.json({ success: true, message: 'User deleted successfully' });
  } catch (err) {
    console.error('Delete user error:', err.message);
    return res.status(500).json({ error: 'Failed to delete user', details: err.message });
  }
});

app.listen(port, () => {
  initializeDatabase();
  console.log(`Proxy server listening on http://localhost:${port}`);
  console.log(`Users database: ${usersDbPath}`);
});
