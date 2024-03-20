import React from "react";

const FinishScreen = ({ points, maxPossiblePoints }) => {
  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <>
      <p className="result">
        You Score <strong>{points}</strong> out of
        {maxPossiblePoints} ({Math.ceil(percentage)}﹪)
      </p>
    </>
  );
};

export default FinishScreen;
