import React, { useState } from "react";

function MoreButton({ onMoreSushi }) {
  return <button onClick={onMoreSushi}>More sushi!</button>;
}

export default MoreButton;
