import React from "react";

const QuizStart = ({ Length, dispatch }) => {
  return (
    <div className="start">
      <h2>Welcome to the React Quiz!</h2>
      <h3> {Length} Questions to test Reeact Mastery !</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "active" })}
      >
        let's Start
      </button>
    </div>
  );
};

export default QuizStart;
