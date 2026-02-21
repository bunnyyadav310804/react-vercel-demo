// MCQ Option processor: takes options array and returns shuffled with correct index tracked
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function makeShuffledOptions(optionsArray, correctIndexFromData = 0) {
  // Input: ['Option A', 'Option B', 'Option C', 'Option D'], correctIndex
  // Returns shuffled with correctIndex mapping
  
  // Guard for undefined or empty options
  if (!optionsArray || !Array.isArray(optionsArray) || optionsArray.length === 0) {
    return {
      options: [],
      correctIndex: -1
    };
  }
  
  // Ensure correctIndexFromData is valid
  if (typeof correctIndexFromData !== 'number' || correctIndexFromData < 0 || correctIndexFromData >= optionsArray.length) {
    correctIndexFromData = 0;
  }
  
  const optionsWithIndex = optionsArray.map((text, idx) => ({ text, originalIndex: idx }));
  const shuffled = shuffle(optionsWithIndex);
  
  // Find which position the correct answer (originalIndex === correctIndexFromData) is now at
  const correctIdx = shuffled.findIndex(o => o.originalIndex === correctIndexFromData);
  
  return {
    options: shuffled.map((o, idx) => ({ id: String.fromCharCode(65 + idx), text: o.text })), // A, B, C, D
    correctIndex: correctIdx
  };
}

export default makeShuffledOptions;
