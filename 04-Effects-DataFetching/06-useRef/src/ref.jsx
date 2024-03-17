import React, { useRef, useEffect } from "react";

const Ref = ({ value, setValue, all, setAll }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    const pressHandler = (e) => {
      if (e.code === "Enter") {
        e.preventDefault();
        inputRef.current.focus();
        setValue("");
        value && setAll([...all, value]);
      }
    };

    document.addEventListener("keydown", pressHandler);

    return () => {
      document.removeEventListener("keydown", pressHandler);
    };
  }, [value, setValue, all, setAll]);



  return (
    <form>
      <input
        className="input"
        value={value}
        type="text"
        ref={inputRef}
        onChange={(e) => setValue(e.target.value)}
      />
      <span>{value}</span>
    </form>
  );
};

export default Ref;
