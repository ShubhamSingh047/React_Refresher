import React, { useState } from "react";

const DateCounter = () => {
  const date = new Date();
  console.log(date, "date");
  const [count, setCount] = useState(1);
  //   const [date, setDate] = useState(0);
  return (
    <>
      <div>
        <input
          type="range"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          max={10}
        />
        <p>{count}</p>
        {/* <input /> */}
      </div>
      <div>DateCounter</div>
    </>
  );
};

export default DateCounter;
