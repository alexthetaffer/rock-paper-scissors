
let playerScore = 0;
let computerScore = 0;
const roundInfo = document.querySelector('.round-info');
const score = document.querySelector('.score');

const weapons = document.querySelectorAll('.weapon');
weapons.forEach(weapon => {
    weapon.addEventListener('click', () => {
        const computerChoice = getComputerChoice()
        const msg = playRound(weapon.id, computerChoice);

        roundInfo.textContent = msg;
        
        if (weapon.id === computerChoice) {
            roundInfo.style.color = 'var(--accent)';
        } else if (msg.includes('win')) {
            roundInfo.style.color = 'green';
            playerScore++;
        } else {
            roundInfo.style.color = 'red';
            computerScore++;
        }

        score.textContent = `${playerScore}:${computerScore}`;
        // Change score-board color
        if (playerScore > computerScore) score.style.color = 'green';
        else if (computerScore > playerScore) score.style.color = 'red';
        else score.style.color = 'orange';

        if(playerScore >= 5) {
            roundInfo.textContent = "Congratulations! You win the game"
        } else if (computerScore >= 5) {
            roundInfo.textContent = "You loose the game. What a failure"
        }
    })
})

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
            return ("You loose! Paper stabs rock");
        } else if (computerSelection === 'scissors') {
            return ("You win! Rock breakes scissors");
        } else {
            return ("A tie!");
        }
    // Player chooses paper
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return ("You win! Paper stabs rock");
        } else if (computerSelection === 'scissors') {
            return ("You loose! Scissors cut paper");
        } else {
            return ("A tie!");
        }
    // Player chooses scissors
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return ("You loose! Rock breakes scissors");
        } else if (computerSelection === 'paper') {
            return ("You win! Scissors cut paper")
        } else {
            return ("A tie!");
        }
    } else {
        return ("Please, choose Rock Paper or Scissors");
    }
}