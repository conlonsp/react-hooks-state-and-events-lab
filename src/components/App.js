import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  let [isDark, setDark] = useState(false)
  
  function handleClick() {
    return setDark(isDark = !isDark)
  }

  let buttonName = isDark ? "Dark Mode" : "Light Mode"

  const appClass = isDark ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{buttonName}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
