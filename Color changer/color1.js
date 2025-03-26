const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

buttons.forEach(button => {
    const randomColor = getRandomColor();
    button.style.backgroundColor = randomColor;

    button.addEventListener('click', function() {
        body.style.backgroundColor = randomColor;
    });
});