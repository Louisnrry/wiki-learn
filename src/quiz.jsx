import React, { useState } from 'react';
import { questions } from './question';
import '../quizz.css'; // Ton fichier CSS actuel

const QuizRomain = ({ onBack }) => {
  // On stocke les réponses de l'utilisateur dans un objet { q1: 'auguste', q2: 'louve' }
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const handleChange = (questionId, value) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let tempScore = 0;
    
    questions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) {
        tempScore++;
      }
    });
    
    setScore(tempScore);
    window.scrollTo(0, 0); // Remonte en haut pour voir le score
  };

  const handleRestart = () => {
    setAnswers({});
    setScore(null);
  };

  return (
    <div className="quiz-wrapper">
      <div className="flex gap-4 mb-4">
        {onBack && (
          <button onClick={onBack} className="px-4 py-2 text-[#fdf5e6] bg-[#3e2723] font-serif font-bold border border-[#5d4037] rounded hover:bg-[#5d4037] transition-colors">
            ← Retour au menu
          </button>
        )}
        {score !== null && (
          <button onClick={handleRestart} className="px-4 py-2 text-[#fdf5e6] bg-[#3e2723] font-serif font-bold border border-[#5d4037] rounded hover:bg-[#5d4037] transition-colors">
            ↻ Recommencer
          </button>
        )}
      </div>

      <form id="quiz-romain" onSubmit={handleSubmit}>
        {score === null && <h1>Selectionnez la bonne réponse, Citoyen !</h1>}

        {score !== null && (
          <div className="result-banner">
            <h2>Ton score : {score} / {questions.length}</h2>
            <p>{score > 15 ? "Par Jupiter ! Tu es un vrai Romain !" : "Retourne étudier à l'Atrium !"}</p>
          </div>
        )}

        {questions.map((q, index) => (
          <fieldset key={q.id}>
            <legend>Question {index + 1} : {q.question}</legend>
            {q.options.map((opt) => (
              <div key={opt.value}>
                <label>
                  <input
                    type="radio"
                    name={`q${q.id}`}
                    value={opt.value}
                    checked={answers[q.id] === opt.value}
                    onChange={() => handleChange(q.id, opt.value)}
                    disabled={score !== null}
                  />
                  {opt.label}
                </label>
                <br />
              </div>
            ))}
          </fieldset>
        ))}

        <div className="container-validation">
          {score === null && (
            <button type="submit">Valider</button>
          )}
        </div>
      </form>
    </div>
  );
};

export default QuizRomain;

