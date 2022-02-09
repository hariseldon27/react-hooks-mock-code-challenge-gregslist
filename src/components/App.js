import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listToShow, setListToShow] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then((r) => r.json())
    .then((data) => setListToShow(data))
  }, [])
  return (
    <div className="app">
      <Header />
      <ListingsContainer listings={listToShow}/>
    </div>
  );
}

export default App;
