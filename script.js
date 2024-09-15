// script.js
const container = document.querySelector('.container');
const button = document.querySelector('#gridButton');
const blueButton = document.querySelector('#blueButton');
const randomButton = document.querySelector('#randomButton');
const eraserButton = document.querySelector('#eraserButton');


// Container width and height 960px by 960px
const containerSize = 960;

//Create grid
function createGrid(squaresPerSide) {
    //Clearing existing grid
    container.innerHTML = '';

    const squareSize = containerSize / squaresPerSide;

    container.style.width = `${containerSize}px`;
    container.style.height = `${containerSize}px`;

// Number of squares: 16x16 = 256
    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        container.appendChild(square);
    }
    applyColorListeners();
}
function randomRGB() {
    const r = Math.floor(Math.random() * 256); // Random value for Red (0-255)
    const g = Math.floor(Math.random() * 256); // Random value for Green (0-255)
    const b = Math.floor(Math.random() * 256); // Random value for Blue (0-255)
    return `rgb(${r}, ${g}, ${b})`;
}

function applyColorListeners(){
    const squares = document.querySelectorAll('.square');

    // Clear any previous event listeners
    blueButton.addEventListener('click', () => {
        squares.forEach(square => {
            square.onmouseenter = () => {
                square.style.background = 'lightblue';
            };
        });
    });

//Random RGB color
    randomButton.addEventListener('click', () => {
        squares.forEach(square => {
            let darkenAmount = 0; // Reset darken amount for each square
            square.onmouseenter = () => {
                if (darkenAmount === 0) {
                    square.style.background = randomRGB();
                }
                darkenAmount += 0.1;
                square.style.filter = `brightness(${1 - darkenAmount})`;
                if (darkenAmount >= 1) darkenAmount = 1; // Fully darkened
            };
        });
    });

    //Resets the color acts as an eraser
    eraserButton.addEventListener('click', () =>{
        squares.forEach(square => {
            square.onmouseenter = () => {
                square.style.background = 'white'; // Reset color to white
                square.style.filter = 'brightness(1)'; // Reset brightness
            };
        });
    });
}
    
button.addEventListener('click', () => {
    let squaresPerSide = prompt('Enter the number of squares per side (maximum 100):');
    
    // Convert the input to a number
    squaresPerSide = parseInt(squaresPerSide);

    // Check if input is valid
    if (squaresPerSide && squaresPerSide > 0 && squaresPerSide <= 100) {
        createGrid(squaresPerSide); // Generate new grid
    } else {
        alert('Please enter a valid number between 1 and 100.');
    }
});
// Create a default 16x16 grid on page load
createGrid(16);