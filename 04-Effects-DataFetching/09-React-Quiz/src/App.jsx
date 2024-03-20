import { useState, useReducer, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Loader from "./components/Loader";
import Error from "./components/Error";
import QuizStart from "./components/QuizStart";
import Questions from "./components/Questions";

const reducer = (state, action) => {
  switch (action.type) {
    case "dataRecived":
      return { ...state, question: action.payLoad, status: "ready" };
    case "active":
      return { ...state, status: "active" };
    case "error":
      return { ...state, status: "error" };
    case "newAnswer":
      const question = state.question.at(state.index);
      return {
        ...state,
        answer: action.payLoad,
        points:
          action.payLoad === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    default:
      throw new Error("Action unknown");
  }
};

const intialState = {
  question: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
};

function App() {
  const [{ question, status, index, answer, points }, dispatch] = useReducer(
    reducer,
    intialState
  );
  useEffect(() => {
    const api = async () => {
      try {
        const test = await fetch(`http://localhost:8000/questions`);
        if (!test) {
          throw new Error("Somthing wrong with api");
        } else {
          const data = await test.json();
          dispatch({ type: "dataRecived", payLoad: data });
        }
      } catch (error) {
        dispatch({ type: "error" });
      }
    };
    api();
    return () => {
      console.log("clean up");
    };
  }, []);

  return (
    <div className="app">
      <Header />
      <Body>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <QuizStart Length={question.length} dispatch={dispatch} />
        )}
        {status === "active" && (
          <Questions
            questions={question[index]}
            dispatch={dispatch}
            answer={answer}
            points={points}
          />
        )}
      </Body>
    </div>
  );
}

export default App;
