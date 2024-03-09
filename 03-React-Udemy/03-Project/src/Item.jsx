import PropTypes from "prop-types";

export function Item({ item, onDelete, onChecked }) {
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
