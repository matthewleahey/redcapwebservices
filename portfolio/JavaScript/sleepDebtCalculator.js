//Task 1 - 2
function getSleepHours (day) {
  if (day === 'monday') {
    return 8;
  } else if (day === 'tuesday') {
    return 8;
  } else if (day === 'wednesday') {
    return 4;
  } else if (day === 'thursday') {
    return 5;
  } else if (day === 'friday') {
    return 8;
  } else if (day === 'saturday') {
    return 8;
  } else if (day === 'sunday') {
    return 8;
  } else {
    return 'error';
  }
}

//Task 3
console.log(getSleepHours('wednesday'));

//Task 4 - 5 
function getActualSleepHours() {
  return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
}

//Task 6
function getIdealSleepHours() {
  let idealHours = 7;
  return idealHours *= 7;
}

//Task 8 - 
function calculateSleepDebt () {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep!');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You got more sleep than needed!')
  } else if (actualSleepHours < idealSleepHours) {
    console.log('You should get some rest!');
  }
  console.log(actualSleepHours - idealSleepHours);
}

calculateSleepDebt();
