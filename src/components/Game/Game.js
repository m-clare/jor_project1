import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GameInput from "../GameInput/GameInput";
import Guess from "../Guess/Guess";
import { range } from "../../utils";

function Banner({ answer, guesses }) {
  if (answer === guesses[guesses.length - 1].guess) {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>
            {guesses.length} {guesses.length === 1 ? "guess" : "guesses"}
          </strong>
        </p>
      </div>
    );
  } else {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>
        </p>
      </div>
    );
  }
}
// Pick a random word on every pageload.
const answer = sample(WORDS);
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [endGame, setEndGame] = React.useState(false);

  const handleGuess = (newGuess) => {
    const newGuesses = [
      ...guesses,
      { guess: newGuess, id: crypto.randomUUID() },
    ];
    setGuesses(newGuesses);
    if (newGuess === answer || newGuesses.length === 6) {
      setEndGame(true);
    }
  };

  return (
    <>
      <div className="guess-results">
        {range(0, 6).map((item) => {
          return (
            <Guess key={item} guess={guesses[item]} correctAnswer={answer} />
          );
        })}
      </div>
      <GameInput handleGuess={handleGuess} endGame={endGame} />
      {endGame && <Banner answer={answer} guesses={guesses} />}
    </>
  );
}

export default Game;
