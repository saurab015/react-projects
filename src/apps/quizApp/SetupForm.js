import React from "react";
import { useGlobalContext } from "./context";

const SetupForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext();

  return (
    <main>
      <section className="quiz quiz-small">
        <form className="setup-form-quiz">
          {/* {amount} */}
          <div className="form-control-quiz">
            <label htmlFor="amount">number of questions</label>
            <input
              name="amount"
              id="amount"
              type="number"
              value={quiz.amount}
              className="form-input-quiz"
              min={1}
              max={50}
              onChange={handleChange}
            />
          </div>
          {/* category */}
          <div className="form-control-quiz">
            <label htmlFor="category">category</label>
            <select
              className="form-input-quiz"
              name="category"
              id="category"
              value={quiz.category}
              onChange={handleChange}
            >
              <option value="sports">sports</option>
              <option value="history">history</option>
              <option value="entertainment">entertainment</option>
            </select>
          </div>

          {/* difficult */}
          <div className="form-control">
            <label htmlFor="difficulty">select difficulty</label>
            <select
              className="form-input-quiz"
              name="difficulty"
              id="difficulty"
              value={quiz.difficulty}
              onChange={handleChange}
            >
              <option value="easy">easy</option>
              <option value="medium">medium</option>
              <option value="hard">hard</option>
            </select>
          </div>
          {error && (
            <p className="error-quiz">
              can't generate questions, please try different options
            </p>
          )}
          <button
            type="submit"
            onClick={handleSubmit}
            className="submit-btn-quiz"
          >
            start
          </button>
        </form>
      </section>
    </main>
  );
};

export default SetupForm;
