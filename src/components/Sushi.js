import React, { useState } from "react";

function Sushi({ sushi, onPlates }) {
  const [eaten, setEaten] = useState(false)
  
  function handleClickEaten() {
    onPlates(sushi, setEaten)
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleClickEaten}>
        {eaten ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
