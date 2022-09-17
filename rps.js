/*
top examples:
https://github.com/lookingcoolonavespa/rock-paper-scissors/commit/29ea22d1ebf2fc521c416723662b2a8d0f5bfa8f 
https://github.com/michalosman/rock-paper-scissors/commit/b1179e9a69e68fdb1d93615b1fd74edb9c526a44
*/

// global variables
let userScore;
let computerScore;
const results = document.querySelector(".results");

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

startGameLoop();

function startGameLoop() {
    results.replaceChildren(); // clears the screen of text
    resetScores();
    //while (userScore < 3 && computerScore < 3) { // best of 5 condition that accounts for ties
    //getUserInput();
    //}
    getUserInput();
    //playAgain();
}

function resetScores() {
    userScore = 0;
    computerScore = 0;
}

function getUserInput() {
    const computerText = document.createElement("h1");
    computerText.textContent = "Rock, paper, scissors, SHOOT!"
    results.append(computerText);
    
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

/*
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
*/

function playRound(userInput, computerInput) {
    let result = getResult(userInput, computerInput);
    updateScore(result);
    results.replaceChildren(); //PogChamp - gets rid of all the computerText child nodes, i.e. clears the screen of the printResult
    printResult(userInput, computerInput, result);
}

function getResult(userInput, computerInput) {
    let result;
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
            computerScore++;
        }
        else if (result === "win") {
            userScore++;
        }
    // else tie: score stays the same
}

// FYI: spans should be used in lieu of h1 for inline text
function printResult(userInput, computerInput, result) {
    // Computer: "I choose..."
    const computerText = document.createElement("h3");
    computerText.textContent = "I choose... " + computerInput.toUpperCase() + "!";
    results.append(computerText);

    // Computer: "Your ____ ties with my _____."
    const computerText2 = document.createElement("h2");
    if (result === "tie") {
        computerText2.textContent = "Your " + userInput + " ties with my " + computerInput + ".";
    }
    else if (result === "lose") {
        computerText2.textContent = "My " + computerInput + " beats your " + userInput + ".";
    }
    else if (result === "win") {
        computerText2.textContent = "Your " + userInput + " beats my " + computerInput + ".";
    }
    results.append(computerText2);

    // Computer: "The score is..."
    const computerText3 = document.createElement("h2");
    computerText3.textContent = "The score is " + userScore + "-" + computerScore + ".";
    results.append(computerText3);

    // Computer: "You WIN!? Lucky..."
    if (userScore > 2 || computerScore > 2) {
       printWinner();
       playAgain();
    }
}

function printWinner() {
    const winnerText = document.createElement("h1");

    let winner = getWinner();
    if (winner === "user") {
        winnerText.textContent = "You... WIN!? Lucky rascal...";
    }
    else if (winner === "computer") {
        winnerText.textContent = "You LOSE! This game is all skill, and you ain't got none! Better skill next time!";
    }
    else {
        winnerText.textContent = "ERROR: no winner?";
    }
    results.append(winnerText);
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
    const playAgainText = document.createElement("h2");
    playAgainText.textContent = "Play again?"
    results.append(playAgainText);

    /*
    if (userInput === "y") {
        startGameLoop();
    }
    else if (userInput === "n") {
        alert("Thank you for playing!");
    }
    */
    const yesButton = document.createElement("button");
    yesButton.textContent = "Yes";
    results.append(yesButton);

    const noButton = document.createElement("button");
    noButton.textContent = "No";
    results.append(noButton);

    yesButton.addEventListener("click", startGameLoop);
    noButton.addEventListener("click", endGameLoop);
}

function endGameLoop() {
    alert("What could possibly be more worth your time than playing ro sham bo with your old buddy... get back here");
}