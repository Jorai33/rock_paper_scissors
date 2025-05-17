function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    return "rock";
  } else if (randomNumber === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  return prompt("Rock, paper or scissors ?");
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  const results = document.querySelector("#results");

  function playRound(humanChoice, computerChoice) {
    const fmtHumanChoice = humanChoice.toLowerCase();
    const fmtComputerChoice = computerChoice.toLowerCase();
    let scoreMessage;

    switch (fmtHumanChoice) {
      case fmtComputerChoice:
        scoreMessage = "It's a tie, try again";
        break;
      case "rock":
        if (fmtComputerChoice === "scissors") {
          scoreMessage = "You win! Rock beats scissors";
          humanScore++;
        } else {
          scoreMessage = "You lose! Paper beats rock";
          computerScore++;
        }
        break;
      case "paper":
        if (fmtComputerChoice === "rock") {
          scoreMessage = "You win! Paper beats rock";
          humanScore++;
        } else {
          scoreMessage = "You lose! Scissors beats paper";
          computerScore++;
        }
        break;
      case "scissors":
        if (fmtComputerChoice === "paper") {
          scoreMessage = "You win! scissors beats paper";
          humanScore++;
        } else {
          scoreMessage = "You lose! Rock beats scissors";
          computerScore++;
        }
    }

    results.innerText = ` 
    Player chose ${fmtHumanChoice} --- Bot chose ${fmtComputerChoice}
    ${scoreMessage}
    Score: Player ${humanScore} --- Bot ${computerScore}
    `;
  }

  const buttons = Array.from(document.querySelectorAll("button"));
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      playRound(button.id, getComputerChoice());
    });
  });

  //   Compare the final scores and display end game message
  if (humanScore > 0 || computerScore > 0) {
    if (humanScore > computerScore) {
      return "The player won gracefully";
    } else if (humanScore < computerScore) {
      return "The computer won";
    } else {
      return "It's a tie";
    }
  } else {
    return "The game is about to start";
  }
}

console.log(playGame());
