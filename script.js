function getDivStyle(gridSize) {

    let width = 504 / gridSize;

    return {
        'min-width': `${width}px`,
        'max-width': `${width}px`,
        'min-height': `${width}px`,
        'max-height': `${width}px`,
        'border-width': '0.5px',
        'border-style': 'solid',
        'border-color': 'black',
        'box-sizing': 'border-box'
    }
}

function addPixels(gridDiv, styleFunction, gridSize) {

    for (let i = 0; i < (gridSize ** 2); i++ ) {
        // Always need to create a new element so that it can be added to the list
        let newDiv = document.createElement('div');
        Object.assign(newDiv.style, styleFunction(gridSize));
        gridDiv.appendChild(newDiv);
    }
    console.dir(gridDiv);
    return gridDiv;
}

let gridSize = 16;
let gridButton = document.querySelector('#grid-size');
let resetButton = document.querySelector('#reset');
let sketchContainer = document.querySelector('#sketch-container');

sketchContainer = addPixels(sketchContainer, getDivStyle, gridSize);

gridButton.addEventListener('click', function() {
    gridSize = window.prompt("Please choose the grid side size. The number should be betwen 1 and 64");

    let sketchContainer = document.querySelector('#sketch-container');
    // Reset the container
    sketchContainer.innerHTML = ''; 
    sketchContainer = addPixels(sketchContainer, getDivStyle, gridSize)
});


resetButton.addEventListener('click', function() {

    let sketchContainer = document.querySelector('#sketch-container');
    // Reset the container
    sketchContainer.innerHTML = '';
    sketchContainer = addPixels(sketchContainer, getDivStyle, 16);
});
