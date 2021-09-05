import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import MoneyForm from './MoneyForm'

/*
1. The sushi list is properly received from the server and displayed in our app. *

2. Only 4 sushi are rendered at a time.

3. Clicking the "More Sushi!" button shows the next set of 4 sushi in the list. For this assignment, you don't have to be concerned about what happens when you reach the end of the sushi list.

4. Clicking a sushi on a plate will eat the sushi, causing it to be removed from its plate and an empty plate to appear on the table.

5. We need to make money! Whenever a sushi is eaten, customers should be automatically charged! Based on a budget decided by you, the developer, the amount of money remaining should go down by the cost of the sushi that was eaten. There is a spot to display this number in the Table component.

6. No free meals! Customers cannot eat any sushi that exceeds the amount of money remaining in their balance.
*/

const API = "http://localhost:3001/sushis";

function App() {
  const [sushi, setSushi] = useState([])
  const [plates, setPlates] = useState([])
  const [money, setMoney] = useState(100)

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(setSushi)
  }, [])

  function handlePlates(eaten, emptyPlate) {
    const alreadyEaten = !plates.some(plate => plate.id === eaten.id)
    if (alreadyEaten && money >= eaten.price) {
      setPlates([ ...plates, eaten])
      sushi.forEach(sushi => {
        if (sushi.id === eaten.id) {
          sushi.eaten = true
        }
      })
      emptyPlate(true)
      setMoney(money => money - eaten.price)
    }
  }

  function handleAddingMoney(additionalFunds) {
    setMoney(money => Number(money) + Number(additionalFunds))
  }

  return (
    <div className="app">
      <MoneyForm onAddingMoney={handleAddingMoney}/>
      <SushiContainer sushi={sushi} onPlates={handlePlates} />
      <Table plates={plates} money={money}/>
    </div>
  );
}

export default App;
