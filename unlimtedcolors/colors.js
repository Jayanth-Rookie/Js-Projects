const randomVibrantColor = function () {
    let hue = Math.floor(Math.random() * 360); 
    let saturation = 90 + Math.random() * 10; 
    let lightness = 50 + Math.random() * 10; 
    
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`; 
}

let inter;

const change = function () {
    if (inter) return;
    
    inter = setInterval(() => {
        let newColor = randomVibrantColor();
        document.body.style.backgroundColor = newColor;
    }, 1000);
}

const stopchange = function () {
    clearInterval(inter);
    inter = null;
}

document.querySelector('#start').addEventListener('click', change);
document.querySelector('#stop').addEventListener('click', stopchange);
