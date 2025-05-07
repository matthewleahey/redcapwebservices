//Task 1 - 3
function getUserChoice (userInput) {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' === userInput === 'scissors') {
    return userInput
  } else {
    console.log('error');
  }
}

//Task 4
//getUserChoice('rock');
//getUserChoice('test');

//Task 5
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);  
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

//Task 6
let computerChoice = getComputerChoice();
let userChoice = getUserChoice('rock');
console.log(`Computer choice is ${computerChoice}`);
console.log(`User choice is ${userChoice}`);
//Task 7
function determineWinner (userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'Draw';
  } else if (userChoice === 'rock' && computerChoice === 'scissors') {
    return 'Winner';
  } else if (userChoice === 'scissors' && computerChoice === 'paper') {
    return 'Winner';
  } else if (userChoice === 'paper' && computerChoice === 'rock') {
    return 'Winner';
  } else {
    return 'Loser';
  }
}

let result = determineWinner('rock', computerChoice);
console.log(result);
