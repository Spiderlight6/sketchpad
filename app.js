
const container = document.querySelector("#container");


// number of grid (Grid Size)
const girdSize = 16;   // later we will take user input to set the value.


const containerSize = 500;

// set the size of the square divs 
const squareSize = containerSize / girdSize; // they should have equal height and width

for(let i = 0; i < girdSize * girdSize; i++){
    const squareDivs = document.createElement("div");
    squareDivs.setAttribute("class", "square");


    // Set the size of the square divs dynamically 
    squareDivs.style.width = `${squareSize}`
    squareDivs.style.height = `${squareSize}`
    

    // Add the square divs into the container 
    container.appendChild(squareDivs)
}



