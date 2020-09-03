const chai = require("chai");
const { assert, expect } = chai;

describe("Jokenpo test case ", () => {
  it('Must return "player one wins the game *--*" (rock win scissors)', () => {
    jokenpo.getResult({ playerOne: "pedra", playerTwo: "tesoura" }, function (
      err,
      data
    ) {
      expect(data).to.equal("playerOne Win!");
    });
  });

  it('Must return "player two win!" (rock loses paper)', () => {
    jokenpo.getResult({ playerOne: "pedra", playerTwo: "papel" }, function (
      err,
      data
    ) {
      expect(data).to.equal("playerTwo Win!");
    });
  });

  it('Must return "Game tied! Play again!" (rock equal rock)', () => {
    jokenpo.getResult({ playerOne: "pedra", playerTwo: "pedra" }, function (
      err,
      data
    ) {
      assert.equal(data, "Game tied :( ! Play again !");
    });
  });
});

describe("Jokenpo test case", () => {
  it('Must return "player one win!" (scissors win paper)', () => {
    jokenpo.getResult({ playerOne: "tesoura", playerTwo: "papel" }, function (
      err,
      data
    ) {
      expect(data).to.equal("PlayerOne Win!");
    });
  });

  it('Must return "player two win!" (scissors lose for rock)', () => {
    jokenpo.getResult({ playerOne: "tesoura", playerTwo: "pedra" }, function (
      err,
      data
    ) {
      expect(data).to.equal("PlayerTwo Win!");
    });
  });

  it("Must return Game tied! (scissors equals scissors)", () => {
    jokenpo.getResult({ playerOne: "tesoura", playerTwo: "tesoura" }, function (
      err,
      data
    ) {
      assert.equal(data, "Game tied :( ! Play again!");
    });
  });
});

describe("Jokenpo test case", () => {
  it('Must return "player one win!" (paper win rock)', () => {
    jokenpo.getResult({ playerOne: "papel", playerTwo: "pedra" }, function (
      err,
      data
    ) {
      expect(data).to.equal("PlayerOne Win!");
    });
  });

  it('Must return "player two win!" (papel loses for tesoura)', () => {
    jokenpo.getResult({ playerOne: "papel", playerTwo: "tesoura" }, function (
      err,
      data
    ) {
      expect(data).to.equal("Playertwo Win!");
    });
  });

  it('Must return "Game tied! Play again!" (papel equals papel)', () => {
    jokenpo.getResult({ playerOne: "papel", playerTwo: "papel" }, function (
      err,
      data
    ) {
      assert.equal(data, "Game tied! Play again!");
    });
  });
});
