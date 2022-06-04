const easGrid = document.querySelector('#eas-grid');
const gridSize = document.querySelector('#eas-size');
const colorPicker = document.querySelector('#color-picker');
const buttons = document.querySelectorAll('button')
const sliderLabel = document.querySelectorAll('#slider-label')
let color = colorPicker.value;
let random = false;

// Sets default grid size
easGrid.style.gridTemplateColumns = `repeat(${gridSize.value}, 1fr)`;

// Creates the divs on the page
function createDivs() {
    for (let i = 0; i < Math.pow(gridSize.value, 2); i++) {
        const div = document.createElement('div');
        easGrid.append(div);
    }
}

// Hover effect
easGrid.addEventListener('mouseover', e => {
    if(e.target.matches('div')) {
        e.target.style.backgroundColor = color;
        if (random === true)
            updateColor();
    }
});

// Slider adjusts the grid size
gridSize.addEventListener('click', () => {
    easGrid.replaceChildren();
    easGrid.style.gridTemplateColumns = `repeat(${gridSize.value}, 1fr)`;
    updateText();
    createDivs();
});

// Updates the grid size labels on the page
function updateText() {
    sliderLabel.forEach((label) => {
        label.innerText = gridSize.value;
    });
}

// Updates the color when selected on color picker
colorPicker.addEventListener('change', () => color = colorPicker.value);

// Buttons
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id == 'btn-color') {
            color = colorPicker.value;
            random = false;
        } else if (button.id == 'btn-eraser') {
            color = 'white';
            random = false;
        } else if (button.id == 'btn-rainbow') {
            random = true;
        } else {
            easGrid.replaceChildren();
            easGrid.style.gridTemplateColumns = `repeat(${gridSize.value}, 1fr)`;
            createDivs();
        }
    });
});

// Selects the random colors
function updateColor() {
    color = `hsl(${Math.random() * 360}, 100%, 50%)`
}

createDivs()
updateText()