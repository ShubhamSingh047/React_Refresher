import React, { useState } from "react";
import { useReducer } from "react";

const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + state.step };
    case "dec":
      return { ...state, count: state.count - state.step };
    case "setCount":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload };
    case "reset":
      return action.payload;
    default:
      throw new Error("Unknown action !");
  }
};

const DateCounterRed = () => {
  const intialState = { count: 0, step: 1 };

  const [state, dispatch] = useReducer(reducer, intialState);
  const { count, step } = state;
  const date = new Date();
  date.setDate(date.getDate() + count);

  const handleCountChange = (e) => {
    dispatch({ type: "setCount", payload: +e.target.value });
    // setDate(+e.target.value);
  };

  const handleStepChange = (e) =>
    dispatch({
      type: "setStep",
      payload: Number(e.target.value),
    });

  const inc = () => {
    dispatch({ type: "inc", payload: 1 });
  };

  const dec = () => {
    dispatch({ type: "dec", payload: -1 });
  };

  const handleReset = () => {
    dispatch({ type: "reset", payload: intialState });
  };

  return (
    <div>
      <div>
        <input type="range" value={step} onChange={handleStepChange} max={10} />
        <p>{step}</p>
        <button onClick={dec}>dec -</button>
        <input value={count} onChange={handleCountChange} />
        <button onClick={inc}>inc +</button>
      </div>

      <p>{date.toDateString()}</p>
      <div>
        <button onClick={handleReset}>reset</button>
      </div>
    </div>
  );
};

export default DateCounterRed;
