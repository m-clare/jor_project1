import React from "react";

function GameInput({ handleGuess, endGame }) {
  const [guess, setGuess] = React.useState("");
  return (
    <form
      aria-disabled={endGame}
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        setGuess("");
        handleGuess(guess);
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        disabled={endGame}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}
export default GameInput;
