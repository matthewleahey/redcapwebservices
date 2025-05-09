// Task 1
let input = 'Listen to the whale';

// Task 2
const vowels = ['a', 'e', 'i', 'o', 'u'];

// Task 3
let resultArray = [];

function translateWhale() {
    input = document.getElementById('userInput').value;
    resultArray = [];

    // Tasks 4 -
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (input[i] === vowels[j]) {
                resultArray.push(vowels[j]);
            }
        }
        if (input[i] === 'e') {
            resultArray.push('e');
        }
        if (input[i] === 'u') {
            resultArray.push('u');
        }
    }

    // Task 13
    let resultString = resultArray.join('');
    document.getElementById('result').innerText = resultString.toUpperCase();
    console.log(resultString.toUpperCase());
}
