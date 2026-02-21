# 🔧 Supabase Integration Code Reference

## Quick Code Overview

### 1. Supabase Client Setup
**File**: `src/services/supabaseClient.js`

```javascript
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.error('Missing Supabase credentials in .env.local');
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
```

---

### 2. Authentication Context
**File**: `src/context/AuthContext.jsx`

#### **Sign Up**
```javascript
const signUp = async (email, password, fullName) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName
      }
    }
  });
  
  // User created in Supabase!
  if (!error) {
    setCurrentUser({
      id: data.user.id,
      email: data.user.email,
      fullName: fullName,
      createdAt: data.user.created_at
    });
  }
  return error;
};
```

#### **Sign In**
```javascript
const signIn = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });
  
  // User authenticated against Supabase database!
  if (!error && data.user) {
    setCurrentUser({
      id: data.user.id,
      email: data.user.email,
      fullName: data.user.user_metadata?.full_name,
      createdAt: data.user.created_at
    });
  }
  return error;
};
```

#### **Sign Out**
```javascript
const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (!error) {
    setCurrentUser(null);
  }
  return error;
};
```

#### **Session Persistence (Auto-login)**
```javascript
// Called on app load
useEffect(() => {
  // Get current session from Supabase
  supabase.auth.getSession().then(({ data: { session } }) => {
    if (session) {
      setCurrentUser({
        id: session.user.id,
        email: session.user.email,
        fullName: session.user.user_metadata?.full_name,
        createdAt: session.user.created_at
      });
    }
    setLoading(false);
  });

  // Listen for auth changes
  const { data: { subscription } } = supabase.auth.onAuthStateChange(
    (event, session) => {
      if (session?.user) {
        setCurrentUser({
          id: session.user.id,
          email: session.user.email,
          fullName: session.user.user_metadata?.full_name,
          createdAt: session.user.created_at
        });
        localStorage.setItem('education_path_current_user', 
          JSON.stringify({
            id: session.user.id,
            email: session.user.email,
            fullName: session.user.user_metadata?.full_name,
            createdAt: session.user.created_at
          })
        );
      } else {
        setCurrentUser(null);
        localStorage.removeItem('education_path_current_user');
      }
    }
  );

  return () => subscription?.unsubscribe();
}, []);
```

---

### 3. Admin Panel (User Management)
**File**: `src/components/AdminPanel.jsx`

```javascript
useEffect(() => {
  const fetchUsers = async () => {
    try {
      // Fetch all users from Supabase
      const { data: { users: authUsers }, error: fetchError } = 
        await supabase.auth.admin.listUsers();

      if (fetchError) {
        setError('Failed to fetch users');
        return;
      }

      // Transform for display
      const formattedUsers = authUsers.map(user => ({
        id: user.id,
        email: user.email,
        fullName: user.user_metadata?.full_name || 'N/A',
        createdAt: user.created_at
      }));

      setUsers(formattedUsers);
    } catch (err) {
      setError('Error loading users');
    }
  };

  fetchUsers();
}, []);
```

---

## 📊 Data Model

### User Object in Supabase
```json
{
  "id": "abc123xyz",
  "email": "user@example.com",
  "created_at": "2024-01-15T10:30:00Z",
  "user_metadata": {
    "full_name": "John Doe"
  }
}
```

### Stored in localStorage
```json
{
  "id": "abc123xyz",
  "email": "user@example.com",
  "fullName": "John Doe",
  "createdAt": "2024-01-15T10:30:00Z"
}
```

---

## 🔄 Authentication Flow

### Signup Flow
```
User → SignUp Component
  ↓
signUp(email, password, fullName)
  ↓
supabase.auth.signUp()
  ↓
Supabase API (create user in PostgreSQL)
  ↓
Session created
  ↓
localStorage.setItem('education_path_current_user', ...)
  ↓
User logged in ✅
```

### Login Flow
```
User → Login Component
  ↓
signIn(email, password)
  ↓
supabase.auth.signInWithPassword()
  ↓
Supabase API (verify against PostgreSQL)
  ↓
Session created
  ↓
localStorage.setItem('education_path_current_user', ...)
  ↓
User logged in ✅
```

### Session Persistence Flow
```
User closes app
  ↓
localStorage still has: education_path_current_user
  ↓
... hours later ...
  ↓
User reopens app
  ↓
onAuthStateChange() triggered
  ↓
Supabase checks session token
  ↓
Token valid! ✅
  ↓
User automatically logged in
```

