import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer( { listings, handleDeleteItem, onUpdatedFave } ) {
  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => (
          <ListingCard onUpdatedFave={onUpdatedFave} handleDeleteItem={handleDeleteItem} key={listing.id} listing={listing} />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
