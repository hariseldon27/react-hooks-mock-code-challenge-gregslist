import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer( { listings, handleDeleteItem } ) {
  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => (
          <ListingCard handleDeleteItem={handleDeleteItem} key={listing.id} listing={listing} />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
