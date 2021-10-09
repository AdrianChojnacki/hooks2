import React from "react";
import Item from "./Item";

export default function App() {
  const [items] = React.useState({
    items1: "ogórki",
    items2: "sok",
    items3: "coś do picia",
  });

  return (
    <>
      <h1>Lista zakupów</h1>
      <ul>
        <Item name={items.items1} example={2} />
        <Item name={items.items2} example={1} />
        <Item name={items.items3} example={3} />
      </ul>
    </>
  );
}
