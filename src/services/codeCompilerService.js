// Enhanced Code Compiler Service
// Multiple reliable execution backends with smart fallback
// ========================================================

export const languageMap = {
  'Python': 'python3',
  'JavaScript': 'javascript',
  'Java': 'java',
  'C++': 'cpp',
  'C': 'c',
  'C#': 'csharp',
  'Ruby': 'ruby',
  'Go': 'go',
  'Rust': 'rust',
  'PHP': 'php',
  'TypeScript': 'typescript',
};

// ============ EXECUTION BACKENDS ============

// 1. Client-side JavaScript execution (instant, no API needed)
const executeJavaScript = (code) => {
  try {
    let output = '';
    const logs = [];
    
    // Capture console output
    const originalLog = console.log;
    const originalError = console.error;
    const originalWarn = console.warn;
    
    console.log = (...args) => {
      const str = args.map(arg => {
        if (typeof arg === 'object') return JSON.stringify(arg, null, 2);
        return String(arg);
      }).join(' ');
      logs.push(str);
    };
    
    console.error = (...args) => {
      const str = args.map(arg => String(arg)).join(' ');
      logs.push('Error: ' + str);
    };
    
    console.warn = (...args) => {
      const str = args.map(arg => String(arg)).join(' ');
      logs.push('Warning: ' + str);
    };

    // Execute code in isolated scope
    const func = new Function(code);
    const result = func();
    
    // Restore console
    console.log = originalLog;
    console.error = originalError;
    console.warn = originalWarn;
    
    output = logs.join('\n').trim();
    if (!output && result !== undefined) {
      output = String(result);
    }
    if (!output) {
      output = '(Code executed successfully with no output)';
    }
    
    return { success: true, output, executionTime: '0.001s' };
  } catch (error) {
    return { success: false, error: String(error.message || error) };
  }
};

// 2. Piston API (https://piston.readthedocs.io)
const executeViaPiston = async (code, language, input = '') => {
  try {
    console.log('📤 Attempting Piston API...');
    
    const response = await fetch('https://emkc.org/api/v2/piston/execute', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        language: language,
        version: '*',
        files: [
          {
            name: 'main',
            content: code,
          }
        ],
        stdin: input || '',
        run_timeout: 10000,
      }),
      timeout: 15000,
    });

    if (!response.ok) {
      console.warn(`Piston API returned ${response.status}`);
      return null;
    }
    
    const data = await response.json();
    
    if (data.run?.stdout) {
      console.log('✅ Piston execution successful');
      return { 
        success: true, 
        output: data.run.stdout.trim() || '(No output)',
        error: data.run.stderr || '',
        executionTime: `${data.run.signal || 0}ms`
      };
    } else if (data.run?.stderr) {
      console.log('⚠️ Piston execution error');
      return { 
        success: false, 
        error: data.run.stderr.trim() || 'Execution failed'
      };
    } else if (data.compile?.stderr) {
      console.log('⚠️ Piston compilation error');
      return { 
        success: false, 
        error: (data.compile.stderr + (data.compile.stdout || '')).trim()
      };
    }
    return null;
  } catch (error) {
    console.warn('Piston API error:', error.message);
    return null;
  }
};

// 3. Jdoodle API (reliable backup)
const executeViaJdoodle = async (code, language, input = '') => {
  try {
    console.log('📤 Attempting Jdoodle API...');
    
    const languageMap = {
      'python3': 'python3',
      'javascript': 'nodejs',
      'java': 'java',
      'cpp': 'cpp',
      'c': 'c',
      'ruby': 'ruby',
      'go': 'go',
      'php': 'php',
    };
    
    const jdoodleLanguage = languageMap[language] || language;
    
    const response = await fetch('https://api.jdoodle.com/v1/execute', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        script: code,
        language: jdoodleLanguage,
        versionIndex: '0',
        clientId: import.meta.env?.VITE_JDOODLE_CLIENT_ID || 'default',
        clientSecret: import.meta.env?.VITE_JDOODLE_SECRET || 'default',
        stdin: input || '',
      }),
      timeout: 15000,
    });

    if (!response.ok) {
      console.warn(`Jdoodle API returned ${response.status}`);
      return null;
    }
    
    const data = await response.json();
    
    if (data.output) {
      console.log('✅ Jdoodle execution successful');
      return { 
        success: true, 
        output: data.output.trim() || '(No output)',
        executionTime: `${data.cpuTime || 0}s`
      };
    } else if (data.error) {
      console.log('⚠️ Jdoodle execution error');
      return { 
        success: false, 
        error: data.error
      };
    }
    return null;
  } catch (error) {
    console.warn('Jdoodle API error:', error.message);
    return null;
  }
};

// 4. Rapid Code Execution API (Ultimate backup)
const executeViaRapidAPI = async (code, language, input = '') => {
  try {
    console.log('📤 Attempting RapidAPI Code Execution...');
    
    const response = await fetch('https://online-code-compiler.p.rapidapi.com/', {
      method: 'POST',
      headers: {
        'x-rapidapi-key': import.meta.env?.VITE_RAPIDAPI_KEY || '',
        'x-rapidapi-host': 'online-code-compiler.p.rapidapi.com',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        code: code,
        language: language,
        input: input || '',
      }),
      timeout: 15000,
    });

    if (!response.ok) {
      console.warn(`RapidAPI returned ${response.status}`);
      return null;
    }
    
    const data = await response.json();
    
    if (data.output) {
      console.log('✅ RapidAPI execution successful');
      return { 
        success: true, 
        output: data.output.trim() || '(No output)',
      };
    }
    return null;
  } catch (error) {
    console.warn('RapidAPI error:', error.message);
    return null;
  }
};

