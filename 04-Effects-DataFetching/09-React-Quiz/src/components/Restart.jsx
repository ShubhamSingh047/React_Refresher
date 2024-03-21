const Restart = ({ dispatch }) => {
  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "restart" })}
    >
      Restart
    </button>
  );
};

export default Restart;
