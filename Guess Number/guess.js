const random = Math.floor(Math.random() * 100) + 1;
const submit = document.querySelector('#subt');
const input = document.querySelector('#guess');
const attempt = document.querySelector('#attempts');
const message = document.querySelector('#message');
const clue = document.querySelector('.lowOrHi');

let guessCount = [];
let numGuess = 0;
let play = true;

if (play) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(input.value);

        if (validate(guess)) {
            return;
        }

        guessCount.push(guess);
        numGuess++;

        displayGuess(guess);
        checkGuess(guess);
    });
}

function validate(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number');
        return true;
    }
    if (guess < 1 || guess > 100) {
        alert('Please enter a number between 1 and 100');
        return true;
    }
    if (guessCount.includes(guess)) {
        alert('You have already guessed this number');
        return true;
    }
    if (guessCount.length >= 10) {
        alert('You have reached the maximum number of attempts');
        endGame(false);
        return true;
    }
    return false;
}

function checkGuess(guess) {
    if (guess === random) {
        message.textContent = `Congratulations! You guessed the correct number: ${random}`;
        message.style.color = 'green';
        clue.style.display = 'none';
        endGame(true);
    } else {
        if (guess < random) {
            clue.textContent = 'Last guess was too low!';
        } else {
            clue.textContent = 'Last guess was too high!';
        }
        clue.style.color = 'yellow';
    }
}

function displayGuess(guess) {
    if (numGuess === 1) {
        attempt.textContent = 'Previous guesses: ';
    }
    attempt.textContent += `${guess} `;
}

function endGame(won) {
    play = false;
    input.disabled = true;
    submit.disabled = true;

    if (!won) {
        message.textContent = `Game over! The correct number was ${random}.`;
        message.style.color = 'red';
    }
}

function resetGame() {
    play = true;
    guessCount = [];
    numGuess = 0;
    input.disabled = false;
    submit.disabled = false;
    input.value = '';
    attempt.textContent = 'Attempts: 0';
    message.textContent = '';
    clue.textContent = '';
    random = Math.floor(Math.random() * 100) + 1;
}