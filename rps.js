// BUG: Yes/no buttons still not centered

// global variables
let userScore;
let computerScore;
const text = document.querySelector(".text");
const endButton = document.querySelector(".endButton");

// creating the buttons
const rockButton = document.querySelector('img[src="./imgs/rock.png"]');
const paperButton = document.querySelector('img[src="./imgs/paper.png"]');
const scissorsButton = document.querySelector('img[src="./imgs/scissors.png"]');

function activateButtons() {
    rockButton.addEventListener("click", playRock);
    paperButton.addEventListener("click", playPaper);
    scissorsButton.addEventListener("click", playScissors);
}

function playRock() {
    playRound("rock");
}

function playPaper() {
    playRound("paper");
}

function playScissors() {
    playRound("scissors");
}

function playRound(userInput) {
    let computerInput = getComputerInput();
    let result = getResult(userInput, computerInput);
    updateScore(result);
    clearText();
    printResult(userInput, computerInput, result);
    checkScore();
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

function getResult(userInput, computerInput) {
    let result;
    if (userInput === "rock" && computerInput === "rock" ||
        userInput === "paper" && computerInput === "paper" ||
        userInput === "scissors" && computerInput === "scissors") {
            result = "tie";
        }
    else if (userInput === "rock" && computerInput === "scissors" ||
             userInput === "paper" && computerInput === "rock" ||
             userInput === "scissors" && computerInput === "paper") {
            result = "win";
        }
    else {
            result = "lose";
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
    // else tie: scores stay the same
}

// gets rid of all the computerText child nodes, i.e. clears the screen of the printResult
function clearText() {
    text.replaceChildren();
    endButton.replaceChildren();
}

function printResult(userInput, computerInput, result) {
    // "I choose..."
    const computerText1 = document.createElement("h3");
    computerText1.textContent = "I choose... " + computerInput.toUpperCase() + "!";
    text.append(computerText1);

    // "Your ____ ties with my _____."
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
    text.append(computerText2);

    // "The score is..."
    const computerText3 = document.createElement("h2");
    computerText3.textContent = "The score is " + userScore + "-" + computerScore + ".";
    text.append(computerText3);
}

function checkScore() {
    if (userScore > 2 || computerScore > 2) { // Best of 5 condition
        printWinner();
        playAgain();
    }
}

function printWinner() {
    const winnerText = document.createElement("h1");

    let winner = (userScore > computerScore) ? "user" : "computer";
    if (winner === "user") {
        winnerText.textContent = "You... WIN!? Lucky rascal...";
    }
    else if (winner === "computer") {
        winnerText.textContent = "You LOSE! This game is all skill, and you ain't got none! Better skill next time!";
    }
    text.append(winnerText);
}

function playAgain() {
    decativateButtons(); // prevent user from playing after the game has ended

    const playAgainText = document.createElement("h2");
    playAgainText.textContent = "Play again?"
    text.append(playAgainText);

    const yesButton = document.createElement("button");
    yesButton.textContent = "Yes";
    endButton.append(yesButton);

    const noButton = document.createElement("button");
    noButton.textContent = "No";
    endButton.append(noButton);

    yesButton.addEventListener("click", startGameLoop);
    noButton.addEventListener("click", endGameLoop);
}

function decativateButtons() {
    rockButton.removeEventListener("click", playRock);
    paperButton.removeEventListener("click", playPaper);
    scissorsButton.removeEventListener("click", playScissors);
}

function startGameLoop() {
    activateButtons();
    resetScores();
    clearText();
    promptUser();
}

function resetScores() {
    userScore = 0;
    computerScore = 0;
}

function promptUser() {
    const computerText = document.createElement("h1");
    computerText.textContent = "Rock, paper, scissors, SHOOT!"
    text.append(computerText);
}

function endGameLoop() {
    alert("What could possibly be more worth your time than playing ro sham bo with your old buddy HAL 9000... get back here");
}

startGameLoop();