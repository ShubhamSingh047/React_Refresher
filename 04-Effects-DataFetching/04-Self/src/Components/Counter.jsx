const Counter = ({ count, setCount }) => {
  return (
    <div className="card">
      <button
        onClick={() => count < 10 && setCount((count) => Number(count) + 1)}
      >
        Clicked {count} times
      </button>
    </div>
  );
};

export default Counter;
