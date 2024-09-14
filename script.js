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

    let darkenAmount = 0;
    // Event Listener for hover effect
    // square.addEventListener('mouseenter', () => {
    //     square.style.background = 'lightblue';
    // });
    
    square.addEventListener('mouseenter', () => {
            if (darkenAmount === 0) {
                // First interaction: set a random RGB color
                square.style.backgroundColor = randomRGB();
            }

            darkenAmount += 0.1; // Increase darkening by 10% per hover
            square.style.filter = `brightness(${1 - darkenAmount})`; // Reduce brightness

            if (darkenAmount >= 1) {
                darkenAmount = 1; // Cap at fully dark
            }
        });
    // //Resets the color
    // square.addEventListener('mouseleave', () => {
    //     square.style.backgroundColor = 'white';
    // });
    
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

function randomRGB() {
    const r = Math.floor(Math.random() * 256); // Random value for Red (0-255)
    const g = Math.floor(Math.random() * 256); // Random value for Green (0-255)
    const b = Math.floor(Math.random() * 256); // Random value for Blue (0-255)
    return `rgb(${r}, ${g}, ${b})`;
}
// Create a default 16x16 grid on page load
createGrid(16);