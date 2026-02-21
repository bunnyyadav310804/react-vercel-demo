// Gemini AI Chatbot Service
// Uses Google Generative AI (Gemini) API
// ============================================

const GOOGLE_API_KEY = import.meta.env?.VITE_GOOGLE_API_KEY || '';
const GEMINI_ENDPOINT = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';

// System prompts for different contexts
const systemPrompts = {
  dsa: `You are an expert Data Structures and Algorithms tutor. Help users understand DSA concepts, explain algorithms, and provide solutions to coding problems. Be clear, concise, and provide code examples when helpful. Focus on time complexity, space complexity, and best practices. Keep responses focused and practical.`,
  
  programming: `You are an expert programming language instructor. Help users learn programming concepts, syntax, best practices, and solve programming problems. Provide clear explanations and code examples. Cover fundamentals, intermediate, and advanced topics. Be practical and encouraging.`,
  
  interview: `You are an expert interview coach for software engineering positions. Help users prepare for technical interviews, explain concepts, practice questions, and provide interview strategies. Focus on clarity, confidence building, and practical tips. Give actionable advice.`,
  
  placement: `You are a career guidance counselor specializing in tech placements. Help students with resume preparation, company knowledge, salary negotiations, and interview strategies. Provide actionable advice based on industry standards. Be encouraging and supportive.`,
  
  general: `You are a helpful AI assistant for a software engineering learning platform. Help users with questions about programming, data structures, web development, databases, and career guidance. Be encouraging, clear, and provide practical solutions. Keep responses concise and focused.`,
};

// Local knowledge base as fallback
const fallbackResponses = {
  dsa: `I'm here to help with Data Structures and Algorithms. I can explain concepts like arrays, linked lists, trees, graphs, sorting, searching, and dynamic programming. Ask me about specific problems or algorithms!`,
  
  programming: `I can help you learn programming in Python, JavaScript, Java, C++, and more. I can explain syntax, concepts, best practices, and help debug your code. What would you like to learn?`,
  
  interview: `I'm here to help you prepare for technical interviews. I can practice questions with you, explain concepts, and give interview tips. What type of questions would you like to practice?`,
  
  placement: `I can help with your placement journey! I can discuss resume building, company preparation, salary negotiations, and interview strategies. What aspect would you like help with?`,
  
  general: `Hello! I'm your AI learning assistant. I can help with programming, DSA, interview prep, and career guidance. What would you like to learn today?`,
};

/**
 * Detect context from user message
 * @param {string} message - User's message
 * @returns {string} - Detected context
 */
const detectContext = (message) => {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('dsa') || lowerMessage.includes('algorithm') || 
      lowerMessage.includes('data structure') || lowerMessage.includes('array') ||
      lowerMessage.includes('linked list') || lowerMessage.includes('tree') ||
      lowerMessage.includes('graph') || lowerMessage.includes('sorting') ||
      lowerMessage.includes('search')) {
    return 'dsa';
  }
  
  if (lowerMessage.includes('python') || lowerMessage.includes('javascript') ||
      lowerMessage.includes('java') || lowerMessage.includes('c++') ||
      lowerMessage.includes('code') || lowerMessage.includes('program') ||
      lowerMessage.includes('syntax')) {
    return 'programming';
  }
  
  if (lowerMessage.includes('interview') || lowerMessage.includes('preparation') ||
      lowerMessage.includes('practice question') || lowerMessage.includes('coding round')) {
    return 'interview';
  }
  
  if (lowerMessage.includes('placement') || lowerMessage.includes('resume') ||
      lowerMessage.includes('salary') || lowerMessage.includes('company') ||
      lowerMessage.includes('job')) {
    return 'placement';
  }
  
  return 'general';
};

/**
 * Send message to Gemini API
 * @param {string} userMessage - User's message
 * @param {string} context - Context type (dsa, programming, interview, placement, general)
 * @returns {Promise<string>} - Gemini response
 */
