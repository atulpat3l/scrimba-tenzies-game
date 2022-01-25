export default function Die({ value, isHeld, holdDice }) {
  const styles = {
    backgroundColor: isHeld ? "#59E391" : "white",
  };
  return (
    <div className="die" style={styles}>
      <h2 className="die__value" onClick={holdDice}>
        {value}
      </h2>
    </div>
  );
}
