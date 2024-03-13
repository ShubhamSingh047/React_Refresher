const Scroll = ({ value, setValue }) => {
  return (
    <>
      <input
        type="range"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        min="1"
        max="10"
      />
      <p>current value of volume is {value}</p>
    </>
  );
};

export default Scroll;
