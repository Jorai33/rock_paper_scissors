// Create a function named getComputerChoice
function getComputerChoice() {
  // Get a random number between 1 and 3
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  let computerChoice;

  // If random number equals 1, then computers'choice equals "rock"
  // Else if random number equals 2, then computers'choice equals "paper"
  // Else computers'choice equals "scissors"
  if (randomNumber === 1) {
    computerChoice = "rock";
  } else if (randomNumber === 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  // Returns computer's choice
  return computerChoice;
}

// Create a function getHumanChoice
function getHumanChoice() {
  // Prompt "Rock, paper or scissors ?"
  // Assign prompt value to human's choice
  let humanChoice = prompt("Rock, paper or scissors ?");

  // Return human's choice
  return humanChoice;
}

// Create a function playRound
// Pass it 2 parameters: "humanChoice" and "computerChoice"
// Lowercase both parameter values
// Compare values

// If humanChoice equals computerChoice
//  Write "It's a tie, try again"

// If humanChoice equals "rock"
//  If computerChoice equals "scissors"
//    Write "You win! Rock beats scissors"
//    Increment humanScore
//  Else write "You lose! Paper beats rock"
//    Write "You lose! Paper beats rock"
//    Increment computerScore

// Else if humanChoice equals "paper"
//  If computerChoice equals "rock"
//    Write "You win! Paper beats rock"
//    Increment humanScore
//  Else
//    Write "You lose! Scissors beats paper"
//    Increment computerScore

// Else
//  If computerChoice equals "paper"
//    Write "You win! scissors beats paper"
//    Increment humanScore
//  Else
//    Write "You lose! Rock beats scissors"
//    Increment computerScore

console.log(getComputerChoice());
console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;
