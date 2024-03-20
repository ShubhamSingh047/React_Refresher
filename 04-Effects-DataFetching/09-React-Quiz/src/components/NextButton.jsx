import React from "react";

const NextButton = ({ dispatch, answer }) => {
  return (
    answer && (
      <div>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "nextQuestion" })}
        >
          Next
        </button>
      </div>
    )
  );
};

export default NextButton;
