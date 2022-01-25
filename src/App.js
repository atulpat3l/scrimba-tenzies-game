import { useState } from 'react';
import './App.css';
import Die from './Die';
function App() {
  function allNewDice () {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6))
    }
    return newDice
  }

  const [dice, setDice] = useState(allNewDice())

  const diceElements =
    dice.map((value) => {
      return (
        <Die 
          value={value} 
        />
      )
    })

    function handleClick() {
      setDice(allNewDice())
    }
  

  return (
    <main className="main">
      <div className="die__container">
        {diceElements}
        
      </div>
      <button className='btn' onClick={handleClick}>Roll</button>
    </main>
  );
}

export default App;
