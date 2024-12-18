// Grab the DOM for buttons, Score displaye
// Display Scores 
const displayScore1 = document.getElementById("score1");
const displayScore2 = document.getElementById("score2");

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissors");
console.log(rockBtn.id);
console.log(paperBtn.id);
console.log(scissorBtn.id);
// Reset Game
const resetGame= document.getElementById("reset-game");

// Scoreboard when player or computer wins 
let computerScore = 0;
let playerScore = 0;

// Function for the players choice
const playersChoice = (e) => {
    if(e.target.id === rockBtn) {
        return "rock";
    } else if(e.target.id === paperBtn.id) {
        return "paper"
    } else if(e.target.id === scissorBtn.id) {
        return "scissor"
    } else {
        return "This is an error please enter the correct info for the game to work"
    }
}

console.log(playersChoice("rock"));

// Computer's random spot 
const computerChoice = () => {
let randomNumber = Math.floor(Math.random() * 3) + 1;
console.log(randomNumber)
if(randomNumber === 1) {
return "rock";
} else if(randomNumber === 2) {
return "paper";
} else if(randomNumber === 3) {
return "scissors";
} else {
return "Wrong task"
}
}

console.log(computerChoice())