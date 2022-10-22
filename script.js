const container = document.querySelector('.grid')

for (let i = 0; i < 256; i++){
    const newDiv = document.createElement('div');
    newDiv.classList.add('box');
    newDiv.addEventListener('mouseover', changeColor)
    container.appendChild(newDiv);
}

let hovercolor = 'grey'

document.addEventListener('mousedown', () => {hovercolor = 'white';})
document.addEventListener('mouseup', () => {hovercolor = 'grey'})

function changeColor(e){
    const box = e.target;
    box.style.backgroundColor = hovercolor;
}
