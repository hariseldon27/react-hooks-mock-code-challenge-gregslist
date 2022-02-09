import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listToShow, setListToShow] = useState([])
  const [searchTerm, setSearchTerm] = useState("")


  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then((r) => r.json())
    .then((data) => setListToShow(data))
  }, [])

  function onSearchChange(searchInput) {
    setSearchTerm(() => searchInput)
  }
  useEffect(() => {
    console.log(searchTerm)
  },[searchTerm])

  const searchedListings = listToShow.filter((listing) => {
    return Object.values(listing).join('').toLowerCase().includes(searchTerm.toLowerCase())
  })

  function handleDeleteItem(idOfDataItemDelete) {
    const updatedItems = listToShow.filter(item => item.id !== idOfDataItemDelete);
    setListToShow(updatedItems)
}

  return (
    <div className="app">
      <Header onSearchChange={onSearchChange} searchTerm={searchTerm}/>
      <ListingsContainer handleDeleteItem={handleDeleteItem} listings={searchedListings}/>
    </div>
  );
}

export default App;
