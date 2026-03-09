function getComputerChoice() {
  const computerChoice = Math.random();
  if (computerChoice <= 0.33) {
    return "rock";
  } else if (computerChoice <= 0.66) {
    return "paper";
  } else {
    return "scissor";
  }
}

let humanScore = 0;
let computerScore = 0;

const resultsDiv = document.querySelector("#results");
const scoreDiv = document.querySelector("#score");

function playRound(humanChoice) {

  // Prevent further play if either player has reached 5 points
  if (humanScore >= 5 || computerScore >= 5) {
    return;
  }

  const computerChoice = getComputerChoice();


// Determine the winner of the round and update scores
  if (humanChoice === computerChoice) {
    resultsDiv.textContent = `It's a tie! Both chose ${humanChoice}.`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissor") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissor" && computerChoice === "paper")
  ) {
    humanScore++;
    resultsDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    resultsDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
  }

scoreDiv.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;

  if (humanScore >= 5) {
    resultsDiv.textContent += " Congratulations! You won the game!";
  } else if (computerScore >= 5) {
    resultsDiv.textContent += " Game over! The computer won the game.";
  }



}


const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorBtn = document.querySelector("#scissor");
rockBtn.addEventListener("click", function () {
  playRound("rock");
});
paperBtn.addEventListener("click", function () {
  playRound("paper");
});
scissorBtn.addEventListener("click", function () {
  playRound("scissor");
});
