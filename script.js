// script.js
const container = document.querySelector('.container');
const button = document.querySelector('#gridButton');

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