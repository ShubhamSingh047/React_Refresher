import PropTypes from "prop-types";
import { useState } from "react";

export function Form({ onAddItems }) {
  const [description, setDesription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const submitHandler = (e) => {
    e.preventDefault();
    const newItem = { id: Date.now(), description, quantity, packed: false };
    onAddItems(newItem);
    setDesription("");
    setQuantity(1);
  };

  return (
    <form className="add-form">
      <h3>What do you need for your trip? 🧰 </h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="items.."
        value={description}
        onChange={(e) => setDesription(e.target.value)}
      />
      <button onClick={submitHandler}>Add</button>
    </form>
  );
}
Form.propTypes = {
  onAddItems: PropTypes.func.isRequired,
};
