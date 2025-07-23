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
        // Assign a new class to the div to be used later on for adding event listeners
        newDiv.classList.add('new-div');

        gridDiv.appendChild(newDiv);
    }
    return gridDiv;
}

function addColors (allDivs) {
    // Function to add colors dynamically to all divs present inside the sketch box div
    allDivs.forEach(function(div) {

        div.addEventListener('mouseover', function () {
            const red = Math.floor(Math.random() * 255);
            const green = Math.floor(Math.random() * 255);
            const blue = Math.floor(Math.random() * 255);

            div.style.backgroundColor = `rgb(${red},${green},${blue})`;
            div.style.opacity = `${Math.min(1, Number(div.style.opacity)+ 0.1)}`;
        });
    });

    return allDivs;
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
    // Change the grid size
    sketchContainer = addPixels(sketchContainer, getDivStyle, gridSize);

    // Extract all divs and add event listeners
    let allNewDivs = document.querySelectorAll('.new-div');
    allNewDivs = addColors(allNewDivs);

});


resetButton.addEventListener('click', function() {

    let sketchContainer = document.querySelector('#sketch-container');
    // Reset the container
    sketchContainer.innerHTML = '';
    sketchContainer = addPixels(sketchContainer, getDivStyle, 16);

    // Extract all divs and add event listeners
    let allNewDivs = document.querySelectorAll('.new-div');
    allNewDivs = addColors(allNewDivs);  
});

// Extract all divs and add event listeners
let allNewDivs = document.querySelectorAll('.new-div');
allNewDivs = addColors(allNewDivs);