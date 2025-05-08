//Task 1
let input = 'Listen to the whale';

//Task 2
const vowels = ['a', 'e', 'i', 'o', 'u'];

//Task 3
let resultArray = [];

//Tasks 4 - 
for (let i = 0; i < input.length; i++) {
  //console.log(i);
  for (let j = 0; j < vowels.length; j++) {
    //console.log(j);
    if (input[i] === vowels[j]) {
      //console.log(vowels[j]);
      resultArray.push(vowels[j])
      //console.log(resultArray);
    }
  }
  if (input[i] === 'e') {
  resultArray.push('e');
}
    if (input[i] === 'u') {
  resultArray.push('u');
}
}

//Task 12
//console.log(resultArray);

//Task 13
let resultString = resultArray.join('');
console.log(resultString.toUpperCase());
