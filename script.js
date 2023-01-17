const a = Math.floor(Math.random() * 3);

function getComputerChoice(a) {
    if (a === 0) {
        return "Rock";
    } else if (a === 1) {
        return "Paper";
    } else if (a === 2) {
        return "Scissors";
    }
}

const computerSelection = getComputerChoice(a);
const playerSelection = prompt("Enter your choice: ",);


function game(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("It's a tie!");
    } else if (playerSelection == "Rock" && computerSelection == "Paper") {
        console.log("You lose!");
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        console.log("You win!");
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        console.log("You win!");
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        console.log("You Lose!");
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        console.log("You win!");
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        console.log("You lose!");
    }
}

game(playerSelection, computerSelection);