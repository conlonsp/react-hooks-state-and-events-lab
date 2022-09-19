import React, {useState} from "react";

function Item({ name, category }) {
  let [inCart, setCart] = useState(false)

  function handleClick() {
    return setCart(inCart = !inCart)
  }

  const itemClass = inCart ? "in-cart" : "";
  const buttonName = inCart ? "Remove From Cart" : "Add to Cart"
  const buttonClass = inCart ? 'remove' : 'add'

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className={buttonClass}>{buttonName}</button>
    </li>
  );
}

export default Item;
