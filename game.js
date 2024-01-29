const rock = document.querySelector(".rock-btn");
const paper = document.querySelector(".paper-btn");
const scissor = document.querySelector(".scissor-btn");

const mainGame = document.querySelector(".game");
const gameResult = document.querySelector(".game-result");
const testResults = document.querySelector(".your-result");
const testAgainst = document.querySelector(".show-or-hide");
const userChoiceResult = document.querySelector(".user-choice-result");
const pcChoiceResult = document.querySelector(".pc-choice-result");
const userChoiceImg = document.querySelector(".user-choice-img");
const pcChoiceImg = document.querySelector(".pc-choice-img");

const playAgain = document.querySelector(".mybtn");

const userWin = document.querySelector(".user-winner");
const pcWin = document.querySelector(".pc-winner");

const finalVictory = document.querySelector(".victory");
const nextBtn = document.querySelector(".next-btn");
const mainTop = document.querySelector(".main-top");

const playerScore = document.querySelector(".your-score");
const computerScore = document.querySelector(".pc-score");

const rules = document.querySelector(".rules-btn");
const rulesBox = document.querySelector(".rules-box");
const closeRules = document.querySelector(".close-rules");

// Score

function allScore() {
  if (localStorage.getItem("userScore") === null) {
    localStorage.setItem("userScore", 0);
  }
  playerScore.textContent = `${parseInt(localStorage.getItem("userScore"))}`;
  if (localStorage.getItem("pcScore") === null) {
    localStorage.setItem("pcScore", 0);
  }
  computerScore.textContent = `${parseInt(localStorage.getItem("pcScore"))}`;
}
allScore();
function userScore() {
  let score = parseInt(localStorage.getItem("userScore"));
  localStorage.setItem("userScore", score + 1);
  allScore();
}
function pcScore() {
  let score = parseInt(localStorage.getItem("pcScore"));
  localStorage.setItem("pcScore", score + 1);
  allScore();
}

//for future use
function clearScore() {
  localStorage.clear();
  allScore();
}

// PC Event

function pcEvent() {
  let randomEvent = Math.floor(Math.random() * 3);
  console.log(randomEvent);
  if (randomEvent == 0) {
    pcChoiceResult.classList.add("rock-btn");
    pcChoiceImg.src = "images/rock.png";
    pcChoiceImg.className = "rock-img-result";
  } else if (randomEvent == 1) {
    pcChoiceResult.classList.add("paper-btn");
    pcChoiceImg.src = "images/paper.png";
    pcChoiceImg.className = "paper-img-result";
  } else {
    pcChoiceResult.classList.add("scissor-btn");
    pcChoiceImg.src = "images/scissor.png";
    pcChoiceImg.className = "scissor-img-result";
  }
  return randomEvent;
}

// Game Logic |  0 is rock, 1 is paper, 2 is scissor

function gameLogic(userInput, pcInput) {
  if (userInput == pcInput) {
    testResults.innerHTML = "TIE UP";
    testAgainst.style.display = "none";
    userWin.className = "user-winner";
    pcWin.className = "pc-winner";
    return "Tie";
  } else if (
    (userInput == 0 && pcInput == 2) ||
    (userInput == 1 && pcInput == 0) ||
    (userInput == 2 && pcInput == 1)
  ) {
    userScore();
    testResults.innerHTML = "YOU WIN";
    userWin.classList.add("winner-animation");
    nextBtn.style.display = "block";
    nextBtn.addEventListener("click", () => {
      finalVictory.style.display = "block";
      mainTop.style.display = "none";
      gameResult.style.display = "none";
    });
    return "User Win!";
  } else {
    pcScore();
    testResults.innerHTML = "YOU LOST";
    pcWin.classList.add("winner-animation");
    return "PC Win!";
  }
}
// Check & Show Result
function changeState() {
  mainGame.style.display = "none";
  gameResult.style.display = "block";
}
function animationRemove() {
  userWin.className = "user-winner";
  pcWin.className = "pc-winner";
}

rock.addEventListener("click", () => {
  let userInput = 0;
  testAgainst.style.display = "block";
  userChoiceResult.classList.add("rock-btn");
  userChoiceImg.src = "images/rock.png";
  userChoiceImg.className = "rock-img-result";
  animationRemove();
  let pcInput = pcEvent();
  let result = gameLogic(userInput, pcInput);
  console.log(result);

  changeState();
});

paper.addEventListener("click", () => {
  let userInput = 1;
  testAgainst.style.display = "block";
  userChoiceResult.classList.add("paper-btn");
  userChoiceImg.src = "images/paper.png";
  userChoiceImg.className = "paper-img-result";
  animationRemove();
  let pcInput = pcEvent();
  let result = gameLogic(userInput, pcInput);
  console.log(result);
  changeState();
});

scissor.addEventListener("click", () => {
  let userInput = 2;
  testAgainst.style.display = "block";
  userChoiceResult.classList.add("scissor-btn");
  userChoiceImg.src = "images/scissor.png";
  userChoiceImg.className = "scissor-img-result";
  animationRemove();
  let pcInput = pcEvent();
  let result = gameLogic(userInput, pcInput);
  console.log(result);

  changeState();
});

// Play Again

playAgain.addEventListener("click", () => {
  mainGame.style.display = "block";
  gameResult.style.display = "none";
  finalVictory.style.display = "none";
  nextBtn.style.display = "none";
  userChoiceResult.className = "user-choice-result";
  pcChoiceResult.className = "pc-choice-result";
});

// Rules Box

rules.addEventListener("click", () => {
  rulesBox.style.display = "block";
});

closeRules.addEventListener("click", () => {
  rulesBox.style.display = "none";
});

// Game Logic (OLD) (needs imporvement code too long, repeatitive and bad code)

// rock.addEventListener("click", () => {
//   console.log(rock.className);
//   changeSate();
//   let computerChoice = pcEvent();

//   if (computerChoice == 0) {
//     console.log("rock Tie");
//   } else if (computerChoice == 1) {
//     console.log("scissor win");
//   } else {
//     console.log("paper lose");
//   }
// });

// paper.addEventListener("click", () => {
//   console.log(paper.className);
//   changeSate();
//   let computerChoice = pcEvent();

//   if (computerChoice == 2) {
//     console.log("paper Tie");
//   } else if (computerChoice == 0) {
//     console.log("rock win");
//   } else {
//     console.log("scissor lose");
//   }
// });
// scissor.addEventListener("click", () => {
//   console.log(scissor.className);
//   changeSate();
//   let computerChoice = pcEvent();

//   if (computerChoice == 1) {
//     console.log("scissor Tie");
//   } else if (computerChoice == 2) {
//     console.log("paper win");
//   } else {
//     console.log("rock lose");
//   }
// });
