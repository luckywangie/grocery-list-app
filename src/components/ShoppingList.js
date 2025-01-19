import React, { useState } from "react";
import Item from "./Item";

const items = [
  { id: 1, name: "Apples", category: "Produce" },
  { id: 2, name: "Chicken", category: "Meat" },
  { id: 3, name: "Milk", category: "Dairy" },
];

function ShoppingList() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <div>
      <select onChange={handleCategoryChange} value={selectedCategory}>
        <option value="All">All</option>
        <option value="Produce">Produce</option>
        <option value="Meat">Meat</option>
        <option value="Dairy">Dairy</option>
      </select>
      <ul>
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
