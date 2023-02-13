let playerSelection = "";
let computerScore = 0;
let playerScore = 0;

const buttons = document.querySelectorAll('button');


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.innerText;
        game();
    })
});


function game() {

    function getComputerChoice() {
        const choices = ["Rock", "Paper", "Scissors"];
        return choices[Math.floor(Math.random() * 3)];
    }

    const computerSelection = getComputerChoice();

    document.getElementById('computer').innerText = `Computer: ${computerSelection}`;
    document.getElementById('player').innerText = `Player: ${playerSelection}`;

    function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            return `It's a tie!`;
        } else if (playerSelection == "Rock" && computerSelection == "Paper") {
            computerScore = computerScore + 1;
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
            playerScore = playerScore + 1;
            return `You win! ${playerSelection} beats ${computerSelection}`;
        } else if (playerSelection == "Paper" && computerSelection == "Rock") {
            playerScore = playerScore + 1;
            return `You win! ${playerSelection} beats ${computerSelection}`;
        } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
            computerScore = computerScore + 1;
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
            playerScore = playerScore + 1;
            return `You win! ${playerSelection} beats ${computerSelection}`;
        } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
            computerScore = computerScore + 1;
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        }
    }

    document.getElementById('result').innerText = playRound(playerSelection, computerSelection);;

    document.getElementById('computerScore').innerText = `Computer score: ${computerScore}`;
    document.getElementById('playerScore').innerText = `Player score: ${playerScore}`;

    if (playerScore === 5) {
        document.getElementById('finalResult').innerText = `Player Win!`;
    } else if (computerScore === 5) {
        document.getElementById('finalResult').innerText = `Computer Win!`;
    }
}


