// script.js
const container = document.querySelector('.container');

// Number of squares: 16x16 = 256
for (let i = 0; i < 256; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
}