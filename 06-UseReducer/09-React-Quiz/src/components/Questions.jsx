import Options from "./Options";

const Questions = ({ questions, dispatch, answer, points }) => {
  return (
    <div>
      <h4>{questions.question}</h4>
      <Options
        questions={questions}
        dispatch={dispatch}
        answer={answer}
        points={points}
      />
    </div>
  );
};

export default Questions;
