'use strict';

const randomNumber = Math.trunc(Math.random()*20) + 1;

let initialScore = 20;

document.querySelector('.number').textContent = randomNumber;

document.querySelector('.check').addEventListener('click',
function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess);

    if(!guess) {
        document.querySelector('.message').textContent = 'Not a valid Number!';
    }
    else if(guess == randomNumber) {
        document.querySelector('.message').textContent = 'Correct!';
        initialScore++;
        document.querySelector('.score').textContent = initialScore;
    }
    else if (guess > randomNumber) {
        if (initialScore > 1) {
        document.querySelector('.message').textContent = 'Number is too high!';
        initialScore--;
        document.querySelector('.score').textContent = initialScore;
        } else {
            document.querySelector('.message').textContent = 'You have Lost...';
            document.querySelector('.score').textContent = 0;
        }
    }
    else if (guess < randomNumber) {
        if (initialScore > 1) {
            document.querySelector('.message').textContent = 'Number is too low!';
            initialScore--;
            document.querySelector('.score').textContent = initialScore;
            } else {
                document.querySelector('.message').textContent = 'You have Lost...';
                document.querySelector('.score').textContent = 0;
            }
    };
});

