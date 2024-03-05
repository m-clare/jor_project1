import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

const maxLength = 5;

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";
  return <span className={className}>{letter}</span>;
}
function Guess({ guess, correctAnswer }) {
  const checkedGuess = checkGuess(guess?.guess, correctAnswer);
  return (
    <p className="guess">
      {range(maxLength).map((num) => (
        <Cell
          key={num}
          letter={checkedGuess ? checkedGuess[num].letter : undefined}
          status={checkedGuess ? checkedGuess[num].status : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;
