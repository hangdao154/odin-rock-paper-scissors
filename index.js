function getComputerChoice() {
    const result = Math.floor((Math.random() * 3));

    switch (result) {
        case 0:
            console.log("rock");
            break;
        case 1:
            console.log("paper");
            break;
        case 2:
            console.log("scissors");
            break;
        default:
            console.log("Invalid.");
            return;
    }

    return result;
}

function getUserChoice() {
    const result = prompt("Your choice: ").trim().toLocaleLowerCase();
    console.log(result);

    switch (result) {
        case "rock":
            return 0;
        case "paper":
            return 1;
        case "scissors":
            return 2;
        default:
            console.log("Invalid.");
            return;
    }
}

function playRound(computerChoice, userChoice) {
    const result = computerChoice - userChoice;
    
    switch (result) {
        case 1:
        case -2:
            console.log("You lose this round.");
            computerScore++;
            break;
        case -1:
        case 2:
            console.log("You win this round.");
            userScore++;
            break;
        case 0:
            console.log("Tide.");
            break;
        default:
            console.log("Invalid");
            return;
    }
}

function playGame() {
    // Play 5 rounds
    for (i = 1; i <= ROUND_NUMBER; i++) {
        console.log(`====== ROUND ${i} ======`);

        const user = getUserChoice();
        const comp = getComputerChoice();
        
        if (comp !== undefined && user !== undefined) {
            playRound(comp, user);
        } else {
            console.log("Not making valid choice.");
        }
    }

    // Final winner
    if (computerScore > userScore) {
        console.log("The computer wins!");
    } else if (computerScore < userScore) {
        console.log("You win!");
    } else {
        console.log("Tide!");
    }
}

const ROUND_NUMBER = 5;

let computerScore = 0, userScore = 0;
playGame();


