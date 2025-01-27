import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import { v4 as uuid} from "uuid"

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchText, setSearchText]= useState("")

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  function handleSearchChange(event) {
    setSearchText(event.target.value);
  }

  function handleItemFormSubmit(newItem) {
    setItems((prevItems) => [... prevItems,newItem])
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <Filter onSearchChange={handleSearchChange} />
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <ShoppingList items={items.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()))} />
      
    </div>
  );
}

export default App;
