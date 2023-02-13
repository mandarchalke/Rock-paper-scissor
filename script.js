let playerSelection = "";
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.innerText;
        game();
    })
})

function game() {

    function getComputerChoice() {
        const choices = ["Rock", "Paper", "Scissors"];
        return choices[Math.floor(Math.random() * 3)];
    }

    const computerSelection = getComputerChoice();

    document.getElementById('computer').innerText = `Computer: ${computerSelection}`;
    document.getElementById('player').innerText = `Player: ${playerSelection}`;

    let computerScore = 0;
    let playerScore = 0;

    function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            return (`It's a tie!`);
        } else if (playerSelection == "Rock" && computerSelection == "Paper") {
            return (`You lose! ${computerSelection} beats ${playerSelection}`);
            return computerScore = computerScore + 1;
        } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
            return (`You win! ${playerSelection} beats ${computerSelection}`);
            return playerScore = playerScore + 1;
        } else if (playerSelection == "Paper" && computerSelection == "Rock") {
            return (`You win! ${playerSelection} beats ${computerSelection}`);
            return playerScore = playerScore + 1;
        } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
            return (`You Lose! ${computerSelection} beats ${playerSelection}`);
            return computerScore = computerScore + 1;
        } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
            return (`You win! ${playerSelection} beats ${computerSelection}`);
            return playerScore = playerScore + 1;
        } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
            return (`You lose! ${computerSelection} beats ${playerSelection}`);
            return computerScore = computerScore + 1;
        }
    }

    document.getElementById('result').innerText = playRound(playerSelection, computerSelection);;

    console.log(`Computer score:${computerScore}`);
    console.log(`Player score:${playerScore}`);

    /*
        if (computerScore === playerScore) {
            console.log("Its a tie. Play Again!");
        } else if (computerScore > playerScore) {
            console.log("Computer Won!");
        } else {
            console.log("Congratulations! Player Won!")
        }
    */
}
