import React from "react";
import { useGlobalContext } from "./context";

import SetupForm from "./SetupForm";
import Loading from "./Loading";
import Modal from "./Modal";
function App() {
  const {
    waiting,
    loading,
    questions,
    index,
    correct,
    nextQuestion,
    checkAnswer,
  } = useGlobalContext();

  if (waiting) {
    return <SetupForm />;
  }

  if (loading) {
    return <Loading />;
  }
  const { question, incorrect_answers, correct_answer } = questions[index];

  // const answers = [...incorrect_answers, correct_answer];
  let answers = [...incorrect_answers];
  const tempIndex = Math.floor(Math.random() * 4);
  if (tempIndex === 3) {
    answers.push(correct_answer);
  } else {
    answers.push(answers[tempIndex]);
    answers[tempIndex] = correct_answer;
  }
  return (
    <main className="main-quiz">
      <Modal />
      <section className="quiz">
        <p className="correct-answers-quiz">
          correct answers: {correct}/{index}
        </p>
        <article className="container-quiz">
          <h2 dangerouslySetInnerHTML={{ __html: question }} />

          <div className="btn-container-quiz">
            {answers.map((answer, index) => {
              return (
                <button
                  key={index}
                  onClick={() => checkAnswer(correct_answer === answer)}
                  className="answer-btn-quiz"
                  dangerouslySetInnerHTML={{ __html: answer }}
                />
              );
            })}
          </div>
        </article>
        <button onClick={nextQuestion} className="next-question-quiz">
          next question
        </button>
      </section>
    </main>
  );
}

export default App;
