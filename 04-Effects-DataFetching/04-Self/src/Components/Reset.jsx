import React from "react";

const Reset = ({ setCounts }) => {
  return <button onClick={() => setCounts(1)}>Reset</button>;
};

export default Reset;
