const container = document.querySelector('.grid')

for (let i = 0; i < 256; i++){
    const newDiv = document.createElement('div');
    newDiv.classList.add('box');
    container.appendChild(newDiv);
}