const newGridBtn = document.querySelector('.newGrid')
newGridBtn.addEventListener('click', getGridDimensions)
const container = document.querySelector('.grid')

let hovercolor = 'grey'

document.addEventListener('mousedown', () => {hovercolor = 'white';})
document.addEventListener('mouseup', () => {hovercolor = 'grey'})


function makeGrid(length){
container.style.gridTemplateColumns = `repeat(${length}, 1fr)`;
let numSquares = length ** 2;
removeGrid();
for (let i = 0; i < numSquares; i++){  
    const newDiv = document.createElement('div');
    newDiv.classList.add('box');
    newDiv.addEventListener('mouseover', changeColor)
    container.appendChild(newDiv);
}
}

function removeGrid(){
    let boxes = document.querySelectorAll('.box')
    boxes.forEach(box => {
        container.removeChild(box);
    });
}

function changeColor(e){
    const box = e.target;
    box.style.backgroundColor = hovercolor;
}

function getGridDimensions(){
    let newSideLength = prompt('Choose new grid size: what is the new length of the sides?')
    if (newSideLength > 0 && newSideLength <= 100) {
        makeGrid(newSideLength);
    } else if (newSideLength) {
        alert('length must be between 1 and 100!');
        getGridDimensions();
    }
}

makeGrid(16)