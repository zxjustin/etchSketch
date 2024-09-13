// script.js
const container = document.querySelector('.container');

// Number of squares: 16x16 = 256
for (let i = 0; i < 256; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    // Event Listener for hover effect
    square.addEventListener('mouseenter', () => {
        square.style.background = 'lightblue';
    });
    //Resets the color
    square.addEventListener('mouseleave', () => {
        square.style.backgroundColor = 'white';
    });
    
    container.appendChild(square);
}