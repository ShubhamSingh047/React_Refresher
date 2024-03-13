import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Logo from "./Components/Logo";
import Counter from "./Components/Counter";
import Scroll from "./Components/Scroll";
import Reset from "./Components/Reset";
import Self1 from "./Components/Self1";

function App() {
  const [value, setValue] = useState(1);
  return (
    <>
    <Self1 value={value} setValue={setValue} />
      
    </>
  );
}

export default App;
