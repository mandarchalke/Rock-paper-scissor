function game() {
    for (i = 1; i < 6; i++) {
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

        function standardize(playerSelection) { // This function takes player input and standardize it. 
            let firstLetter = playerSelection[0]; //So even player is putting Rock, rock or ROCK or RoCk, this function will convert it into Rock
            firstLetter = firstLetter.replace(firstLetter, firstLetter.toUpperCase());
            //return firstLetter;
            let otherLetters = playerSelection.slice(1, playerSelection.length);
            let otherLetters2 = otherLetters.toLowerCase();
            let ans = firstLetter.concat(otherLetters2);
            return ans;
        }

        const playerSelection2 = standardize(playerSelection);

        console.log(computerSelection);
        console.log(playerSelection2);


        function playRound(playerSelection2, computerSelection) {
            if (playerSelection2 === computerSelection) {
                console.log(`It's a tie!`);
            } else if (playerSelection2 == "Rock" && computerSelection == "Paper") {
                console.log(`You lose!${computerSelection} beats ${playerSelection2}`);
                return computerScore = computerScore + 1;
            } else if (playerSelection2 == "Rock" && computerSelection == "Scissors") {
                console.log(`You win!${playerSelection2} beats ${computerSelection}`);
                return playerScore = playerScore + 1;
            } else if (playerSelection2 == "Paper" && computerSelection == "Rock") {
                console.log(`You win!${playerSelection2} beats ${computerSelection}`);
                return playerScore = playerScore + 1;
            } else if (playerSelection2 == "Paper" && computerSelection == "Scissors") {
                console.log(`You Lose!${computerSelection} beats ${playerSelection2}`);
                return computerScore = computerScore + 1;
            } else if (playerSelection2 == "Scissors" && computerSelection == "Paper") {
                console.log(`You win! ${playerSelection2} beats ${computerSelection}`);
                return playerScore = playerScore + 1;
            } else if (playerSelection2 == "Scissors" && computerSelection == "Rock") {
                console.log(`You lose!${computerSelection} beats ${playerSelection2}`);
                return computerScore = computerScore + 1;
            }
        }
        playRound(playerSelection2, computerSelection);
        console.log(`Computer score:${computerScore}`);
        console.log(`Player score:${playerScore}`);
    }
}

let computerScore = 0;
let playerScore = 0;

game();

if (computerScore === playerScore) {
    console.log("Its a tie. Play Again!");
} else if (computerScore > playerScore) {
    console.log("Computer Won!");
} else {
    console.log("Congratulations! Player Won!")
}