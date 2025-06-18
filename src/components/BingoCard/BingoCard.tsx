import "./BingoCard.css";

function handleClick() {
  alert("You clicked the card");
}

function BingoCard({information}: any) {
  return (
    <div className="bingo-card" onClick={handleClick}>
      <p>{information.name}</p>
    </div>
  );
}

export default BingoCard;
