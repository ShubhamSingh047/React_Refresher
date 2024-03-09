import { useState } from "react";
import Logo from "./Logo";
import { Form } from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";

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

export default App;
