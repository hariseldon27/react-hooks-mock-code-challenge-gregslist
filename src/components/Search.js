import React from "react";

function Search( { onSearchChange, searchTerm } ) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  function handleSearchChange(e) {
    onSearchChange(e.target.value)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
