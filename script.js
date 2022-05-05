function computerPlay() {
  let num = Math.round(Math.random() * 2);
  switch (num) {
    case 0:
      return "ROCK";
    case 1:
      return "PAPER";
    case 2:
      return "SCISSORS";
  }
}

function playRound(playerSelection, computerSelection) {
  let playerSelectionUpper = playerSelection.toUpperCase();
  switch (playerSelectionUpper) {
    case "ROCK":
      if (computerSelection == "ROCK") {
        return "Draw";
      } else if (computerSelection == "PAPER") {
        return "Loss";
      } else {
        return "Victory";
      }
    case "PAPER":
      if (computerSelection == "ROCK") {
        return "Victory";
      } else if (computerSelection == "PAPER") {
        return "Draw";
      } else {
        return "Loss";
      }
    case "SCISSORS":
      if (computerSelection == "ROCK") {
        return "Loss";
      } else if (computerSelection == "PAPER") {
        return "Victory";
      } else {
        return "Draw";
      }
  }
}

function game() {
  let userScore = 0;
  let drawScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let userSelection = prompt("What you choose?");
    let pcSelection = computerPlay();
    let result = playRound(userSelection, pcSelection);
    console.log(result);
    if (result == "Victory") {
      userScore++;
    } else if (result == "Draw") {
      drawScore++;
    } else if (result == "Loss") {
      computerScore++;
    }
  }
  if (userScore > computerScore) {
    console.log("You won");
  } else if (userScore < computerScore) {
    console.log("PC won");
  } else {
    console.log("There was a draw");
  }
}

game();