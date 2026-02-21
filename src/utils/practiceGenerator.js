// Lightweight practice question generator for VARC/QAR and interview practice
// Generates non-copyright, synthetically varied practice questions and brief answers.
export function generatePracticeQuestions({ area = 'varc', topic = '', subtopic = '', count = 50, role = '', company = '' } = {}) {
  const questions = [];

  const sanitize = (s) => (s || '').replace(/\s+/g, ' ').trim();
  const t = sanitize(topic);
  const s = sanitize(subtopic);

  if (area === 'interview') {
    // Generate role/company specific interview practice
    for (let i = 1; i <= count; i++) {
      const q = `Interview question ${i}: Describe a situation where you ${i % 3 === 0 ? 'resolved a production bug' : i % 3 === 1 ? 'worked in a team to deliver a feature' : 'optimised a slow query'} for the role of ${role || 'software engineer'}${company ? ` at ${company}` : ''}.`;
      const a = `Use STAR: Situation, Task, Action, Result. Keep it concise and quantify outcomes if possible. Mention tools and impact.`;
      questions.push({ q, ans: a });
    }
    return questions;
  }

  // VARC / QAR templates
  const basePrompt = s || t || 'topic';
  const rcTemplates = [
    (i) => `Read a short paragraph about ${basePrompt} and state the main idea (practice ${i}).`,
    (i) => `Identify one implicit assumption in a passage about ${basePrompt} (practice ${i}).`,
    (i) => `Give a likely inference a reader can draw from a short text on ${basePrompt} (practice ${i}).`,
    (i) => `Find a sentence that best summarizes a paragraph on ${basePrompt} (practice ${i}).`,
    (i) => `Distinguish fact vs opinion in a short claim about ${basePrompt} (practice ${i}).`
  ];

  const qarTemplates = [
    (i) => `Solve a numeric problem involving ${basePrompt}: calculate the missing value (practice ${i}).`,
    (i) => `Quick mental math: convert a percentage related to ${basePrompt} (practice ${i}).`,
    (i) => `Ratio/Proportion scenario about ${basePrompt} — find the correct ratio (practice ${i}).`,
    (i) => `Short word problem on profit/loss with values based on ${basePrompt} (practice ${i}).`,
    (i) => `Estimate or approximate answer for a real-world ${basePrompt} scenario (practice ${i}).`
  ];

  for (let i = 1; i <= count; i++) {
    let qTxt = '';
    let aTxt = '';
    if (area === 'varc') {
      const tpl = rcTemplates[i % rcTemplates.length];
      qTxt = tpl(i);
      aTxt = `Practice answer guideline: Identify central claim, pick 1–2 supporting details, and write a 1–2 sentence summary. (example hint for ${basePrompt})`;
    } else if (area === 'qar') {
      const tpl = qarTemplates[i % qarTemplates.length];
      qTxt = tpl(i);
      aTxt = `Solution hint: Translate words to equations, show steps, and simplify. (example pattern for ${basePrompt})`;
    } else {
      // generic
      qTxt = `Practice ${i} on ${basePrompt}`;
      aTxt = `Short answer hint for ${basePrompt}`;
    }

    questions.push({ q: qTxt, ans: aTxt });
  }

  return questions;
}

export default generatePracticeQuestions;
