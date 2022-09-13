/*
top examples:
https://github.com/lookingcoolonavespa/rock-paper-scissors/commit/29ea22d1ebf2fc521c416723662b2a8d0f5bfa8f 
https://github.com/michalosman/rock-paper-scissors/commit/b1179e9a69e68fdb1d93615b1fd74edb9c526a44
*/

// global variables
let userScore;
let computerScore;

startGameLoop();

function startGameLoop() {
    resetScores();
    //while (userScore < 3 && computerScore < 3) { // best of 5 condition that accounts for ties
       getUserInput();
        /*
        let userInput = getUserInput();
        let computerInput = getComputerInput();
        playRound(userInput, computerInput);
        */
    //}
    //printWinner();
    //playAgain();
}

function resetScores() {
    userScore = 0;
    computerScore = 0;
}

function getUserInput() {
    // creating the buttons
    const rockButton = document.querySelector('img[src="./imgs/rock.png"]');
    const paperButton = document.querySelector('img[src="./imgs/paper.png"]');
    const scissorsButton = document.querySelector('img[src="./imgs/scissors.png"]');


    rockButton.addEventListener("click", playRock);
    paperButton.addEventListener("click", playPaper);
    scissorsButton.addEventListener("click", playScissors);

    function playRock() {
        playRound("rock", getComputerInput());
    }

    function playPaper() {
        playRound("paper", getComputerInput());
    }

    function playScissors() {
        playRound("scissors", getComputerInput());
    }
    
}

function getComputerInput() {
    let computerInput;
    switch(getRandomInt()) {
        case 1:
            computerInput = "rock";
            break;
        case 2:
            computerInput = "paper";
            break;
        case 3:
            computerInput = "scissors";
            break;
    }
    return computerInput;
}

// returns random value from 1-3 inclusive
function getRandomInt() {
    let max = 3;
    let randomInt = Math.floor(Math.random()*max + 1);
    return randomInt;
}

function playRound(userInput, computerInput) {
    console.log("I choose... " + computerInput.toUpperCase() + "!");
    let result = getResult(userInput, computerInput);
    if (result === "tie") {
        console.log("Your " + userInput + " ties with my " + computerInput + ".");
    }
    else if (result === "lose") {
        console.log("My " + computerInput + " beats your " + userInput + ".");
    }
    else if (result === "win") {
        console.log("Your " + userInput + " beats my " + computerInput + ".");
    }
    updateScore(result);
    printScore();
}

function getResult(userInput, computerInput) {
    if (userInput === "rock") {
        if (computerInput === "rock") {
            result = "tie";
        }
        else if (computerInput === "paper") {
            result = "lose";
        }
        else if (computerInput === "scissors") {
            result = "win"
        }
    }
    else if (userInput === "paper") {
        if (computerInput === "paper") {
            result = "tie";
        }
        else if (computerInput === "scissors") {
            result = "lose";
        }
        else if (computerInput === "rock") {
            result = "win";
        }
    }
    else if (userInput === "scissors") {
        if (computerInput === "scissors") {
            result = "tie";
        }
        else if (computerInput === "rock") {
            result = "lose";
        }
        else if (computerInput === "paper") {
            result = "win";
        }
    }
    return result;
}

function updateScore(result) {
        if (result === "lose") {
            computerScore += 1;
        }
        else if (result === "win") {
            userScore += 1;
        }
    // else tie: score stays the same
}

function printScore() {
    console.log("The score is " + userScore + "-" + computerScore + ".");
}

function playAgain() {
    checkValidInput();
}

function printWinner() {
    let winner = getWinner();
    if (winner === "user") {
        console.log("You... WIN!? Lucky rascal...");
    }
    else if (winner === "computer") {
        console.log("You LOSE! This game is all skill, and you ain't got none! Better skill next time!");
    }
    else {
        console.log("ERROR: no winner?")
    }
}

function getWinner() {
    let winner;
    if (userScore > computerScore) {
        winner = "user";
    }
    else if (computerScore > userScore) {
        winner = "computer";
    }
    else {
        console.log("ERROR: no winner?");
    }
    return winner;
}

function playAgain() {
    let userInput = prompt("Play again? (Type <y> or <n>.)");
    if (userInput === null) {
        return;
    }
    while (userInput != "y" && userInput != "n") {
        userInput = prompt("Invalid input. Please type <y> or <n>.");
    }
    if (userInput === "y") {
        startGameLoop();
    }
    else if (userInput === "n") {
        alert("Thank you for playing!");
    }
}