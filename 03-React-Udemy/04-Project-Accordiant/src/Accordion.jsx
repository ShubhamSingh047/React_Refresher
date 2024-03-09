import { useState } from "react";
import PropTypes from "prop-types";

export const Accordion = ({ title, text, num }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`item ${isOpen}?"open:""`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <p className="number">{num < 9 ? "0" + num + 1 : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
};

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  num: PropTypes.number.isRequired,
};