export const chatWithGemini = async (userMessage, context = null) => {
  try {
    // Auto-detect context if not provided
    const detectedContext = context || detectContext(userMessage);
    
    console.log(`🤖 Chatbot Context: ${detectedContext}`);
    console.log(`📝 User Message: ${userMessage.substring(0, 50)}...`);

    // If no API key, use fallback response
    if (!GOOGLE_API_KEY) {
      console.warn('⚠️ No Gemini API key found, using fallback response');
      return fallbackResponses[detectedContext] || fallbackResponses.general;
    }

    // Prepare the system message
    const systemMessage = systemPrompts[detectedContext] || systemPrompts.general;
    const fullMessage = `${systemMessage}\n\nUser Question: ${userMessage}`;

    // Call Gemini API
    const response = await fetch(`${GEMINI_ENDPOINT}?key=${GOOGLE_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: fullMessage,
              },
            ],
          },
        ],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        },
      }),
    });

    if (!response.ok) {
      console.error(`❌ API Error: ${response.status}`);
      console.warn('💡 Using fallback response');
      return fallbackResponses[detectedContext] || fallbackResponses.general;
    }

    const data = await response.json();

    // Extract response text
    if (data.candidates && data.candidates[0] && data.candidates[0].content) {
      const aiResponse = data.candidates[0].content.parts[0].text;
      console.log('✅ Gemini API Response Received');
      return aiResponse;
    }

    console.warn('⚠️ No valid response from API, using fallback');
    return fallbackResponses[detectedContext] || fallbackResponses.general;
  } catch (error) {
    console.error('💥 Chatbot Error:', error.message);
    const context2 = context || 'general';
    return fallbackResponses[context2] || `Error: ${error.message}`;
  }
};

/**
 * Send message to ChatGPT API (Legacy - kept for backward compatibility)
 * @param {string} userMessage - User's message
 * @param {string} context - Context type (dsa, programming, interview, placement, general)
 * @param {Array} conversationHistory - Previous messages for context
 * @returns {Promise<string>} - Response
 */
export const chatWithChatGPT = async (userMessage, context = 'general') => {
  // Redirect to Gemini API
  return chatWithGemini(userMessage, context);
};

/**
 * Get code explanation from Gemini
 * @param {string} code - Code to explain
 * @param {string} language - Programming language
 * @returns {Promise<string>} - Code explanation
 */
export const explainCode = async (code, language = 'JavaScript') => {
  const prompt = `Please explain the following ${language} code. Break down what it does, explain key concepts, and highlight any important patterns or best practices:\n\n${code}`;
  return chatWithGemini(prompt, 'programming');
};

/**
 * Get optimized code solution
 * @param {string} code - Code to optimize
 * @param {string} language - Programming language
 * @returns {Promise<string>} - Optimized code and explanation
 */
export const optimizeCode = async (code, language = 'JavaScript') => {
  const prompt = `Please review and optimize the following ${language} code. Suggest improvements for performance, readability, and best practices. Provide the optimized code and explain the changes:\n\n${code}`;
  return chatWithGemini(prompt, 'programming');
};

/**
 * Get help with DSA problem
 * @param {string} problemStatement - Problem description
 * @param {Array} hints - Optional hints about approach
 * @returns {Promise<string>} - Solution strategy and code
 */
export const solveDSAProblem = async (problemStatement, hints = []) => {
  let prompt = `Help me solve this DSA problem:\n\n${problemStatement}\n\n`;
  if (hints.length > 0) {
    prompt += `Consider these hints:\n${hints.map((h, i) => `${i + 1}. ${h}`).join('\n')}\n\n`;
  }
  prompt += 'Provide a clear solution strategy, explain the approach, and provide pseudocode or actual code.';
  
  return chatWithGemini(prompt, 'dsa');
};

/**
 * Get interview preparation tips
 * @param {string} company - Company name
 * @param {string} role - Job role
 * @returns {Promise<string>} - Interview tips and strategies
 */
export const getInterviewTips = async (company, role) => {
  const prompt = `I'm preparing for an interview at ${company} for the ${role} position. Please provide:
1. Key technical topics I should focus on
2. Common interview questions for this role
3. Tips for the interview process
4. Salary negotiation advice
5. Company-specific insights`;
  
  return chatWithGemini(prompt, 'interview');
};

export default {
  chatWithGemini,
  chatWithChatGPT,
  explainCode,
  optimizeCode,
  solveDSAProblem,
  getInterviewTips,
};
