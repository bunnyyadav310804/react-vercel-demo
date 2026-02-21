import React, { createContext, useContext, useState, useEffect } from 'react';
import supabase from '../services/supabaseClient';

// Create Auth Context
const AuthContext = createContext();

// Auth Provider Component
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check if user is already logged in on mount
  useEffect(() => {
    checkUser();

    // Subscribe to auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        const userData = {
          id: session.user.id,
          email: session.user.email,
          fullName: session.user.user_metadata?.full_name || '',
          createdAt: session.user.created_at,
          photoURL: session.user.user_metadata?.avatar_url || null
        };
        setCurrentUser(userData);
        localStorage.setItem('education_path_current_user', JSON.stringify(userData));
      } else {
        setCurrentUser(null);
        localStorage.removeItem('education_path_current_user');
      }
    });

    return () => subscription?.unsubscribe();
  }, []);

  const checkUser = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        const userData = {
          id: session.user.id,
          email: session.user.email,
          fullName: session.user.user_metadata?.full_name || '',
          createdAt: session.user.created_at,
          photoURL: session.user.user_metadata?.avatar_url || null
        };
        setCurrentUser(userData);
        localStorage.setItem('education_path_current_user', JSON.stringify(userData));
      }
    } catch (err) {
      console.error('Error checking user:', err);
    } finally {
      setLoading(false);
    }
  };

  // Sign Up Function - with Supabase
  const signUp = async (email, password, fullName) => {
    setLoading(true);
    setError(null);
    try {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName
          },
          emailRedirectTo: `${window.location.origin}/`
        }
      });

      if (signUpError) {
        console.error('Signup error:', signUpError);
        setError(signUpError.message);
        return { error: { message: signUpError.message } };
      }

      // Auto sign in after signup - THIS IS CRITICAL
      let sessionData = data;
      if (data.user && !data.user.user_metadata?.email_verified) {
        console.log('🔐 Email verification not required, auto-logging in...');
        // Try to auto-login to establish session
        const { data: loginData, error: loginError } = await supabase.auth.signInWithPassword({
          email,
          password
        });
        
        if (loginError) {
          console.error('❌ Auto-login error:', loginError.message);
          // Even if auto-login fails, proceed with signup - user can login manually
        } else {
          console.log('✅ Auto-login successful, session established');
          sessionData = loginData;
        }
      }

      const userData = {
        id: data.user.id,
        email: data.user.email,
        fullName: fullName,
        createdAt: data.user.created_at,
        photoURL: null
      };

      // Try to save user to users table (for admin panel)
      try {
        const { error: insertError } = await supabase
          .from('users')
          .insert({
            id: data.user.id,
            email: data.user.email,
            full_name: fullName,
            created_at: new Date().toISOString()
          });
        
        if (insertError) {
          console.error('❌ Error inserting user to users table:', insertError);
        } else {
          console.log('✅ User saved to users table:', data.user.id);
        }
      } catch (tableErr) {
        console.error('❌ Exception saving to users table:', tableErr.message);
      }

      localStorage.setItem('education_path_current_user', JSON.stringify(userData));
      // ALWAYS clear welcome flag on signup so it shows on next login
      localStorage.removeItem('education_path_welcome_seen');
      console.log('✅ Welcome flag cleared for signup');
      
      // Initialize user progress - must match progressTracker.js sections
      const userProgress = {
        sections: {
          placement: 0,
          qar: 0,
          vacr: 0,
          dsa: 0,
          programming: 0,
          blueprint: 0,
          careers: 0,
          resume: 0,
          jobsearch: 0,
          company: 0,
          exams: 0,
          aiml: 0,
          powerbi: 0,
          dataeng: 0,
          webframes: 0,
          mobile: 0,
          devops: 0,
          chatbot: 0
        },
        totalProgress: 0,
        lastUpdated: new Date().toISOString()
      };
      localStorage.setItem(`education_path_progress_${userData.id}`, JSON.stringify(userProgress));
      setCurrentUser(userData);
      console.log('✅ User state updated, currentUser is now set');
      setError(null);
      return { error: null };
    } catch (err) {
      const errorMsg = err?.message || 'Sign up failed';
      console.error('❌ Signup exception:', errorMsg);
      setError(errorMsg);
      return { error: { message: errorMsg } };
    } finally {
      setLoading(false);
    }
  };

  // Sign In Function - with Supabase
  const signIn = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (signInError) {
        setError(signInError.message);
        return { error: { message: signInError.message } };
      }

      const userData = {
        id: data.user.id,
        email: data.user.email,
        fullName: data.user.user_metadata?.full_name || '',
        createdAt: data.user.created_at,
        photoURL: data.user.user_metadata?.avatar_url || null
      };

      // Try to save user to users table if not already there
      try {
        const { data: existingUser, error: checkError } = await supabase
          .from('users')
          .select('id')
          .eq('id', data.user.id)
          .limit(1);
        
        if (checkError) {
          console.error('❌ Error checking user:', checkError);
        } else if (!existingUser || existingUser.length === 0) {
          const { error: insertError } = await supabase.from('users').insert({
            id: data.user.id,
            email: data.user.email,
            full_name: data.user.user_metadata?.full_name || '',
            created_at: new Date().toISOString()
          });
          
          if (insertError) {
            console.error('❌ Error inserting user to table:', insertError);
          } else {
            console.log('✅ User saved to users table on login:', data.user.id);
          }
        } else {
          console.log('✅ User already in users table:', data.user.id);
        }
      } catch (tableErr) {
        console.error('❌ Exception saving to users table:', tableErr.message);
      }

      localStorage.setItem('education_path_current_user', JSON.stringify(userData));
      // ALWAYS clear welcome flag on login so it shows right away
      localStorage.removeItem('education_path_welcome_seen');
      
      // Load or initialize user progress
      const existingProgress = localStorage.getItem(`education_path_progress_${userData.id}`);
      if (!existingProgress) {
        const userProgress = {
          sections: {
            placement: 0,
            qar: 0,
            vacr: 0,
            dsa: 0,
            programming: 0,
            blueprint: 0,
            careers: 0,
            resume: 0,
            jobsearch: 0,
            company: 0,
            exams: 0
          },
          totalProgress: 0,
          lastUpdated: new Date().toISOString()
        };
        localStorage.setItem(`education_path_progress_${userData.id}`, JSON.stringify(userProgress));
      }
      
      setCurrentUser(userData);
      setError(null);
      return { error: null };
    } catch (err) {
      const errorMsg = err?.message || 'Login failed';
      setError(errorMsg);
      return { error: { message: errorMsg } };
    } finally {
      setLoading(false);
    }
  };

  // Sign Out Function
  const signOut = async () => {
    setLoading(true);
    try {
      const { error: signOutError } = await supabase.auth.signOut();
      if (signOutError) throw signOutError;
      
      localStorage.removeItem('education_path_current_user');
      setCurrentUser(null);
      setError(null);
      return { data: {} };
    } catch (err) {
      const errorMsg = err?.message || 'Sign out failed';
      setError(errorMsg);
      return { error: err };
    } finally {
      setLoading(false);
    }
  };

  // Delete User Function
  const deleteUser = async (userId) => {
    setLoading(true);
    try {
      // Delete user from users table first
      const { error: tableError } = await supabase
        .from('users')
        .delete()
        .eq('id', userId);
      
      if (tableError) {
        console.error('Error deleting from users table:', tableError);
      }

      // Delete user from Supabase auth
      // Note: This requires service role with admin privileges
      // For now, we'll call a backend endpoint to delete the user
      try {
        const response = await fetch('/api/delete-user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId })
        });
        
        if (!response.ok) {
          console.error('Backend delete failed:', response.statusText);
        }
      } catch (fetchErr) {
        console.error('Failed to call delete endpoint:', fetchErr);
      }

      // If deleting current user, sign them out
      if (currentUser?.id === userId) {
        await signOut();
      }

      return { error: null };
    } catch (err) {
      const errorMsg = err?.message || 'Delete user failed';
      setError(errorMsg);
      return { error: { message: errorMsg } };
    } finally {
      setLoading(false);
    }
  };

  const value = {
    currentUser,
    loading,
    error,
    signUp,
    signIn,
    signOut,
    deleteUser,
    isAuthenticated: !!currentUser
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use Auth Context
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
