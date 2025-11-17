import React from "react";

function ShopCard({ item }) {
  return (
    <div id="gridBox_div">
      <img src={item.imageUrl} id="covers__img" alt={item.title} />
      
      <div className="itemText">
        <p><b>{item.title}</b></p>
        <p>{item.prodDesc}</p>
        <p><b>{item.genre}</b></p>
        <p><b>${item.price}</b></p>
      </div>
    </div>
  );
}

export default ShopCard;