---

## 🎯 Key Methods

| Method | What It Does | Returns |
|--------|-------------|---------|
| `signUp(email, password, data)` | Create new user in Supabase | User object or error |
| `signInWithPassword(email, password)` | Login existing user | Session or error |
| `signOut()` | Logout user | Success or error |
| `getSession()` | Get current session | Session or null |
| `onAuthStateChange(callback)` | Listen for auth changes | Subscription |
| `admin.listUsers()` | Get all users (admin only) | User[] or error |

---

## 🔐 Environment Variables

### `.env.local` (Development)
```bash
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

### `.env.example` (Template for team)
```bash
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_public_anon_key
```

---

## 📍 Where Each Part Is Used

```
App.jsx
  ↓
AuthContext.jsx ← Manages all auth logic
  ├── signUp()
  ├── signIn()
  ├── signOut()
  ├── onAuthStateChange()
  └── getSession()
      ↓
      supabaseClient.js ← Initializes Supabase SDK
          ↓
          Supabase Cloud ☁️

Components that use AuthContext:
├── LoginRegister.jsx → signUp/signIn
├── Sidebar.jsx → currentUser, signOut
├── AdminPanel.jsx → Uses supabase.auth.admin.listUsers()
└── ... any other component that needs user data
```

---

## 🧪 Testing Each Feature

### Test 1: Sign Up
```javascript
// In browser console:
const { error } = await AUTH.signUp('test@example.com', 'password123', 'Test User');
if (!error) console.log('Signup worked!');
```

### Test 2: Sign In
```javascript
const { error } = await AUTH.signIn('test@example.com', 'password123');
if (!error) console.log('Login worked!');
```

### Test 3: Get Current User
```javascript
console.log(AUTH.currentUser);
// Should show user object
```

### Test 4: Sign Out
```javascript
const { error } = await AUTH.signOut();
if (!error) console.log('Logged out!');
```

### Test 5: Session Persistence
```javascript
// 1. Login: await AUTH.signIn(...)
// 2. Refresh page: Cmd+R
// 3. Check console: console.log(AUTH.currentUser)
// 4. Should still be logged in!
```

---

## 🚨 Common Errors & Fixes

### Error: "Missing Supabase credentials"
**Fix**: Add to `.env.local`:
```bash
VITE_SUPABASE_URL=https://xxx.supabase.co
VITE_SUPABASE_ANON_KEY=xxx
```

### Error: "Invalid login credentials"
**Fix**: Check password is correct in Supabase dashboard

### Error: "User already exists"
**Fix**: Use different email or reset user in Supabase dashboard

### Error: "Failed to fetch users" (Admin Panel)
**Fix**: Check Supabase ANON_KEY has admin access. Admin methods require proper RLS setup.

---

## 🔍 Debugging Tips

### Check if User is Logged In
```javascript
console.log(AUTH.currentUser);
console.log(localStorage.getItem('education_path_current_user'));
```

### Check Session Token
```javascript
const { data: { session } } = await supabase.auth.getSession();
console.log(session?.access_token);
```

### Check All Users in Supabase
Go to: https://app.supabase.com → Your Project → Authentication → Users

### Check ANON_KEY
Go to: https://app.supabase.com → Your Project → Settings → API

---

## 🚀 Next Steps

### Easy Additions
1. Add password reset
2. Add email verification
3. Add user profile updates
4. Add avatar upload

### Medium Complexity
1. Add social login (Google/GitHub)
2. Add multi-factor authentication
3. Add user roles & permissions
4. Add activity logging

### Advanced
1. Add real-time notifications
2. Add data encryption
3. Add advanced analytics
4. Add custom authentication

---

## 📚 Official Docs

- **Supabase Docs**: https://supabase.com/docs
- **Auth Guide**: https://supabase.com/docs/guides/auth
- **JavaScript SDK**: https://supabase.com/docs/reference/javascript/auth-signup
- **Database Docs**: https://supabase.com/docs/guides/database

---

## ✨ Summary

**Before**:
- Data stored in localStorage only
- Data lost on refresh
- No real backup

**After**:
- Data stored in Supabase PostgreSQL
- Data persists forever
- Secure cloud backup
- Scalable to millions
- Enterprise-ready

**Your Auth System is Ready!** 🎉

