import { useState } from "react";
import "./App.css";
// import DateCounter from "./starter/DateCounter";
import DateCounter from "./DateCounter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <DateCounter /> */}
      <DateCounter />
    </>
  );
}

export default App;
