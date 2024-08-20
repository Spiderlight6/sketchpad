
const container = document.querySelector("#container")

const grid = document.createElement("div")
grid.setAttribute("class", "square")
grid.setAttribute("style", "background-Color: red; height: 20px; width: 20px; border: 2px solid black; ")


//container.appendChild(grid)

function divCreator(num){

    let i = 0
    while(i <num){
        let myDiv 
        myDiv = document.createElement("div")
        myDiv.setAttribute("class", "square")
        myDiv.setAttribute("style", " height: 20px; width: 20px; border: 2px solid black; ")
        container.appendChild(myDiv)
        
        i++
    }

    /*
    for(let i = 0; i < num; i++){
        num = document.createElement("div")
        num.setAttribute("class", "square")
        num.setAttribute("style", "background-Color: green; height: 20px; width: 20px; border: 2px solid black; ")
        container.appendChild(num)

        
    }
    */
}

divCreator(256)

/*
const grid1 = document.createElement("div")
grid1.setAttribute("class", "square")
grid1.setAttribute("style", "background-color: green; height: 20px; width: 20px; border: 2px solid black; ")


const grid2 = document.createElement("div")
grid2.setAttribute("class", "square")
grid2.setAttribute("style", "background-color: blue; height: 20px; width: 20px; border: 2px solid black; ")
*/




