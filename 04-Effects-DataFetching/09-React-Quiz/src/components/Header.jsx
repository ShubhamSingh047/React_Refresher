import React from "react";
import logo from "../assets/react.svg";

const Header = () => {
  return (
    <div className="app-header">
      <img src={logo} alt="React logo" />
      <h1>The React Quiz</h1>
    </div>
  );
};

export default Header;
