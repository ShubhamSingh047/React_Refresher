const Options = ({ questions, dispatch, answer }) => {
  return (
    <div className="options">
      {questions &&
        questions.options.map((data, index) => (
          <button
            className={`btn btn-option ${index === answer && "answer"} ${
              answer !== null
                ? index === questions.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }
            `}
            key={data}
            onClick={() => dispatch({ type: "newAnswer", payLoad: index })}
            disabled={answer}
          >
            {data}
          </button>
        ))}
    </div>
  );
};

export default Options;
