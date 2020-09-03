function getResult(param, callback) {
  const { playerOne, playerTwo } = param;

  if (!playerOne || !playerTwo) {
    callback("Please inform the play of the playerOne and PlayerTwo");
  }
  const winner = compareMoves(playerOne, playerTwo);

  if (winner) return winner;
  else {
    callback("The moves provided by players is not the jokenpo game!");
  }
}
function compareMoves(playerOneValue, playerTwoValue) {
  if (playerOneValue === playerTwoValue) return "Game tied! Play again!";

  if (playerOneValue === "tesoura")
    return playerTwoValue === "papel" ? "Player One Win!" : "Player two Win!";

  if (playerOneValue === "papel")
    return playerTwoValue === "pedra" ? "Player One Win!" : "Player two Win!";

  if (playerOneValue === "pedra")
    return playerTwoValue === "tesoura" ? "Player One Win!" : "Player two Win!";
}

module.exports = {
  getResult: getResult,
};
