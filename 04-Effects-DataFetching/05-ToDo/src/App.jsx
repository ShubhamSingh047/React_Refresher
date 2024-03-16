import { useState } from "react";
import "./App.css";

function App() {
  const [List, setList] = useState([]);
  const [value, setValue] = useState("");
  const [sortBy, setSorted] = useState("ByEntry");

  const handleValue = () => {
    value && setList([...List, value]);
    setValue("");
  };

  const handleDelt = (id) => {
    setList(List.filter((data) => data != id));
  };

  const handleEdit = (id) => {
    setValue(id);
    List.map((data) => {
      if (data == id) handleDelt(data);
      return value;
    });
  };

  const handleSelect = (e) => {
    setSorted(e.target.value);
  };

  let sorted;

  if (sortBy == "ByEntry") sorted = List;
  if (sortBy == "Aplhabet") {
    sorted = List.slice().sort();
  }

  return (
    <>
      <div>
        <h1>My To Do</h1>
        <input
          className="input"
          value={value}
          placeholder="List"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button onClick={handleValue}>Add</button>
        <ul>
          {sorted &&
            sorted.map((data, i) => (
              <li key={i}>
                <span onClick={() => handleEdit(data)}>✏️ </span>
                {data}
                <span onClick={() => handleDelt(data)}> ❌</span>
              </li>
            ))}
        </ul>

        <select value={sortBy} onChange={(e) => handleSelect(e)}>
          <option value="ByEntry">by entry</option>
          <option value="Aplhabet">alphabet</option>
        </select>

        <div>
          <button onClick={() => setList([])}>clear All</button>
        </div>
      </div>
    </>
  );
}

export default App;
