let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);

    if (number === 0) {
        console.log("Computer: Rock")
        return "Rock";
    } else if (number === 1) {
        console.log("Computer: Paper")
        return "Paper";
    } else if (number === 2) {
        console.log("Computer: Scissors")
        return "Scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Paper, Rock or Scissors?");
    choice = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();

    if (choice === "Rock") {
        console.log("You: Rock")
        return "Rock";
    } else if (choice === "Paper") {
        console.log("You: Paper")
        return "Paper";
    } else if (choice === "Scissors") {
        console.log("You: Scissors")
        return "Scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Rock" && computerChoice === "Scissors") {
        console.log("You win this round!");
        console.log(humanChoice + " beats " + computerChoice + " - Point for you");
        humanScore++;
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        console.log("You win this round!");
        console.log(humanChoice + " beats " + computerChoice + " - Point for you");
        humanScore++;
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        console.log("You win this round!");
        console.log(humanChoice + " beats " + computerChoice + " - Point for you");
        humanScore++;
    } else if (humanChoice === computerChoice) {
        console.log("Draw!");
        console.log("No points were designated");
    } else {
        console.log("Computer wins this round!");
        console.log(computerChoice + " beats " + humanChoice + " - Point for Computer")
        computerScore++;
    }
    console.log("Current match result: " + humanScore + " - " + computerScore + "\n\n");
}

function playGame() {
    console.log("Rock Paper Scissors Game!\n\n");
    for (let i = 0; i < 5; i++) {
        console.log("Round " + (i + 1) + "!\n\n");
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log('%c You win this tournament! ', 'background: #222; color: #bada55')
    }

    else if (humanScore === computerScore) {
        console.log('%c Draw, nobody wins this tournament! ', 'background: #222; color: #ffff00')
    }

    else {
        console.log('%c Computer wins this tournament! ', 'background: #222; color: #ff4500')
    }
}

playGame();