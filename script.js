'use strict';

let randomNumber = Math.trunc(Math.random()*20) + 1;

let initialScore = 20;



document.querySelector('.check').addEventListener('click',
function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess);

    if(!guess) {
        document.querySelector('.message').textContent = 'Not a valid Number!';
    }
    //when player wins
    else if(guess == randomNumber) {
        document.querySelector('.message').textContent = 'Correct!';
        initialScore++;
        document.querySelector('.score').textContent = initialScore;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = randomNumber;
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


document.querySelector('.again').addEventListener('click', function() {
    initialScore = 20;
    randomNumber = Math.trunc(Math.random()*20) + 1;
    15
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value  = '';
    document.querySelector('.score').textContent = initialScore;
    document.querySelector('.number').textContent = '?';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

})