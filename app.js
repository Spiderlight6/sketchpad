
const container = document.querySelector("#container");
const button = document.querySelector("#button");
const containerSize = 900;

function createGrid(squaresPerSide) {
    // Clear any existing squares
    container.innerHTML = '';
    
    // Calculate the size of each square
    const squareSize = containerSize / squaresPerSide;

    // Create the grid
    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;


        // Add an event listener to change the color on hover
        square.addEventListener('mouseover', () => {
            const randomColor = generateRandomColor();
            square.style.backgroundColor = randomColor;
        });


        container.appendChild(square);
    }

}


// Function to generate random RGB color
function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

createGrid(16);


// changing the number of squares per side 

button.addEventListener("click", () =>{
    let newSize = parseInt(prompt("Enter the number of squares per side (1, 100) "), 10);
    if (newSize > 0 && newSize <= 100){
        createGrid(newSize);
    }
    else{
        alert("Please enter a number between 1 and 100");
    }
})