import React, { useState } from "react";

function MoreButton({ onMoreSushi }) {
  const [fourMore, setFourMore] = useState(4)

  function handleAdditionalSushi() {
    setFourMore(fourMore => fourMore + 4);
    onMoreSushi(fourMore);
  }

  return <button onClick={handleAdditionalSushi}>More sushi!</button>;
}

export default MoreButton;
