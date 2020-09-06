
function judge(playerOneMove, playerTwoMove) {
  if (playerOneMove == playerTwoMove) return "Game tied! Play again!";

  if (playerOneMove == "scissors")
    return playerTwoMove == "paper" ? "Player One Win!" : "Player two Win!";

  if (playerOneMove == "paper")
    return playerTwoMove == "rock" ? "Player One Win!" : "Player two Win!";

  if (playerOneMove == "rock")
    return playerTwoMove == "scissors" ? "Player One Win!" : "Player two Win!";
}

function gameResult(param, callback) {
  const { playerOne, playerTwo } = param;

  if (!playerOne || !playerTwo) {
    callback("Please enter the play of the two players!");
  }
  const winner = judge(playerOne, playerTwo);

  if (winner) {
    return winner;
  } else {
    callback("Please enter the correct data to continue the game!");
  }
}



module.exports = {
  gameResult: gameResult,
};
