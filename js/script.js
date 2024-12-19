// Grab the DOM for buttons, Score displaye
let choiceOfComputer = "";
let playerChoice = "";
// Display Scores 
let displayScore1 = document.getElementById("score1");
let displayScore2 = document.getElementById("score2");

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissors");
console.log(rockBtn.id);
console.log(paperBtn.id);
console.log(scissorBtn.id);
const buttons = document.querySelectorAll("button");
// Reset Game
const resetGame= document.getElementById("reset-game");

// Scoreboard when player or computer wins 
let computerScore = 0;
let playerScore = 0;



// Function for the players choice only be triggered with an event handler
const playersChoice = (e) => {
    if(e.target.id === rockBtn) {
        console.log("click me!")
        return playerChoice = "rock";
    } else if(e.target.id === paperBtn.id) {
        return playerChoice = "paper"
    } else if(e.target.id === scissorBtn.id) {
        return playerChoice = "scissor"
    } else {
        return "This is an error please enter the correct info for the game to work"
    }
}
rockBtn.addEventListener("click", playersChoice);

// Computer's random spot 
const computerChoice = () => {
let randomNumber = Math.floor(Math.random() * 3) + 1;
console.log(randomNumber)
if(randomNumber === 1) {
return choiceOfComputer = "rock";
} else if(randomNumber === 2) {
return choiceOfComputer = "paper";
} else if(randomNumber === 3) {
return choiceOfComputer = "scissors";
} else {
return "Wrong task"
}
}

console.log(computerChoice());

// Get the results of the game accordingly
const  gameResults = (e) => {
   const computerPlay = computerChoice();
   const playerSelect = playersChoice(e);
   if(playerSelect === "rock" && computerPlay === "scissors") {
   displayScore1++
   } else if(playerSelect === "scissors" && computerPlay === "rock"){
   displayScore2++
   } else if(playerSelect === "paper" && computerPlay === "rock") {
   displayScore1++
   } else if(playerSelect === "paper" && computerPlay === "scissor"){
   displayScore2++
   } else if(playerSelect === "scissor" && computerPlay === "paper"){
   displayScore1++
   } else if(playerSelect === computerPlay){
   return "it's a tie";
   }
}

buttons.forEach(buttons => {
    buttons.addEventListener("click", gameResults);
})