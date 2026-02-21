// Test script to verify Gemini API integration
// Run this in browser console (F12) after the app loads

console.log('=== Testing Gemini API Integration ===\n');

// Test 1: Check if API key is loaded
const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
console.log('1. API Key Check:');
console.log('   Loaded:', apiKey ? '✓ YES' : '✗ NO');
if (apiKey) {
  const preview = apiKey.substring(0, 10) + '...' + apiKey.substring(apiKey.length - 5);
  console.log('   Preview:', preview);
}

// Test 2: Test Gemini API endpoint
async function testGeminiAPI() {
  console.log('\n2. Testing Gemini API Connection:');
  
  if (!apiKey) {
    console.log('   ✗ No API key found. Set VITE_GOOGLE_API_KEY in .env file');
    return;
  }

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: "Hello, Gemini! Are you working?"
            }]
          }]
        })
      }
    );

    if (response.ok) {
      const data = await response.json();
      const responseText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
      console.log('   ✓ API Connected successfully!');
      console.log('   Response:', responseText?.substring(0, 100) + '...');
      return true;
    } else {
      const error = await response.text();
      console.log('   ✗ API Error:', response.status);
      console.log('   Details:', error.substring(0, 200));
      return false;
    }
  } catch (err) {
    console.log('   ✗ Network Error:', err.message);
    return false;
  }
}

// Test 3: Check if solutions are available
console.log('\n3. Checking DSA Solutions:');
try {
  const { dsaSolutions } = await import('../data/dsaSolutions.js');
  const problems = Object.keys(dsaSolutions);
  console.log('   ✓ Solutions loaded');
  console.log('   Available problems:', problems.length);
  console.log('   First 3:', problems.slice(0, 3).join(', '));
} catch (err) {
  console.log('   ✗ Failed to load solutions:', err.message);
}

// Test 4: Check if programming solutions are available
console.log('\n4. Checking Programming Solutions:');
try {
  const { programmingSolutions } = await import('../data/programmingSolutions.js');
  const languages = Object.keys(programmingSolutions);
  console.log('   ✓ Solutions loaded');
  console.log('   Available languages:', languages.join(', '));
  console.log('   Python topics:', Object.keys(programmingSolutions.Python || {}).join(', '));
} catch (err) {
  console.log('   ✗ Failed to load solutions:', err.message);
}

// Run API test
await testGeminiAPI();

console.log('\n=== Testing Complete ===');
console.log('\n📋 Summary:');
console.log('   • Check results above');
console.log('   • If API connected: ✓ Chatbot will work with AI');
console.log('   • If key missing: Use local KB (500+ facts)');
console.log('   • Solutions: Both DSA and Programming available');
