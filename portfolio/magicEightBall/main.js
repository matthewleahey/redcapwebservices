// Task 1
const userName = 'Matthew';

// Task 2
userName ? console.log(`Hello ${userName}!`) : console.log('Hello!');

function getPrediction() {
    // Task 3
    let userQuestion = '';

    // Task 4
    userQuestion = 'Will this work without extra help?';
    console.log(`Magic Eight Ball, ${userQuestion}`);

    // Task 5
    let randomNumber = Math.floor(Math.random() * 8);

    // Task 6
    let eightBall = '';

    // Task 7
    switch (randomNumber) {
        case 0:
            eightBall = 'It is certain';
            break;
        case 1:
            eightBall = 'It is decidedly so';
            break;
        case 2:
            eightBall = 'Reply hazy try again';
            break;
        case 3:
            eightBall = 'Cannot predict now';
            break;
        case 4:
            eightBall = 'Do not count on it';
            break;
        case 5:
            eightBall = 'My sources say no';
            break;
        case 6:
            eightBall = 'Outlook not so good';
            break;
        case 7:
            eightBall = 'Signs point to yes';
            break;
    }

    // Task 8
    console.log(eightBall);
    document.getElementById('result').innerText = eightBall;
}
