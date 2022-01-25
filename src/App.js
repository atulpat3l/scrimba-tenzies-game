import { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import Die from "./Die";
function App() {
  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      });
    }
    return newDice;
  }

  const [dice, setDice] = useState(allNewDice());

  const diceElements = dice.map((die) => (
    <Die value={die.value} key={die.id} />
  ));

  function handleClick() {
    setDice(allNewDice());
  }

  return (
    <main className="main">
      <div className="die__container">{diceElements}</div>
      <button className="btn" onClick={handleClick}>
        Roll
      </button>
    </main>
  );
}

export default App;
