import React, { useState, useEffect } from "react";

function ListingCard( { listing, handleDeleteItem, onUpdatedFave } ) {
  const { id, description, image, location } = listing
  const [isFave, setIsFave] = useState(false)
  
  
  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: "DELETE",
    })
    .then((r) => r.json())
    .then(() => handleDeleteItem(listing.id));
    //change the last line to fire our callback with the item id
  }
  
  
  function handleFavoriteClick(e) {
    e.stopPropagation();
    setIsFave(() => !isFave)
  }

  useEffect(() => {
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isFave: !isFave,
      }),
    })
    .then((r) => r.json())
    .then((updatedFaveItem) => onUpdatedFave(updatedFaveItem))
  }, [isFave])

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFave ? (
          <button className="emoji-button favorite active" onClick={handleFavoriteClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavoriteClick}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;