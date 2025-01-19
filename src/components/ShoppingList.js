import React, { useState } from "react";
import Filter from "./Filter";
import Item from "./Item";

const items = [
  { id: 1, name: "Yogurt", category: "Dairy" },
  { id: 2, name: "Pomegranate", category: "Produce" },
  { id: 3, name: "Juice", category: "Produce" },
  { id: 4, name: "String Cheese", category: "Dairy" },
  { id: 5, name: "Cookies", category: "Dessert" },
];

function ShoppingList() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cartItems, setCartItems] = useState([]);

  function handleFilterChange(category) {
    setSelectedCategory(category);
  }

  function toggleCartItem(itemName) {
    setCartItems((prevCartItems) =>
      prevCartItems.includes(itemName)
        ? prevCartItems.filter((item) => item !== itemName)
        : [...prevCartItems, itemName]
    );
  }

  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <div>
      <Filter selectedCategory={selectedCategory} onCategoryChange={handleFilterChange} />
      <ul>
        {filteredItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            category={item.category}
            isInCart={cartItems.includes(item.name)}
            onToggleCart={() => toggleCartItem(item.name)}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
