console.log("hello world");
//Gloabl variable
const rocks = "rock";
const papers = "papers";
const scissors = "scissor";
// score variables
let humanScore = 0;
let computerScore = 0;


// Get the computers choice
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if(randomNumber === 1) {
        console.log(rocks);
    } else if(randomNumber === 2) {
        console.log(papers);
    } else {
        console.log(scissors);
    }
    console.log(randomNumber);
}
getComputerChoice();
// users choice of selection
function getHumanChoice() {
    let userPrompt = prompt("Select Rock, paper, or scissor");
    if(userPrompt === "rock") {
        console.log(rocks)
    } else if(userPrompt === "paper") {
        console.log(papers)
    } else {
        console.log(scissors)
    }
}

getHumanChoice();