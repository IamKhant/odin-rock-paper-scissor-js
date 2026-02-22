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

let round = 1;
function getHumanChoice(round) {
  let humanChoice = prompt("Round " + round + ": Please choose rock, paper or scissor");
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissor") {
    return humanChoice;
  } else {
    alert("Invalid choice, please choose rock, paper or scissor");
    return getHumanChoice(round);
  }
}

function playGame() {

  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
      console.log("Both players chose " + humanChoice + ". Human current score: " + humanScore + ", Computer current score: " + computerScore);
    } else if (
      (humanChoice === "rock" && computerChoice === "scissor") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissor" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log("Human wins!" + humanChoice + " beats " + computerChoice + ". Human current score: " + humanScore + ", Computer current score: " + computerScore);
    } else {

      computerScore++;
      console.log("Computer wins! " + computerChoice + " beats " + humanChoice + ". Computer current score: " + computerScore + ", Human current score: " + humanScore);
    }
  }

  for (let i = 0; i < 5; i++) {
    console.log("Round " + (i + 1) + ":");
    const humanSelection = getHumanChoice(i + 1);
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }


  console.log("That's it.");
  if (humanScore > computerScore) {
    console.log("Congratulations! You win the game with a score of " + humanScore + " to " + computerScore);
  } else if (computerScore > humanScore) {
    console.log("Sorry, you lose the game with a score of " + humanScore + " to " + computerScore);
  } else {
    console.log("It's a tie game with a score of " + humanScore + " to " + computerScore);
  }
}
playGame();