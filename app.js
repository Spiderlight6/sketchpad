
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

        container.appendChild(square);
    }
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

// create a function to generate random color

function randomColor(){
    let R = Math.floor(Math.random() * 256);
    let G = Math.floor(Math.random() * 256);
    let B = Math.floor(Math.random() * 256);

    let randomcolor = "rgb(" + R + "," + G + "," + B + ")"; 
    return randomcolor;
}

randomColor()