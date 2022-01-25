export default function Die({ value, isHeld }) {
  const styles = {
    backgroundColor: isHeld ? "#59E391" : "white",
  };
  return (
    <div className="die" style={styles}>
      <h2 className="die__value">{value}</h2>
    </div>
  );
}
