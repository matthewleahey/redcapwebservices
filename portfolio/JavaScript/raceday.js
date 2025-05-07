//Task 1
let raceNumber = Math.floor(Math.random() * 1000);

//Task 2
const registeredEarly = false;

//Task 3
let runnerAge = 18;

//Task 4
if (runnerAge > 18 && registeredEarly === true) {
  raceNumber += 1000;
}

//Task 5 - 7
if (runnerAge > 18 && registeredEarly === true) {
  console.log(`Your race number is ${raceNumber}.  You will race at 9:30 am`);
} else if (runnerAge > 18 && registeredEarly === false) {
  console.log(`Your race number is ${raceNumber}.  You will race at 11:00 am`);
} else if (runnerAge < 18) {
  console.log(`Your race number is ${raceNumber}.  Youth registrants run at 12:30`);
} else if (runnerAge === 18) {
  console.log('See the registration desk');
}
