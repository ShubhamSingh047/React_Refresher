import { useState } from "react";
import "./App.css";

const message = [
  "learn Ract ✬",
  "Apply for jobs 🧰",
  "Invest your new income 💸",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handleStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrevius = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <>
      <div>
        <button className="close" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "❌" : "✅"}
        </button>
        {isOpen && (
          <div>
            <div className="steps">
              <div className="numbers">
                <div className={`${step >= 1 ? "active" : ""}`}>1</div>
                <div className={`${step >= 2 ? "active" : ""}`}>2</div>
                <div className={`${step >= 3 ? "active" : ""}`}>3</div>
              </div>

              <p className="message">{`Step ${step}:${message[step - 1]}`}</p>
              <p className="message"></p>
              <div className="buttons">
                <button
                  style={{ backgroundColor: "#7950f2", color: "#fff" }}
                  onClick={handlePrevius}
                >
                  Previous
                </button>
                <button
                  style={{ backgroundColor: "#7950f2", color: "#fff" }}
                  onClick={handleStep}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
