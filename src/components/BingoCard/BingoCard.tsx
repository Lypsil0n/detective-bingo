import { useState } from "react";
import "./BingoCard.css";


function BingoCard({information, onFlip}: any) {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped) 
    onFlip(); 
  }

  return (
    <div className="bingo-container" onClick={handleClick}>
      <div className={`card ${flipped ? "flipped" : ""}`}>
        <div className="card-front">
            <p>{information.name}</p>
        </div>
        <div className="card-back">
          <img src='img/logo.png'></img>
        </div>
      </div>
    </div>
  );
}

export default BingoCard;
