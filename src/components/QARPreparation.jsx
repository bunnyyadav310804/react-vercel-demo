import React, { useState, useMemo } from "react";
import { useAuth } from "../context/AuthContext";
// progressTracker available for future tracking
import { qarTopics } from "../data/qarLinks";
import { qarTheory } from "../data/varcAndQarTheory";
import { qarQuestions } from "../data/practiceQuestions";
import TopicCard from "./TopicCard";
import { makeShuffledOptions } from "../utils/mcqGenerator";
import progressTracker from '../utils/progressTracker';

export default function QARPreparation() {
  // eslint-disable-next-line no-unused-vars
  const { currentUser } = useAuth();
  const [selectedTheory, setSelectedTheory] = useState(null);
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);
  const [practiceMode, setPracticeMode] = useState(false);
  const [practiceIndex, setPracticeIndex] = useState(0);
  const [practiceHereMode, setPracticeHereMode] = useState(false);
  const [practiceTopic, setPracticeTopic] = useState(null);
  const [practiceAnswers, setPracticeAnswers] = useState({});
  const [showTheoryContent, setShowTheoryContent] = useState(false);
  const [showPracticeResources, setShowPracticeResources] = useState(false);

  // Get real questions for selected topic
  const topicPracticeList = useMemo(() => {
    if (!practiceTopic) return [];
    return (qarQuestions[practiceTopic] || []);
  }, [practiceTopic]);

  // Progress updates when user solves QAR questions
  // Update progress based on answers given
  const updateProgressOnAnswer = (answers, totalQuestions) => {
    if (!currentUser?.id || totalQuestions === 0 || !topicPracticeList.length) return;
    const correctCount = Object.entries(answers).reduce((acc, [idx, optionId]) => {
      const item = topicPracticeList[idx];
      if (!item || !optionId) return acc;
      const sh = makeShuffledOptions(item.options || [], item.correctIndex);
      const selectedIdx = optionId.charCodeAt(0) - 65;
      return acc + (selectedIdx === sh.correctIndex ? 1 : 0);
    }, 0);
    const percent = Math.round((correctCount / totalQuestions) * 100);
    try {
      progressTracker.updateSectionProgress(currentUser.id, 'qar', percent);
    } catch (e) {
      // ignore
    }
  };

  if (selectedTheory && selectedSubtopic) {
    const theory = qarTheory.find(t => t.topic === selectedTheory);
    const subtopic = theory?.subtopics?.find(s => s.name === selectedSubtopic);
    
    if (!subtopic) return <div className="page">Loading...</div>;
    
    const practiceList = subtopic.practiceQuestions || [];

    return (
      <div className="page">
        <button className="back-btn" onClick={() => setSelectedSubtopic(null)}>
          ← Back to Topics
        </button>
        <h2 className="page-title">📚 {selectedSubtopic}</h2>

        <div className="theory-sections">
          <div className="theory-box light">
            <h3>📖 Tutorial</h3>
            <p className="theory-content">{subtopic.tutorial}</p>
          </div>

          <div className="theory-box light">
            <h3>🔑 Key Points</h3>
            <ul className="key-points-list">
              {subtopic.keyPoints.map((point, idx) => (
                <li key={idx} className="key-point-item">
                  <span className="point-icon">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: 12 }}>
              <button className="enter" onClick={() => { setPracticeMode(!practiceMode); setPracticeIndex(0); }}>{practiceMode ? 'Hide Practice' : 'Practice Questions (50+)'}</button>
            </div>
          </div>
        </div>

        {practiceMode && (
          <PracticeMCQ
            practiceList={practiceList}
            index={practiceIndex}
            setIndex={setPracticeIndex}
          />
        )}
      </div>
    );
  }

  if (selectedTheory) {
    const theory = qarTheory.find(t => t.topic === selectedTheory);
    return (
      <div className="page">
        <button className="back-btn" onClick={() => setSelectedTheory(null)}>
          ← Back to Topics
        </button>
        <h2 className="page-title">📚 {selectedTheory}</h2>

        <div className="subtopics-grid">
          {theory.subtopics.map((subtopic, idx) => (
            <div
              key={idx}
              className="subtopic-card light"
              onClick={() => setSelectedSubtopic(subtopic.name)}
            >
              <h4>{subtopic.name}</h4>
              <p className="subtopic-preview">{subtopic.tutorial.substring(0, 100)}...</p>
              <button className="enter" onClick={(e) => { e.stopPropagation(); setSelectedSubtopic(subtopic.name); }}>Learn More →</button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <h1 className="page-title">📊 QAR Preparation</h1>

      {practiceHereMode && (
        <div className="practice-here-box">
          <button className="back-btn" onClick={() => setPracticeHereMode(false)}>← Exit Practise Here</button>
          <h2 className="page-title">Practise Here — Topics</h2>
          {!practiceTopic && (
            <div>
              <button className="enter" onClick={() => setShowPracticeResources(!showPracticeResources)} style={{ marginBottom: 16, backgroundColor: '#1890ff', color: 'white' }}>
                {showPracticeResources ? '▼ Practice Resources' : '▶ Practice Resources'}
              </button>
              {showPracticeResources && (
                <div className="theory-topics-grid">
                  {Object.keys(qarQuestions).map((topic) => (
                    <div key={topic} className="theory-topic-card light" style={{ cursor: 'pointer' }} onClick={() => setPracticeTopic(topic)}>
                      <h3>{topic}</h3>
                      <p>{qarQuestions[topic].length} questions</p>
                      <button className="enter" onClick={(e) => { e.stopPropagation(); setPracticeTopic(topic); }}>Select →</button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {practiceTopic && (
            <div>
              <button className="back-btn" onClick={() => setPracticeTopic(null)}>← Back to Topics</button>
              <h3 className="page-title">Practice — {practiceTopic}</h3>
              <div className="practice-list">
                {topicPracticeList.map((p, i) => (
                  <MCQInlineItem key={i} index={i} item={p} answers={practiceAnswers} setAnswers={setPracticeAnswers} topicPracticeList={topicPracticeList} updateProgressOnAnswer={updateProgressOnAnswer} totalQuestions={topicPracticeList.length} />
                ))}
              </div>
              <div style={{ marginTop: 20, display: 'flex', gap: 10 }}>
                <button onClick={() => { const total = topicPracticeList.length; const correct = topicPracticeList.reduce((acc, it, idx) => { const ans = practiceAnswers[idx]; if (!ans) return acc; const sh = makeShuffledOptions(it.options || [], it.correctIndex); const selectedIdx = ans.charCodeAt(0) - 65; return acc + (selectedIdx === sh.correctIndex ? 1 : 0); }, 0); const percent = Math.round((correct / total) * 100); try { const storedUser = localStorage.getItem('education_path_current_user'); if (storedUser) { const u = JSON.parse(storedUser); progressTracker.updateSectionProgress(u.id, 'qar', percent); } } catch (e) {} alert(`Test finished — Score: ${correct}/${total} (${percent}%)`); }} style={{ padding: '10px 16px', backgroundColor: '#1890ff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Finish Test</button>
                <button onClick={() => { setPracticeAnswers({}); }} style={{ padding: '10px 16px', border: '1px solid #ccc', borderRadius: '4px', cursor: 'pointer' }}>Retake</button>
              </div>
            </div>
          )}
        </div>
      )}

      {!practiceHereMode && (
        <>
          {/* Theory Section */}
          <div className="theory-intro-box">
            <button className="enter" onClick={() => setShowTheoryContent(!showTheoryContent)} style={{ marginBottom: 16, backgroundColor: '#1890ff', color: 'white', width: '100%' }}>
              {showTheoryContent ? '▼ 📚 Learn QAR Concepts' : '▶ 📚 Learn QAR Concepts'}
            </button>
            {showTheoryContent && (
              <div className="theory-topics-grid">
                {qarTheory.map((theory, idx) => (
                  <div
                    key={idx}
                    className="theory-topic-card light"
                    onClick={() => setSelectedTheory(theory.topic)}
                  >
                    <h3>{theory.topic}</h3>
                    <p>{theory.subtopics.length} subtopics</p>
                    <button className="enter">Explore →</button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Practice Section */}
          <div className="practice-intro-box">
            <button className="enter" onClick={() => setShowPracticeResources(!showPracticeResources)} style={{ marginBottom: 16, backgroundColor: '#1890ff', color: 'white', width: '100%' }}>
              {showPracticeResources ? '▼ 🔗 Practice Resources' : '▶ 🔗 Practice Resources'}
            </button>
            {showPracticeResources && (
              <div className="topics-grid">
                {qarTopics.map((topic) => (
                  <TopicCard
                    key={topic.title}
                    title={topic.title}
                    links={{
                      theory: topic.theory,
                      practice: topic.practice,
                      youtube: topic.youtube,
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Practise Here Button */}
          <div className="practice-intro-box">
            <button className="enter" onClick={() => { setPracticeHereMode(true); setPracticeTopic(null); }} style={{ backgroundColor: '#52c41a', color: 'white', width: '100%' }}>
              🎯 Practise Here
            </button>
          </div>
        </>
      )}
    </div>
  );
}
function MCQInlineItem({ index, item, answers, setAnswers, updateProgressOnAnswer, totalQuestions }) {
  const selected = answers[index] || null;
  const revealed = !!selected;
  const shuffled = useMemo(() => makeShuffledOptions(item.options, item.correctIndex), [item.options, item.correctIndex]);

  const getIsCorrect = () => {
    if (!selected) return false;
    const selectedIdx = selected.charCodeAt(0) - 65; // A=0, B=1, C=2, D=3
    return selectedIdx === shuffled.correctIndex;
  };

  const onSelect = (optId) => {
    setAnswers(prev => {
      const updated = { ...prev, [index]: optId };
      // Update progress after state change
      if (updateProgressOnAnswer && totalQuestions) {
        setTimeout(() => updateProgressOnAnswer(updated, totalQuestions), 0);
      }
      return updated;
    });
  };

  return (
    <div style={{ padding: 10, borderBottom: '1px solid #eee', marginBottom: 10 }}>
      <div style={{ fontWeight: 600, marginBottom: 10, color: '#111827' }}>{index + 1}. {item.q}</div>
      <div style={{ marginTop: 8, display: 'grid', gap: 8 }}>
        {shuffled.options.map(opt => {
          const isSelected = opt.id === selected;
          const correct = getIsCorrect();
          const bgColor = revealed && isSelected ? (correct ? '#059669' : '#dc2626') : '#ffffff';
          const borderColor = revealed && isSelected ? (correct ? '#047857' : '#991b1b') : '#d1d5db';
          const textColor = revealed && isSelected ? '#ffffff' : '#111827';
          return (
            <button
              key={opt.id}
              className="option-btn"
              onClick={() => onSelect(opt.id)}
              disabled={revealed}
              style={{
                padding: '10px',
                border: `2px solid ${borderColor}`,
                borderRadius: '4px',
                backgroundColor: bgColor,
                color: textColor,
                cursor: revealed ? 'default' : 'pointer',
                opacity: 1,
                textAlign: 'left',
                fontWeight: isSelected ? 600 : 400
              }}
            >
              {opt.id}. {opt.text}
            </button>
          );
        })}
      </div>
      {revealed && (
        <div style={{ marginTop: 8, color: getIsCorrect() ? '#059669' : '#dc2626', fontWeight: 500 }}>
          {getIsCorrect() ? '✅ Correct' : '❌ Incorrect'}
          <div style={{ marginTop: 6, color: '#374151', fontWeight: 400 }}><strong>Explanation:</strong> {item.explanation}</div>
        </div>
      )}
    </div>
  );
}

function PracticeMCQ({ practiceList, index, setIndex }) {
  const [answers, setAnswers] = useState(() => practiceList.map(() => null));
  const [revealedIndex, setRevealedIndex] = useState(null);
  const item = practiceList[index] || {};
  const shuffled = useMemo(() => makeShuffledOptions(item.options || [], item.correctIndex), [item.options, item.correctIndex]);
  const selected = answers[index] || null;
  const revealed = revealedIndex === index;

  const getIsCorrect = (ansOptId, localShuffled) => {
    if (!ansOptId) return false;
    const selectedIdx = ansOptId.charCodeAt(0) - 65; // A=0, B=1, C=2, D=3
    return selectedIdx === (localShuffled?.correctIndex ?? -1);
  };

  const selectOption = (optId) => {
    setAnswers(prev => {
      const copy = [...prev];
      copy[index] = optId;
      return copy;
    });
    setRevealedIndex(index);
  };

  const goNext = (delta) => {
    setIndex(i => Math.max(0, Math.min(practiceList.length - 1, i + delta)));
    setRevealedIndex(null);
  };

  const finishTest = () => {
    // compute score
    const total = practiceList.length;
    const correct = practiceList.reduce((acc, it, idx) => {
      const ans = answers[idx];
      if (!ans) return acc;
      const sh = makeShuffledOptions(it.options || [], it.correctIndex);
      return acc + (getIsCorrect(ans, sh) ? 1 : 0);
    }, 0);
    const percent = Math.round((correct / total) * 100);
    // persist to progress tracker if user logged in
    try {
      const storedUser = localStorage.getItem('education_path_current_user');
      if (storedUser) {
        const u = JSON.parse(storedUser);
        // update overall qar progress with percent (clamped)
        progressTracker.updateSectionProgress(u.id, 'qar', percent);
      }
    } catch (e) {}
    alert(`Test finished — Score: ${correct}/${total} (${percent}%)`);
  };

  const restartTest = () => {
    setAnswers(practiceList.map(() => null));
    setRevealedIndex(null);
    setIndex(0);
  };

  return (
    <div className="practice-box">
      <h3>📝 Practice —</h3>
      <div className="practice-question">
        <div className="q-text" style={{ color: '#111827' }}>{item.q}</div>
        <div style={{ marginTop: 8, display: 'grid', gap: 8 }}>
          {shuffled.options.map(opt => {
            const isSelected = opt.id === selected;
            const correct = getIsCorrect(selected, shuffled);
            const bgColor = revealed && isSelected ? (correct ? '#059669' : '#dc2626') : '#ffffff';
            const borderColor = revealed && isSelected ? (correct ? '#047857' : '#991b1b') : '#d1d5db';
            const textColor = revealed && isSelected ? '#ffffff' : '#111827';
            return (
              <button
                key={opt.id}
                className="option-btn"
                onClick={() => selectOption(opt.id)}
                disabled={revealed}
                style={{
                  padding: '12px',
                  border: `2px solid ${borderColor}`,
                  borderRadius: '4px',
                  backgroundColor: bgColor,
                  color: textColor,
                  cursor: revealed ? 'default' : 'pointer',
                  opacity: 1,
                  textAlign: 'left',
                  fontWeight: isSelected ? 600 : 400
                }}
              >
                {opt.id}. {opt.text}
              </button>
            );
          })}
        </div>
      </div>
      {revealed && (
        <div style={{ marginTop: 8 }}>
          <div style={{ color: getIsCorrect(selected, shuffled) ? '#059669' : '#dc2626', fontWeight: 'bold' }}>
            {getIsCorrect(selected, shuffled) ? '✅ Correct' : '❌ Wrong'}
          </div>
          <div style={{ marginTop: 6, color: '#374151' }}>
            <strong>Explanation:</strong> {item.explanation}
          </div>
        </div>
      )}
      <div style={{ marginTop: 10 }}>
        <button onClick={() => goNext(-1)}>Prev</button>
        <button onClick={() => goNext(1)} style={{ marginLeft: 8 }}>Next</button>
        <button onClick={() => { setIndex(Math.floor(Math.random() * practiceList.length)); setRevealedIndex(null); }} style={{ marginLeft: 8 }}>Random</button>
        <button onClick={finishTest} style={{ marginLeft: 8, backgroundColor: '#1890ff', color: 'white' }}>Finish Test</button>
        <button onClick={restartTest} style={{ marginLeft: 8 }}>Restart Test</button>
      </div>
      <div style={{ marginTop: 8, color: '#6b7280' }}>{index + 1} / {practiceList.length}</div>
    </div>
  );
}
