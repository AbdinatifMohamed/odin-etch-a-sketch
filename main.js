const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
let defaultSize = 16;

function generateRGBNumber(){
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

function clearGrid(){
   container.innerHTML = "";
}

function changeGridSize(){
    let changesize = prompt("Enter one number (16 - 100)");
    changesize = Number(changesize);
    if (typeof changesize !== "number") { return alert("INVALID!! Put in a number.");}
    if (changesize < 16 && changesize > 100) {return alert("INVALID!!! Put a number between 16-100.");}
    generateGrid(changesize);
}

function generateGrid(size){
    clearGrid();
    for (let i = 0; i < size; i++){
        const newRow = document.createElement("div");
        newRow.classList.add("row");
        container.appendChild(newRow);
        for (let j = 0; j < size; j++){
            const newCol = document.createElement("div");
            newCol.classList.add("col");
            newCol.addEventListener("mouseenter", () => {
                newCol.style.backgroundColor = generateRGBNumber();
            });
            newRow.appendChild(newCol);
        }
    }
    
}


btn.addEventListener("click", changeGridSize);
generateGrid(defaultSize);