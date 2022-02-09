import React from "react";
import Search from "./Search";

function Header( { onSearchChange, searchTerm } ) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearchChange={onSearchChange} searchTerm={searchTerm}/>
    </header>
  );
}

export default Header;
