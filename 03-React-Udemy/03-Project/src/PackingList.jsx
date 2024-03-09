import PropTypes from "prop-types";
import { useState } from "react";
import { Item } from "./Item";

export function PackingList({ items, onDelete, onChecked, onCleared }) {
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
