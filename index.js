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

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  // Create a function playRound
  // Pass it 2 parameters: "humanChoice" and "computerChoice"
  function playRound(humanChoice, computerChoice) {
    // Lowercase both parameter values
    const fmtHumanChoice = humanChoice.toLowerCase();
    const fmtComputerChoice = computerChoice.toLowerCase();
    let scoreMessage;

    // Compare values
    switch (fmtHumanChoice) {
      // If humanChoice equals computerChoice
      case fmtComputerChoice:
        //  Write "It's a tie, try again"
        scoreMessage = "It's a tie, try again";
        break;
      // If humanChoice equals "rock"
      case "rock":
        //  If computerChoice equals "scissors"
        if (fmtComputerChoice === "scissors") {
          //    Write "You win! Rock beats scissors"
          scoreMessage = "You win! Rock beats scissors";
          //    Increment humanScore
          humanScore++;
        } else {
          //    Write "You lose! Paper beats rock"
          scoreMessage = "You lose! Paper beats rock";
          //    Increment computerScore
          computerScore++;
        }
        break;
      // Else if humanChoice equals "paper"
      case "paper":
        //  If fmtComputerChoice equals "rock"
        if (fmtComputerChoice === "rock") {
          //    Write "You win! Paper beats rock"
          scoreMessage = "You win! Paper beats rock";
          //    Increment humanScore
          humanScore++;
        } else {
          //    Write "You lose! Scissors beats paper"
          scoreMessage = "You lose! Scissors beats paper";
          //    Increment computerScore
          computerScore++;
        }
        break;
      // Else if humanChoice equals "scissors"
      case "scissors":
        //  If fmtComputerChoice equals "paper"
        if (fmtComputerChoice === "paper") {
          //    Write "You win! scissors beats paper"
          scoreMessage = "You win! scissors beats paper";
          //    Increment humanScore
          humanScore++;
        } else {
          //    Write "You lose! Rock beats scissors"
          scoreMessage = "You lose! Rock beats scissors";
          //    Increment computerScore
          computerScore++;
        }
    }

    console.log(
      `Player chose ${fmtHumanChoice} --- Bot chose ${fmtComputerChoice}`
    );
    console.log(scoreMessage);
    console.log(`Score: Player ${humanScore} --- Bot ${computerScore}`);
  }

  //   Play 5 rounds
  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }

  //   Compare the final scores and display end game message
  if (humanScore > computerScore) {
    return "The player won gracefully";
  } else if (humanScore < computerScore) {
    return "The computer won";
  } else {
    return "It's a tie";
  }
}

console.log(playGame());
