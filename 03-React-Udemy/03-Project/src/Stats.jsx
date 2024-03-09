import PropTypes from "prop-types";

export function Stats({ items }) {
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
