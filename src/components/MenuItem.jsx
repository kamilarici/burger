import React from "react";

const MenuItem = ({ image, name, content, price }) => {
  return (
    <div className="menu-item">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1>{name}</h1>
      <h6>{content}</h6>
      <p>{price}</p>
    </div>
  );
};

export default MenuItem;
