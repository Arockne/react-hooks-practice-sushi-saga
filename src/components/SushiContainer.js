import React, { useState, useEffect } from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi'

function SushiContainer({ sushi, onPlates }) {
  const [fourSushi, setFourSushi] = useState([...sushi])

  useEffect(() => {
    setFourSushi(sushi.slice(0,4))
  }, [sushi])

  function handleMoreSushi(fourMore) {
    setFourSushi(sushi.slice(fourMore, fourMore + 4))
  }

  return (
    <div className="belt">
      {fourSushi.map(sushi => <Sushi key={sushi.id} sushi={sushi} onPlates={onPlates}/>)}
      <MoreButton onMoreSushi={handleMoreSushi}/>
    </div>
  );
}

export default SushiContainer;
