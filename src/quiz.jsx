import React, { useState } from 'react';
import { questions } from './question';
import '../quizz.css'; // Ton fichier CSS actuel

const QuizRomain = () => {
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

  return (
    <div className="quiz-wrapper">
      <form id="quiz-romain" onSubmit={handleSubmit}>
        <h1>Selectionnez la bonne réponse, Citoyen !</h1>

        {score !== null && (
          <div className="result-banner">
            <h2>Ton score : {score} / {questions.length}</h2>
            <p>{score > 15 ? "Par Jupiter ! Tu es un vrai Romain !" : "Retourne étudier à l'Atrium !"}</p>
          </div>
        )}

        {questions.map((q) => (
          <fieldset key={q.id}>
            <legend>{q.question}</legend>
            {q.options.map((opt) => (
              <div key={opt.value}>
                <label>
                  <input
                    type="radio"
                    name={`q${q.id}`}
                    value={opt.value}
                    checked={answers[q.id] === opt.value}
                    onChange={() => handleChange(q.id, opt.value)}
                  />
                  {opt.label}
                </label>
                <br />
              </div>
            ))}
          </fieldset>
        ))}

        <div className="container-validation">
          <button type="submit">Envoyer</button>
        </div>
      </form>
    </div>
  );
};

export default QuizRomain;

