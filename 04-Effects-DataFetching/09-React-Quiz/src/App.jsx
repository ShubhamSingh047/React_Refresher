import { useState, useReducer, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Loader from "./components/Loader";
import Error from "./components/Error";
import QuizStart from "./components/QuizStart";
import Questions from "./components/Questions";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import FinishScreen from "./components/FinishScreen";
import Footer from "./components/Footer";
import Timer from "./components/Timer";

const secPerQus = 30;
const intialState = {
  question: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  timeRemaining: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "dataRecived":
      return { ...state, question: action.payLoad, status: "ready" };
    case "active":
      return {
        ...state,
        status: "active",
        timeRemaining: state.question.length * secPerQus,
      };
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
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    case "finish":
      return {
        ...state,
        status: "finished",
        highScore:
          state.points > state.highScore ? state.points : state.highScore,
      };
    case "restart":
      return {
        ...intialState,
        status: "ready",
        question: state.question,
      };
    case "timer":
      return {
        ...state,
        timeRemaining:
          state.timeRemaining > 0
            ? state.timeRemaining - 1
            : state.timeRemaining,
        status: state.timeRemaining === 0 ? "finished" : state.status,
      };
    default:
      throw new Error("Action unknown");
  }
};

function App() {
  const [
    { question, status, index, answer, points, highScore, timeRemaining },
    dispatch,
  ] = useReducer(reducer, intialState);

  const maxPoints = question.reduce((prev, curr) => prev + curr.points, 0);

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
          <>
            <Progress
              index={index}
              numQuestions={question.length}
              points={points}
              answer={answer}
              maxPossiblePoints={maxPoints}
            />
            <Questions
              questions={question[index]}
              dispatch={dispatch}
              answer={answer}
              points={points}
            />
            <NextButton
              dispatch={dispatch}
              answer={answer}
              numQuestions={question.length}
              index={index}
            />
            <Footer>
              <Timer dispatch={dispatch} timeRemaining={timeRemaining} />
            </Footer>
          </>
        )}
        {status === "finished" && (
          <FinishScreen
            maxPossiblePoints={maxPoints}
            points={points}
            highScore={highScore}
            dispatch={dispatch}
          />
        )}
      </Body>
    </div>
  );
}

export default App;
