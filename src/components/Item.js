import React, { useState } from "react";

function Item({ name }) {
  const [isInCart, setIsInCart] = useState(false);

  function handleAddToCart() {
    setIsInCart((prevInCart) => !prevInCart);
  }

  return (
    <li className={isInCart ? "in-cart" : ""}>
      {name}
      <button onClick={handleAddToCart}>
        {isInCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
