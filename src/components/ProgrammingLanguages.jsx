import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import progressTracker from '../utils/progressTracker';
import { programmingLanguages } from '../data/programmingLanguages';
import { getProgrammingSolution, programmingSolutions } from '../data/programmingSolutions';
import CodeEditor from './CodeEditor';
import './ProgrammingLanguages.css';

const ProgrammingLanguages = () => {
  // eslint-disable-next-line no-unused-vars
  const { currentUser } = useAuth();
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedMCQ, setSelectedMCQ] = useState(null);
  const [selectedTheoryContent, setSelectedTheoryContent] = useState(null);
  const [showCodeEditor, setShowCodeEditor] = useState(false);
  const [practiceCode, setPracticeCode] = useState('');
  const [mcqVisible, setMcqVisible] = useState({});

  // Progress updates when user completes programming tasks
  // Update progress based on answers given to MCQs
  const updateProgressOnAnswer = (answers, totalQuestions, sectionKey = 'programming', mcqs = []) => {
    if (!currentUser?.id || totalQuestions === 0 || mcqs.length === 0) return;
    const correctCount = mcqs.reduce((acc, m, idx) => acc + ((answers[idx] === m.answer) ? 1 : 0), 0);
    const percent = Math.round((correctCount / totalQuestions) * 100);
    try {
      progressTracker.updateSectionProgress(currentUser.id, sectionKey, percent);
    } catch (e) {
      // ignore
    }
  };

  if (selectedLanguage && selectedTopic) {
    const language = programmingLanguages.find(l => l.id === selectedLanguage);
    const topic = language.topics.find(t => t.level === selectedTopic);

    return (
      <div className="programming-container">
        <button className="back-btn" onClick={() => setSelectedTopic(null)}>
          ← Back to Topics
        </button>
        <h2 className="page-title">
          {language.icon} {language.name} - {topic.level}
        </h2>

        {/* Content Sections */}
        <div className="content-sections">
          {/* Learning Content */}
          <div className="section-box">
            <h3>📚 Learning Content</h3>
            <div className="content-list">
              {topic.content.map((item, idx) => (
                <div key={idx} className="content-item" style={{ cursor: 'pointer' }} onClick={() => {
                  // Try to load detailed theory/solution from programmingSolutions
                  const langName = programmingLanguages.find(l => l.id === selectedLanguage)?.name || 'Python';
                  // Try direct match keys
                  const langData = programmingSolutions[langName] || {};
                  // find best match by key containing item words
                  const matchKey = Object.keys(langData).find(k => k.toLowerCase().includes(item.toLowerCase().split(/[,&]/)[0].trim()));
                  const text = matchKey ? (langData[matchKey].solution || langData[matchKey].problem || null) : null;
                  setSelectedTheoryContent({ title: item, text });
                }}>
                  <div className="content-icon">✓</div>
                  <span className="content-text">{item}</span>
                  <button className="enter" onClick={(e) => { e.stopPropagation(); const langName = programmingLanguages.find(l => l.id === selectedLanguage)?.name || 'Python'; const langData = programmingSolutions[langName] || {}; const matchKey = Object.keys(langData).find(k => k.toLowerCase().includes(item.toLowerCase().split(/[,&]/)[0].trim())); const text = matchKey ? (langData[matchKey].solution || langData[matchKey].problem || null) : null; setSelectedTheoryContent({ title: item, text }); }}>Learn →</button>
                </div>
              ))}
            </div>
          </div>

          {selectedTheoryContent && (
            <div style={{ position: 'fixed', zIndex: 1000, top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ background: '#FFFFFF', color: '#1f2937', borderRadius: 12, maxWidth: 600, width: '90vw', boxShadow: '0 10px 40px rgba(0,0,0,0.16)', padding: '40px', position: 'relative', maxHeight: '85vh', overflowY: 'auto' }}>
                <button onClick={() => setSelectedTheoryContent(null)} style={{ position: 'absolute', top: 16, right: 16, background: '#1890ff', color: '#fff', border: 'none', borderRadius: 6, padding: '8px 16px', fontWeight: 700, fontSize: 16, cursor: 'pointer' }}>✕ Close</button>
                <h2 style={{ fontWeight: 900, fontSize: 28, marginBottom: 24, color: '#1890ff', marginTop: 0 }}>{selectedTheoryContent.title}</h2>
                <div style={{ fontSize: 16, lineHeight: 1.8, color: '#374151' }}>
                  {selectedTheoryContent.text
                    ? <pre style={{ background: '#f3f4f6', borderRadius: 10, padding: 20, fontSize: 14, fontFamily: '"Fira Code", "Courier New", monospace', whiteSpace: 'pre-wrap', wordWrap: 'break-word', border: '1px solid #e5e7eb', marginTop: 0, marginBottom: 0, color: '#1f2937' }}>{selectedTheoryContent.text}</pre>
                    : <div><p style={{ marginTop: 0 }}><strong>Study: {selectedTheoryContent.title}</strong></p><p>Use official documentation and practice examples to master this topic.</p></div>}
                  <p style={{ marginTop: 20, color: '#6b7280', fontSize: 15, fontStyle: 'italic', borderTop: '1px solid #e5e7eb', paddingTop: 16 }}>💡 <strong>Tip:</strong> Practice these concepts with real-world examples.</p>
                </div>
              </div>
            </div>
          )}

          {/* MCQs (hidden by default; toggle to show) */}
          <div className="section-box">
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
              <h3 style={{margin: 0}}>❓ Practice MCQs</h3>
              <button
                className="toggle-mcqs-btn"
                onClick={(e) => { e.stopPropagation(); setMcqVisible(prev => ({ ...prev, [selectedTopic]: !prev[selectedTopic] })); }}
                style={{ padding: '8px 12px', borderRadius: 6, cursor: 'pointer', border: '1px solid #d1d5db', background: mcqVisible[selectedTopic] ? '#F3F4F6' : '#FFFFFF', color: mcqVisible[selectedTopic] ? '#111827' : '#111827' }}
              >
                {mcqVisible[selectedTopic] ? 'Hide MCQs' : 'Show MCQs'}
              </button>
            </div>

            <div className="mcqs-container" style={{ display: mcqVisible[selectedTopic] ? 'block' : 'none', marginTop: 12 }}>
              {/* answers: array storing selected option index per question */}
              {topic.mcqs && (
                <MCQTest
                  mcqs={topic.mcqs}
                  sectionKey="programming"
                  userSectionId={selectedLanguage}
                  updateProgressOnAnswer={updateProgressOnAnswer}
                />
              )}
            </div>
          </div>

          {/* Problems */}
          <div className="section-box">
            <h3>🔧 Practice Problems</h3>
            <div className="problems-list">
              {topic.problems.map((problem, idx) => (
                <div key={idx} className="problem-card">
                  <div className="problem-number">{idx + 1}</div>
                  <div className="problem-text">{problem}</div>
                  <button
                    className="load-problem-solution-btn"
                    onClick={() => {
                      const langName = programmingLanguages.find(l => l.id === selectedLanguage)?.name || 'Python';
                      const solution = getProgrammingSolution(langName, selectedTopic, problem);
                      if (solution && !solution.includes("Solution not available")) {
                        setPracticeCode(solution);
                        setShowCodeEditor(true);
                        alert(`✓ Solution for "${problem}" loaded in editor!`);
                      } else {
                        alert('Solution not available for this problem yet.');
                      }
                    }}
                    title="Click to load this problem's solution"
                  >
                    📥 Load Solution
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Code Editor */}
          <div className="section-box">
            <h3>💻 Try It Out</h3>
            <div style={{ marginBottom: '12px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <button
                className="btn btn-solution"
                onClick={() => {
                  const langName = programmingLanguages.find(l => l.id === selectedLanguage)?.name || 'Python';
                  const solution = getProgrammingSolution(langName, selectedTopic);
                  if (solution && !solution.includes("Solution not available")) {
                    setPracticeCode(solution);
                    setShowCodeEditor(true);
                    alert('✓ Solution loaded! Check the editor.');
                  } else {
                    alert('Solution not available for ' + langName + ' yet.');
                  }
                }}
                style={{
                  padding: '8px 12px',
                  backgroundColor: '#1890ff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '13px'
                }}
              >
                💡 Load Solution
              </button>
              <button
                className="code-editor-toggle"
                onClick={() => setShowCodeEditor(!showCodeEditor)}
                style={{
                  padding: '8px 12px',
                  backgroundColor: '#52c41a',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '13px'
                }}
              >
                {showCodeEditor ? '▼ Hide Editor' : '▶ Open Editor'}
              </button>
            </div>
            {showCodeEditor && (
              <div className="code-editor-container">
                <CodeEditor
                  initialCode={practiceCode}
                  language={programmingLanguages.find(l => l.id === selectedLanguage)?.name || 'Python'}
                  onCodeChange={setPracticeCode}
                  showCompiler={true}
                  allowLanguageChange={false}
                />
              </div>
            )}
          </div>

          {/* Resources */}
          <div className="section-box">
            <h3>🔗 Practice Resources</h3>
            <div className="resources-box">
              <a href={language.resources.documentation} target="_blank" rel="noopener noreferrer" className="resource-link">
                📖 Official Documentation
              </a>
              {language.resources.practiceLinks.map((link, idx) => (
                <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="resource-link">
                  🌐 {link.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (selectedLanguage) {
    const language = programmingLanguages.find(l => l.id === selectedLanguage);
    return (
      <div className="programming-container">
        <button className="back-btn" onClick={() => setSelectedLanguage(null)}>
          ← Back to Languages
        </button>
        <h2 className="page-title">{language.icon} {language.name}</h2>

        <div className="topics-grid">
          {language.topics.map((topic, idx) => (
            <div
              key={idx}
              className="topic-card"
              onClick={() => setSelectedTopic(topic.level)}
            >
              <div className="topic-level">{topic.level}</div>
              <div className="topic-content-count">
                📚 {topic.content.length} Topics • ❓ {topic.mcqs.length} MCQs • 🔧 {topic.problems.length} Problems
              </div>
              <button className="enter">Enter →</button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="programming-container">
      <h2 className="page-title">💻 Programming Languages & Web Development</h2>

      <div className="languages-grid">
        {programmingLanguages.map((lang, idx) => (
          <div
            key={idx}
            className="language-card"
            onClick={() => setSelectedLanguage(lang.id)}
          >
            <div className="lang-icon">{lang.icon}</div>
            <h3>{lang.name}</h3>
            <p className="lang-difficulty">{lang.difficulty}</p>
            <p className="lang-description">{lang.description}</p>
            <div className="lang-levels">
              {lang.topics.map((t, i) => (
                <span key={i} className="level-badge">{t.level}</span>
              ))}
            </div>
            <button className="enter">Explore →</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgrammingLanguages;

// Reusable MCQ test component
function MCQTest({ mcqs = [], sectionKey = 'programming', updateProgressOnAnswer }) {
  const { currentUser } = useAuth();
  const [answers, setAnswers] = useState(() => mcqs.map(() => null));

  const select = (qIdx, optIdx) => {
    setAnswers(prev => {
      if (prev[qIdx] != null) return prev; // already answered
      const copy = [...prev];
      copy[qIdx] = optIdx;
      if (updateProgressOnAnswer && mcqs.length > 0) {
        setTimeout(() => updateProgressOnAnswer(copy, mcqs.length, sectionKey, mcqs), 0);
      }
      return copy;
    });
  };

  const finish = () => {
    const total = mcqs.length;
    const correct = mcqs.reduce((acc, m, idx) => acc + ((answers[idx] === m.answer) ? 1 : 0), 0);
    const percent = Math.round((correct / total) * 100);
    try {
      const storedUser = localStorage.getItem('education_path_current_user');
      if (storedUser) {
        const u = JSON.parse(storedUser);
        progressTracker.updateSectionProgress(u.id, sectionKey, percent);
      }
    } catch (e) {}
    alert(`Test finished — Score: ${correct}/${total} (${percent}%)`);
  };

  const restart = () => {
    setAnswers(mcqs.map(() => null));
  };

  return (
    <div>
      {mcqs.map((mcq, idx) => {
        const answered = answers[idx] != null;
        const isCorrect = answered && answers[idx] === mcq.answer;
        return (
          <div key={idx} className="mcq-card" style={{ padding: 16, marginBottom: 16, borderRadius: 8, background: '#f9fafb', border: '1px solid #e5e7eb' }}>
            <div className="mcq-question" style={{ fontWeight: 600, fontSize: 16, marginBottom: 12, color: '#111827' }}>{idx + 1}. {mcq.question}</div>
            <div className="mcq-options" style={{ display: 'grid', gap: 8 }}>
              {mcq.options.map((opt, optIdx) => {
                const isSelected = answered && answers[idx] === optIdx;
                const bgColor = isSelected ? (isCorrect ? '#059669' : '#dc2626') : '#ffffff';
                const borderColor = isSelected ? (isCorrect ? '#047857' : '#991b1b') : '#d1d5db';
                const textColor = isSelected ? '#ffffff' : '#111827';
                
                return (
                  <button
                    key={optIdx}
                    className="option-btn"
                    onClick={() => select(idx, optIdx)}
                    disabled={answered}
                    style={{
                      padding: 12,
                      borderRadius: 6,
                      border: `2px solid ${borderColor}`,
                      backgroundColor: bgColor,
                      color: textColor,
                      fontWeight: isSelected ? 700 : 500,
                      fontSize: 15,
                      cursor: answered ? 'not-allowed' : 'pointer',
                      opacity: 1,
                      textAlign: 'left'
                    }}
                  >
                    {String.fromCharCode(65 + optIdx)}) {opt}
                  </button>
                );
              })}
            </div>
            {answered && (
              <div>
                <div style={{
                  marginTop: 12,
                  color: isCorrect ? '#059669' : '#dc2626',
                  fontWeight: 700,
                  fontSize: 16,
                  textAlign: 'center'
                }}>
                  {isCorrect ? '✅ Correct' : '❌ Incorrect'}
                </div>
                {mcq.explanation && (
                  <div style={{
                    marginTop: 8,
                    padding: 12,
                    background: '#f3f4f6',
                    borderRadius: 6,
                    color: '#111827',
                    fontSize: 14,
                    lineHeight: 1.6,
                    border: '1px solid #e5e7eb'
                  }}>
                    <strong>Explanation:</strong> {mcq.explanation}
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
      <div style={{ marginTop: 24, display: 'flex', gap: 12 }}>
        <button onClick={finish} style={{ backgroundColor: '#1890ff', color: 'white', fontWeight: 700, borderRadius: 6, padding: '12px 24px', border: 'none', fontSize: 16, cursor: 'pointer' }}>Finish Test</button>
        <button onClick={restart} style={{ backgroundColor: '#FFFFFF', color: '#1890ff', fontWeight: 700, borderRadius: 6, padding: '12px 24px', border: '2px solid #1890ff', fontSize: 16, cursor: 'pointer' }}>Retake Test</button>
      </div>
    </div>
  );
}

