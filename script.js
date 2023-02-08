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

    console.log("Computer: ", computerSelection);
    console.log("Player: ", playerSelection);

    let computerScore = 0;
    let playerScore = 0;

    function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            console.log(`It's a tie!`);
        } else if (playerSelection == "Rock" && computerSelection == "Paper") {
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
            return computerScore = computerScore + 1;
        } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
            return playerScore = playerScore + 1;
        } else if (playerSelection == "Paper" && computerSelection == "Rock") {
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
            return playerScore = playerScore + 1;
        } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
            return computerScore = computerScore + 1;
        } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
            return playerScore = playerScore + 1;
        } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
            return computerScore = computerScore + 1;
        }
    }


    playRound(playerSelection, computerSelection);

    //console.log(`Computer score:${computerScore}`); not needed now.
    //console.log(`Player score:${playerScore}`);

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


/*

*/