const container = document.querySelector("#container");
let grid = 9;
let penColor = "black";

function updatePenColor(){
    penColor = document.querySelector("#color").value;
}

function changeColor(e){
    if(document.querySelector("#random-color").checked == true){
        let values = "0123456789ABCDEF";
        let color = "#";
        for(let i = 0; i < 6; i++){
            color += values[Math.floor(Math.random() * 16)];
        }
        e.target.style.backgroundColor = color;
    }else{
        updatePenColor();
        e.target.style.backgroundColor = penColor;
    }
    
}

function clear(){
    // let gridSquares = document.querySelectorAll(".grid-square");
    // gridSquares.forEach((gridSquare) => {
    //     gridSquare.style.backgroundColor = "white";
    // });
    grid = parseInt(prompt("How many pixels (per side)?"));
    if(grid > 128){
        alert("Too big! Grid size set to 128x128");
        grid = 128;
    }
    resetGrid(grid);
}

function resetGrid(grid){
    container.textContent = "";
    let squareSize = 100 / grid;
    for(let i = 0; i < grid*grid; i++){
        let gridSquare = document.createElement("div");
        gridSquare.setAttribute("id", "div" + (i+1));
        gridSquare.style.width = squareSize + "%";
        gridSquare.style.height = squareSize + "%";
        gridSquare.addEventListener("mouseover", changeColor);
        container.appendChild(gridSquare);
    }
}

for(let i = 0; i < 9; i++){
    let squareSize = 33.33333;
    let gridSquare = document.createElement("div");
    gridSquare.setAttribute("id", "div" + (i+1));
    gridSquare.classList.add("grid-square");
    gridSquare.style.width = squareSize + "%";
    gridSquare.style.height = squareSize + "%";
    gridSquare.addEventListener("mouseover", changeColor);
    container.appendChild(gridSquare);
}

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", clear);