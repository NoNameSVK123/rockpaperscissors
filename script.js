
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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice=getHumanChoice(), computerChoice=getComputerChoice()) {
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();
        if (humanChoice===computerChoice) {
            console.log("Draw");
        }else{
            //human wins
            if (humanChoice==="rock" && computerChoice=="scissors" ||
                humanChoice==="scissors" && computerChoice=="paper" ||
                humanChoice==="paper" && computerChoice=="rock") {
                    humanScore++;
                    console.log("You won the round!");
                }else{
                    computerScore++;
                    console.log("You lost the round!");
                }
        }
    }

    for (let i=0; i<5; i++) {
        playRound();
    }

    if (humanScore==computerScore) {
        console.log("It is a draw! Final score: " + humanScore + ":" + computerScore);  
    }else if (humanScore>computerScore) {
        console.log("You won the game! Final score: " + humanScore + ":" + computerScore);  
    }else{
        console.log("You lost the game! Final score: " + computerScore + ":" + humanScore);  
    }
}

playGame()