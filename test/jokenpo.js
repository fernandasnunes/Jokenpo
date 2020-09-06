const jokenpo = require("../controllers/jokenpoController");
const chai = require("chai");
const expect = chai.expect;

describe("Jokenpo test case ", () => {
  it('Must return "player one wins the game *--*" (rock win scissors)', () => {
    jokenpo.gameResult({ playerOne: "rock", playerTwo: "scissors" }, function (
      err,
      data
    ) {
      expect(data).to.equal("playerOne Win!");
    });
  });

  it('Must return "player two win!" (rock loses paper)', () => {
    jokenpo.gameResult({ playerOne: "rock", playerTwo: "paper" }, function (
      err,
      data
    ) {
      expect(data).to.equal("playerTwo Win!");
    });
  });

  it('Must return "Game tied! Play again!" (rock equal rock)', () => {
    jokenpo.gameResult({ playerOne: "rock", playerTwo: "rock" }, function (
      err,
      data
    ) {
      assert.equal(data, "Game tied :( ! Play again !");
    });
  });
});

describe("Jokenpo test case", () => {
  it('Must return "player one win!" (scissors win paper)', () => {
    jokenpo.gameResult({ playerOne: "scissors", playerTwo: "paper" }, function (
      err,
      data
    ) {
      expect(data).to.equal("PlayerOne Win!");
    });
  });

  it('Must return "player two win!" (scissors lose for rock)', () => {
    jokenpo.gameResult({ playerOne: "scissors", playerTwo: "paper" }, function (
      err,
      data
    ) {
      expect(data).to.equal("PlayerTwo Win!");
    });
  });

  it("Must return Game tied! (scissors equals scissors)", () => {
    jokenpo.gameResult(
      { playerOne: "scissors", playerTwo: "scissors" },
      function (err, data) {
        assert.equal(data, "Game tied :( ! Play again!");
      }
    );
  });
});

describe("Jokenpo test case", () => {
  it('Must return "player one win!" (paper win rock)', () => {
    jokenpo.gameResult({ playerOne: "paper", playerTwo: "rock" }, function (
      err,
      data
    ) {
      expect(data).to.equal("PlayerOne Win!");
    });
  });

  it('Must return "player two win!" (paper loses for scissors)', () => {
    jokenpo.gameResult({ playerOne: "paper", playerTwo: "scissors" }, function (
      err,
      data
    ) {
      expect(data).to.equal("Playertwo Win!");
    });
  });

  it('Must return "Game tied! Play again!" (paper equals paper)', () => {
    jokenpo.gameResult({ playerOne: "paper", playerTwo: "paper" }, function (
      err,
      data
    ) {
      assert.equal(data, "Game tied! Play again!");
    });
  });
});
