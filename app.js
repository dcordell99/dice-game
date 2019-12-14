/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

let randomRollDice;
let whichPlayer = true;

const buttonNewGame = document.querySelector(".btn-new");
const buttonRoll = document.querySelector(".btn-roll");
const buttonHold = document.querySelector(".btn-hold")

const newGame = () => {
  let player1 = document.querySelector(".player-0-panel");
  let player2 = document.querySelector(".player-1-panel");

  const reset = (name, value) => {
    document.querySelector(name).textContent=value;
    document.querySelector(name).textContent=value;
    document.querySelector(name).textContent=value;
  }

  if (player1.classList.toggle("active") === false) {
    player1.classList.toggle("active");
    playerTurn();
    playerTurn();
    reset("#score-0", "0");
    reset("#current-0", "0");
    reset("#score-1", "0");
    reset("#current-1", "0")
    reset("#name-0", "Player 1");
    reset("#name-1", "Player 2");
  } else if (player2.classList.toggle("active") === false) {
    player1.classList.toggle("active");
    player2.classList.toggle("active");
    // playerTurn();
    playerTurn();
    reset("#score-0", "0");
    reset("#current-0", "0");
    reset("#score-1", "0");
    reset("#current-1", "0")
    reset("#name-0", "Player 1");
    reset("#name-1", "Player 2");
  }
}

const randomRoll = () => {
  let number = Math.floor(Math.random()*6);
  return number;
}

const playerTurn = () => {
  let player1 = document.querySelector(".player-0-panel")
  let player2 = document.querySelector(".player-1-panel")
  player1 = player1.classList.toggle("active");
  player2 = player2.classList.toggle("active");
  let player1Current = document.querySelector("#current-0").textContent="0";
  let player2Current = document.querySelector("#current-1").textContent="0";

  if (whichPlayer === true) {
    whichPlayer = false;
    player1;
    player2;
    player1Current;
    player2Current;
  } else if (whichPlayer === false) {
    whichPlayer = true;
    player2;
    player1;
    player2Current;
    player2Current;
  }
}

const diceChange = () => {
    randomRollDice = randomRoll();
    let dice = document.querySelector(".dice");
    let player1 = document.querySelector("#name-0").textContent;
    let player2 = document.querySelector("#name-1").textContent;

    if (player1 === "WINNER!!!" || player2 === "WINNER!!!") {
      return;
    } else if (player1 === "Player 1" || player2 === "Player 2") {
      if (randomRollDice === 1) {
        dice.src="dice-1.png";
        playerTurn();
      } else if (randomRollDice === 2) {
          dice.src="dice-2.png";
      } else if (randomRollDice === 3) {
          dice.src="dice-3.png";
      } else if (randomRollDice === 4) {
          dice.src="dice-4.png";
      } else if (randomRollDice === 5) {
          dice.src="dice-5.png";
      } else if (randomRollDice === 6) {
          dice.src="dice-6.png";
      }
    playerCurrentScore();
  }
}

const playerCurrentScore = (playerCurrent) => {
  const currentScore = (playerCurrent) => {
    if (randomRollDice >= 2) {
      let currentScore = document.querySelector(playerCurrent).textContent;
      currentScore = Math.floor(currentScore) + randomRollDice;
      currentScore = document.querySelector(playerCurrent).textContent=currentScore;
    }
  }
  if (whichPlayer === true) {
    currentScore("#current-0")
  } else if (whichPlayer === false) {
    currentScore("#current-1");
  }
}

const holdScore = (current, score) => {
  if (whichPlayer === true) {
    current = "#current-0";
    score = "#score-0";
  } else if (whichPlayer === false) {
    current = "#current-1";
    score = "#score-1";
  }

  let currentScore = document.querySelector(current).textContent;
  let totalScore = document.querySelector(score).textContent;
  currentScore = Math.floor(currentScore);
  totalScore = Math.floor(totalScore);
  totalScore = totalScore + currentScore;
  totalScore = document.querySelector(score).textContent=totalScore;
  document.querySelector(current).textContent="0";

  let playerName1 = document.querySelector("#name-0");
  let playerName2 = document.querySelector("#name-1");

  if (totalScore >= 100 && whichPlayer === true) {
    playerName1.textContent="WINNER!!!";
    return;
  } else if (totalScore >= 100 && whichPlayer === false) {
    playerName2.textContent="WINNER!!!";
    return;
  }
  playerTurn();
}

buttonNewGame.addEventListener("click", newGame);
buttonRoll.addEventListener("click", diceChange);
buttonHold.addEventListener("click", holdScore);
