const rockButton = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const buttons = document.querySelector(".buttons");
const score = document.querySelector(".score");
const results = document.querySelector(".results");
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice;
    let choiceNumber = Math.floor(Math.random() * 3) 
    if (choiceNumber===1){
        choice = "Rock";
    }else if (choiceNumber===2){
        choice = "Paper";
    }else{
        choice = "Scissors";
    }
    return choice.toLowerCase();
}

function getHumanChoice() {
    return prompt("Choose one: Rock, Paper, Scissors").toLowerCase();
}

function updateScore(){
    score.textContent = `${humanScore}:${computerScore}`;
}

function playRound(humanChoice=getHumanChoice(), computerChoice=getComputerChoice()) {
    if (humanScore<5 && computerScore<5){
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();
        if (humanChoice===computerChoice) {
            results.textContent= "Draw";
        }else{
            //human wins
            if (humanChoice==="rock" && computerChoice=="scissors" ||
                humanChoice==="scissors" && computerChoice=="paper" ||
                humanChoice==="paper" && computerChoice=="rock") {
                    humanScore++;
                    results.textContent= "You won the round!";
                }else{
                    computerScore++;
                    results.textContent= "You lost the round!";
                }
        }
        updateScore();
        if (computerScore==5 || humanScore==5){
            if (humanScore==computerScore) {
                results.textContent= "It is a draw! Final score: " + humanScore + ":" + computerScore;
            }else if (humanScore>computerScore) {
                results.textContent= "You won the game! Final score: " + humanScore + ":" + computerScore;
            }else{
                results.textContent= "You lost the game! Final score: " + computerScore + ":" + humanScore;
            }
        }
    }
}

buttons.addEventListener("click",(e) =>{
    let target = e.target;
    

    switch (target.getAttribute("class")){
        case 'rock':
            playRound("rock");
            break;
        case 'paper':
            playRound("paper");
            break;
        case 'scissors':
            playRound("scissors");
            break; 
    }
});

