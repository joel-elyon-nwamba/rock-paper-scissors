console.log("hello world");
//Gloabl variable
const rocks = "rock";
const papers = "papers";
const scissors = "scissor";
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

function getHumanChoice() {
    
}