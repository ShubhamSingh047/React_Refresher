import PropTypes from "prop-types";
import { useState } from "react";

function App() {
  const [item, setItems] = useState([]);

  const handleItems = (item) => {
    setItems((oldItems) => [...oldItems, item]);
  };

  const handleDeletItem = (key) => {
    setItems((items) => items.filter((item) => item.id != key));
  };

  const handleChecked = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id == id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleCleared = () => {
    const confirm = window.confirm(
      `are your sure you want to delet all items ?!`
    );
    if (confirm) setItems([]);
  };

  return (
    <>
      <Logo />
      <Form onAddItems={handleItems} />
      <PackingList
        items={item}
        onDelete={handleDeletItem}
        onChecked={handleChecked}
        onCleared={handleCleared}
      />
      <Stats items={item} />
    </>
  );
}

function Logo() {
  return <h1>🌴 Far Away 🌊 </h1>;
}

function Form({ onAddItems }) {
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

function PackingList({ items, onDelete, onChecked, onCleared }) {
  const [sorted, setSorted] = useState("input");

  let sortedItem;

  if (sorted === "input") sortedItem = items;
  if (sorted === "description") {
    sortedItem = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sorted === "packed") {
    sortedItem = items.sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  const handleSort = (e) => {
    setSorted(e);
  };

  return (
    <div className="list">
      <ul>
        {sortedItem.map((item) => (
          <Item
            onDelete={onDelete}
            item={item}
            key={item.id}
            onChecked={onChecked}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sorted} onChange={(e) => handleSort(e.target.value)}>
          <option value="input">sort by input</option>
          <option value="description">sort by description</option>
          <option value="packed">sort by packed</option>
        </select>
        <button onClick={onCleared}>clear</button>
      </div>
    </div>
  );
}

PackingList.propTypes = {
  items: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onChecked: PropTypes.func.isRequired,
  onCleared: PropTypes.func.isRequired,
};

function Item({ item, onDelete, onChecked }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onChecked(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>

      <button onClick={() => onDelete(item.id)}>❌</button>
    </li>
  );
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onChecked: PropTypes.func.isRequired,
};

function Stats({ items }) {
  const totalItem = items.length;
  const packedItem = items.filter((item) => item.packed).length;
  const percentage = Math.round(packedItem / totalItem) * 100 || 0;
  console.log(percentage);

  return (
    <footer className="stats">
      <em>
        {`You have ${totalItem} items on your list and you have already packed 
        ${packedItem} (${percentage}%)`}
      </em>
    </footer>
  );
}

Stats.propTypes = {
  items: PropTypes.array.isRequired,
};

export default App;
