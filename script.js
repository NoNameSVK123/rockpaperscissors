
function getComputerChoice() {
    let choice;
    let choiceNumber = Math.random() * 10
    if (choiceNumber>6.66){
        choice = "Rock";
    }else if (choiceNumber>3.33){
        choice = "Paper";
    }else{
        choice = "Scissors";
    }
    return choice;
}

function getHumanChoice() {
    let choice = prompt("Choose one: Rock, Paper, Scissors");
    return choice;
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
            if (humanChoice==="rock") {
                if (computerChoice==="scissors") {
                    humanScore++;
                    console.log("You won! Rock beats scissors!");
                }else{
                    computerScore++;
                    console.log("You lost! Rock beats scissors!");
                }
            }else if (humanChoice==="scissors") {
                if (computerChoice==="paper") {
                    humanScore++;
                    console.log("You won! Scissors beat paper!");
                }else{
                    computerScore++;
                    console.log("You lost! Scissors beats paper!");
                }
            }else if (humanChoice==="paper") {
                if (computerChoice==="rock") {
                    humanScore++;
                    console.log("You won! Paper beats rock!");
                }else{
                    computerScore++;
                    console.log("You lost! Paper beats rock!");
                }
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