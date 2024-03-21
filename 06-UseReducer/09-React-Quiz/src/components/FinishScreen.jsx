import React from "react";

const FinishScreen = ({ points, maxPossiblePoints, highScore, dispatch }) => {
  const percentage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (percentage === 100) {
    emoji = "🎖️";
  } else if (percentage < 100 && percentage >= 80) {
    emoji = "🎉";
  } else if (percentage < 80 && percentage >= 50) {
    emoji = "✅";
  } else {
    emoji = "🤦";
  }

  return (
    <>
      <p className="result">
        <strong>{emoji}</strong>You Score <strong>{points}</strong> out of
        {maxPossiblePoints} ({Math.ceil(percentage)}﹪)
      </p>
      <p className="highscore">{`highScore: ${highScore} points`}</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
};

export default FinishScreen;
