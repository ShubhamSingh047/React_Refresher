import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import Ref from "./ref";

function App() {
  const [all, setAll] = useState([]);
  const [value, setValue] = useState("");

  //not a standard way to set focus;

  return (
    <>
      <Ref all={all} setAll={setAll} setValue={setValue} value={value} />
      {/* <form>
        <input
          className="input"
          value={value}
          type="text"
          onChange={(e) => setValue(e.target.value)}
        />
        <span>{value}</span>
      </form> */}
    </>
  );
}

export default App;
