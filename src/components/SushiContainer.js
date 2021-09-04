import React, { useState, useEffect } from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi'

function SushiContainer({ sushi, onPlates }) {
  const [fourSushi, setFourSushi] = useState([...sushi])
  const [fourMore, setFourMore] = useState(4)

  useEffect(() => {
    setFourSushi(sushi.slice(0,4))
  }, [sushi])

  function handleMoreSushi() {
    if ((fourMore + 4) < sushi.length) {
      setFourMore(fourMore => fourMore + 4)
    } else {
      setFourMore(0)
    }
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
