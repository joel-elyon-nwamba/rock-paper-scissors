// Creaet variable to keep score 
let playerScore = 0;
let computScore = 0;

// the button in html 
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

// players Option
const playersOption = [rockBtn, paperBtn, scissorsBtn];

// Computers option
const computersOption = ["rock", "paper", "scissors"];

// Display the socres
const displayScore1 = document.getElementById("score1");
const displayScore2 = document.getElementById("score2");

//Create a function for a computers choice 
const computersChoice = () => {
    const randomArray = Math.floor(Math.random() * computersOption.length );
    console.log(randomArray)
    if(randomArray === 0) {
        return "rock";
    } else if(randomArray === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

computersChoice()
 
// PlayersChoice function created 
const playersChoice = () => {
    if(rockBtn === "rock") {
        return "rock";
    } else if(paperBtn === "paper") {
        return "paper";
    } else if(scissorsBtn === "scissors"){
        return "scissors"
    } else {
        return "Something is wrong please pick from the options provided"
    }
}