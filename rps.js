/* Problem: 5-round (best-of-5) game of Rock, Paper, Scissors 

userScore = 0
computerScore = 0

prompt the user to input one of (rock, paper, or scissors)
    IF input does not match R/P/S
    ask user to input R/P/S


computerInput returns rock, paper or scissors randomly

randomize a number from 1-3
    IF 1
    return rock
    IF 2
    return paper
    IF 3
    return scissors


compare the input to the computerInput
    INPUT IS ROCK:
    IF input is rock and computerInput is rock
        tie
            PRINT "You tied. Rock (input) ties with rock (computerInput)."
    IF input is rock and computerInput is paper
        lose
            PRINT "You lost. Rock (input) loses to paper (computerInput)."
    IF input is rock and computerInput is scissors
        win
            PRINT "You won. Rock (input) beats scissors (computerInput)."


    INPUT IS PAPER:
    IF input is paper and computerInput is paper
        tie
    IF input is paper and computerInput is scissors
        lose
    IF input is paper and computerInput is rock
        win
        
        
    INPUT IS SCISSORS:
    IF input is scissors and computerInput is scissors
        tie
    IF input is scissors and computerInput is rock
        lose
    IF input is scissors and computerInput is paper
        win

update the score

display the userScore and computerScore
    PRINT "The score is <userScore> - <computerScore>."
        i.e. The score is 1-0.

prompt the user to play again
    PRINT "You choose..."

until the best of 5 is played out 
    WHEN userScore + computerScore === 5

determine the winner
    IF userScore > computerScore 
        user wins
            PRINT "You win! The final score is (printScore)"
    ELSE
        computer wins        
            PRINT "You lose! The final score is (printScore)"

prompt the user to try again
    PRINT "Play again?"
        IF yes
        start game loop again, beginning with the prompt
        reset userScore and computerScore
        IF no
        exit program
*/

// global variables
let userScore;
let computerScore;

/*prompt the user to input one of (rock, paper, or scissors)
    IF input does not match R/P/S
    ask user to input R/P/S
*/
startGameLoop();

function checkValidInput() {
    let userInput = prompt("Rock, paper, scissors, shoot! (Type <r>, <p>, or <s>.)");
    while (
        userInput !== "r" &&
        userInput !== "p" &&
        userInput !== "s" &&
        userInput !== "R" &&
        userInput !== "P" &&
        userInput !== "S"
    ) {
        // if cancel is pressed:
        if (userInput === null) {
            return; // not sure if there's a better thing to put here
        }
        userInput = prompt("Invalid input. Please type <r>, <p>, or <s>.)");
    } 
    userInput = translateInput(userInput);
    return userInput;
}

function translateInput(input) {
    let translatedInput;
    if (input === "r" ||
        input === "R") 
        {
            translatedInput = "rock";
        }
    else if (input === "p" ||
             input === "P")
        {
            translatedInput = "paper";
        }
    else if (input === "s" ||
             input === "S")
        {
            translatedInput = "scissors";
        }
    return translatedInput;
}

function getUserInput() {
    let userInput = checkValidInput();
    return userInput;
}

/*computerInput returns rock, paper or scissors randomly

randomize a number from 1-3
    IF 1
    return rock
    IF 2
    return paper
    IF 3
    return scissors
*/

function getRandomInt() {
    let max = 3;
    let randomInt = Math.floor(Math.random()*max + 1);
    return randomInt;
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

/*
// testing if computer returns approx. 1/3

let rockCounter = 0;
let paperCounter = 0;
let scissorsCounter = 0;

for (let i = 0; i <= 1000; i++) {
let computerInput = getComputerInput();
    if (computerInput === "rock") {
        rockCounter += 1;
    }
    if (computerInput === "paper") {
        paperCounter += 1;
    }
    if (computerInput === "scissors") {
        scissorsCounter += 1;
    }
console.log(rockCounter);
console.log(paperCounter);
console.log(scissorsCounter);
}

*/


/*
compare the input to the computerInput
    INPUT IS ROCK:
    IF input is rock and computerInput is rock
        tie
            PRINT "You tied. Rock (input) ties with rock (computerInput)."
    IF input is rock and computerInput is paper
        lose
            PRINT "You lost. Rock (input) loses to paper (computerInput)."
    IF input is rock and computerInput is scissors
        win
            PRINT "You won. Rock (input) beats scissors (computerInput)."
*/

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

// I play "<computerInput>"
// (results follow)
function printResult(userInput, computerInput) {
    let result = getResult(userInput, computerInput);
    console.log("I choose... " + computerInput + "!");
    if (result === "tie") {
        console.log(userInput + " ties with " + computerInput + ".");
    }
    else if (result === "lose") {
        console.log(computerInput + " beats " + userInput + ".");
    }
    else if (result === "win") {
        console.log(userInput + " beats " + computerInput + ".");
    }
}

// update the score
function updateScore() {
    let result = getResult();
        if (result === "lose") {
            computerScore += 1;
        }
        else if (result === "win") {
            userScore += 1;
        }
    // else tie: score stays the same
}

/*
display the userScore and computerScore
    PRINT "The score is <userScore> - <computerScore>."
        i.e. The score is 1-0.
*/
function printScore() {
    console.log("The score is " + userScore + "-" + computerScore + ".");
}

function printFinalScore() {
    console.log("The final score is " + userScore + "-" + computerScore + ".");
}

/*
prompt the user to play again
    PRINT "You choose..."
*/
function playAgain() {
    checkValidInput();
}


/*
determine the winner
    IF userScore > computerScore 
        user wins
            PRINT "You win! The final score is (printScore)"
    ELSE
        computer wins        
            PRINT "You lose! The final score is (printScore)"
*/

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

function printWinner() {
    let winner = getWinner();
    if (winner === "user") {
        console.log("You win!");
        printFinalScore();
    }
    else if (winner === "computer") {
        console.log("You lose!");
        printFinalScore();
    }
    else {
        console.log("ERROR: no winner?")
    }
}

/*
prompt the user to try again
    PRINT "Play again?"
        IF yes
        start game loop again, beginning with the prompt
        reset userScore and computerScore
        IF no
        exit program
*/

function resetScores() {
    userScore = 0;
    computerScore = 0;
}

function playAgain() {
    let userInput = prompt("Play again? (Type <y> or <n>.)");
    while (userInput != "y" && userInput != "n") {
        userInput = prompt("Invalid input. Please type <y> or <n>.");
    }
    if (userInput === "y") {
        startGameLoop();
    }
    if (userInput === "n") {
        alert("Thank you for playing!");
    }

}

function startGameLoop() {
    resetScores();
    // best of 5
    while (userScore + computerScore != 5) { 
        let userInput = getUserInput(); // good
        let computerInput = getComputerInput(); // good
        printResult(userInput, computerInput);
        updateScore();
        printScore();
    }
    printWinner();
    playAgain();
}