
function getComputerChoice() {

    // Generate random number [0..2]
    choice = Math.floor(Math.random()*3);

    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {

    // Convert user input to lowercase
    playerSelection = playerSelection.toLowerCase();
    
    // Player chooses rock
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return ("You loose! Paper beats rock");
        } else if (computerSelection === 'scissors') {
            return ("You win! Rock beats scissors");
        } else {
            return ("A tie!");
        }
    // Player chooses paper
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return ("You win! Paper beats rock");
        } else if (computerSelection === 'scissors') {
            return ("You loose! Scissors beat paper");
        } else {
            return ("A tie!");
        }
    // Player chooses scissors
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return ("You loose! Rock beats scissors");
        } else if (computerSelection === 'paper') {
            return ("You win! Scissors beat paper")
        } else {
            return ("A tie!");
        }
    } else {
        return ("Please, choose Rock Paper or Scissors");
    }
}

function game() {

    let playerScore = 0;
    let computerScore = 0;

    // Iterate for 5 rounds
    for (i = 0; i < 5; i++) {
        const playerSelection = prompt("Choose you weapon");
        const round = playRound(playerSelection, getComputerChoice());
        console.log(round);

        if (round.includes("win")) {
            playerScore++;
        } else if (round.includes("loose")) {
            computerScore++;
        } else if (round.includes("Please")) {
            i--; // Add iteration if player provides wrong input
        }
    }

    //Print winner
    if (playerScore > computerScore) {
        console.log(`You win with a score of ${playerScore} to ${computerScore}!`);
    } else if (computerScore > playerScore) {
        console.log(`You loose with a score of ${computerScore} to ${playerScore}!`);
    } else {
        console.log("It's a tie!");
    }
}

game();