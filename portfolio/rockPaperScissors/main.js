// Task 1 - 3
function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log('error');
        return 'Invalid choice';
    }
}

// Task 5
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

// Task 7
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'Draw';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'scissors' && computerChoice === 'paper') ||
        (userChoice === 'paper' && computerChoice === 'rock')
    ) {
        return 'Winner';
    } else {
        return 'Loser';
    }
}

function playGame() {
    let userChoice = getUserChoice(document.getElementById('userChoice').value);
    let computerChoice = getComputerChoice();
    let result = determineWinner(userChoice, computerChoice);
    document.getElementById('result').innerText = `You chose ${userChoice}. Computer chose ${computerChoice}. Result: ${result}`;
    console.log(`Computer choice is ${computerChoice}`);
    console.log(`User choice is ${userChoice}`);
    console.log(result);
}
