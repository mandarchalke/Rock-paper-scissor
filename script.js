let a = Math.floor(Math.random()*3);

function getComputerchoice(a) {
    if (a === 0) {
        return "Rock";
    } else if (a === 1) {
       return "Paper"; 
    } else if(a === 2) {
        return "Scissors";
    } 
}
console.log(getComputerchoice(a));

