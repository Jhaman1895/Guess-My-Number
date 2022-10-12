'use strict';

let randomNumber = Math.trunc(Math.random()*20) + 1;

let initialScore = 20;
let highScore = 0;

function displayMessage(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click',
function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess);

    if(!guess) {
        displayMessage('No number entered!')
    }
    //when player wins
    else if(guess == randomNumber) {
        displayMessage('Correct!');
        document.querySelector('.score').textContent = initialScore;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = randomNumber;
        if (highScore < initialScore) {
            highScore = initialScore;
            document.querySelector('.highscore').textContent = highScore;
        }
    } else if (guess !== randomNumber) {
        if (initialScore > 1) {
            displayMessage(guess > randomNumber ? 'Number is too high!' : 'Number is too low!');
            initialScore--;
            document.querySelector('.score').textContent = initialScore;
        } else {
            document.querySelector('.message').textContent = 'You have lost...';
            document.querySelector('.score').textContent = 0;
        }
    }});

    // else if (guess > randomNumber) {
    //     if (initialScore > 1) {
    //     document.querySelector('.message').textContent = 'Number is too high!';
    //     initialScore--;
    //     document.querySelector('.score').textContent = initialScore;
    //     } else {
    //         document.querySelector('.message').textContent = 'You have Lost...';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
    // else if (guess < randomNumber) {
    //     if (initialScore > 1) {
    //         document.querySelector('.message').textContent = 'Number is too low!';
    //         initialScore--;
    //         document.querySelector('.score').textContent = initialScore;
    //         } else {
    //             document.querySelector('.message').textContent = 'You have Lost...';
    //             document.querySelector('.score').textContent = 0;
    //         }
    // };



document.querySelector('.again').addEventListener('click', function() {
    initialScore = 20;
    randomNumber = Math.trunc(Math.random()*20) + 1;
    15
    displayMessage('Start guessing...');
    document.querySelector('.guess').value  = '';
    document.querySelector('.score').textContent = initialScore;
    document.querySelector('.number').textContent = '?';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

});