// 5. Local server proxy (uses backend `/api/compile` if frontend and server running together)
const executeViaServer = async (code, language, input = '') => {
  try {
    const resp = await fetch('/api/compile', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code, language, input })
    });
    if (!resp.ok) return null;
    const data = await resp.json();
    return {
      success: data.success,
      output: data.output || '',
      error: data.error || '',
      executionTime: data.executionTime || ''
    };
  } catch (error) {
    console.warn('Server compile error:', error.message);
    return null;
  }
};

/**
 * Execute code with intelligent fallback system
 * @param {string} code - Source code to execute
 * @param {string} language - Programming language
 * @param {string} input - Standard input for the program
 * @returns {Promise<Object>} - {success, output, error, executionTime}
 */
export const executeCode = async (code, language, input = '') => {
  try {
    console.log('🚀 Executing code in:', language);

    // Validation
    if (!code || code.trim().length === 0) {
      return { success: false, error: 'Please write some code first', output: '' };
    }

    const lang = languageMap[language];
    if (!lang) {
      return {
        success: false,
        error: `Language "${language}" not supported.\n\nSupported: ${Object.keys(languageMap).join(', ')}`,
        output: '',
      };
    }

    // Strategy 1: JavaScript - execute locally (instant, no API)
    if (language === 'JavaScript') {
      console.log('💻 Executing JavaScript locally...');
      const result = executeJavaScript(code);
      if (result.success) {
        console.log('✅ Local execution successful');
        return result;
      }
      console.warn('⚠️ Local execution failed, trying APIs...');
    }

    // Strategy 2: Try Piston API (most reliable, free)
    let result = await executeViaPiston(code, lang, input);
    if (result) return result;

    // Strategy 3: Try Jdoodle API
    result = await executeViaJdoodle(code, language, input);
    if (result) return result;

    // Strategy 4: Try server proxy
    result = await executeViaServer(code, language, input);
    if (result) return result;

    // Strategy 4: Try RapidAPI (if key available)
    if (import.meta.env?.VITE_RAPIDAPI_KEY) {
      result = await executeViaRapidAPI(code, language, input);
      if (result) return result;
    }

    // Strategy 5: Fall back to local server proxy if running
    try {
      const serverRes = await executeViaServer(code, language, input);
      if (serverRes) return serverRes;
    } catch (e) {
      console.warn('server proxy error', e.message || e);
    }

    // All backends failed
    let statusMsg = '';
    try {
      const statuses = await checkCompilers();
      statusMsg = '\n\nBackend status: ' + JSON.stringify(statuses);
    } catch (e) {
      // ignore if status check fails
    }
    return {
      success: false,
      error: '❌ All compilers are temporarily unavailable.\n\nPlease:\n1. Check your internet connection\n2. Try again in a moment\n3. Or use an online IDE like Replit, CodePen, or LeetCode' + statusMsg,
      output: '',
    };

  } catch (error) {
    console.error('💥 Code execution error:', error.message);
    return {
      success: false,
      error: String(error.message || error),
      output: '',
    };
  }
};

/**
 * Get supported languages
 */
export const getSupportedLanguages = () => {
  return Object.keys(languageMap);
};

/**
 * Format code execution result for display
 */
export const formatExecutionResult = (result) => {
  if (result.success) {
    return {
      type: 'success',
      message: '✅ Code executed successfully',
      output: result.output || '(No output)',
      time: result.executionTime || '',
    };
  } else {
    return {
      type: 'error',
      message: '❌ Execution failed',
      output: result.error || '(Unknown error)',
    };
  }
};

// ------------------- Compiler health check -------------------
/**
 * Ping each external backend with a trivial snippet to determine availability.
 * Returns an object like { piston: 'ok'|'error', jdoodle: 'ok'|'error', rapidapi: 'ok'|'error' }
 */
export const checkCompilers = async () => {
  const results = {};
  const testCode = 'print(\'ping\')'; // python snippet works everywhere

  try {
    const pistonRes = await executeViaPiston(testCode, 'python3');
    results.piston = pistonRes && pistonRes.success ? 'ok' : 'error';
  } catch (e) {
    results.piston = 'error';
  }

  try {
    const jdoodleRes = await executeViaJdoodle(testCode, 'python3');
    results.jdoodle = jdoodleRes && jdoodleRes.success ? 'ok' : 'error';
  } catch (e) {
    results.jdoodle = 'error';
  }

  if (import.meta.env?.VITE_RAPIDAPI_KEY) {
    try {
      const rapidRes = await executeViaRapidAPI(testCode, 'python3');
      results.rapidapi = rapidRes && rapidRes.success ? 'ok' : 'error';
    } catch (e) {
      results.rapidapi = 'error';
    }
  }

  // check local server
  try {
    const serverRes = await fetch('/api/compile', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code: testCode, language: 'Python', input: '' })
    });
    const d = await serverRes.json();
    results.server = d.success ? 'ok' : 'error';
  } catch (e) {
    results.server = 'error';
  }

  return results;
};

export default {
  executeCode,
  getSupportedLanguages,
  formatExecutionResult,
  languageMap,
  checkCompilers,
};

