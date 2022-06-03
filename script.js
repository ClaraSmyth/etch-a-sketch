const easGrid = document.querySelector('#eas-grid');
const gridSize = document.querySelector('#eas-size');
const colorPicker = document.querySelector('#color-picker');
const buttons = document.querySelectorAll('button')
let color = colorPicker.value;
let randomColor = false;

// Updates the color
colorPicker.addEventListener('change', () => color = colorPicker.value);

// Sets default grid size
easGrid.style.gridTemplateColumns = `repeat(${gridSize.value}, 1fr)`;

// Hover effect
easGrid.addEventListener('mouseover', e => {
    if(e.target.matches('div')) {
        e.target.style.backgroundColor = color;
        if (random === true)
            updateColor();
    }
});

// Creates the divs on the page
function createDivs() {
    for (let i = 0; i < Math.pow(gridSize.value, 2); i++) {
        const div = document.createElement('div');
        easGrid.append(div);
    }
}

// Adjusts the grid size
gridSize.addEventListener('click', () => {
    easGrid.replaceChildren();
    easGrid.style.gridTemplateColumns = `repeat(${gridSize.value}, 1fr)`;
    createDivs();
});

// Buttons
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id == 'btn-color') {
            color = colorPicker.value;
            random = false;
        } else if (button.id == 'btn-erasor') {
            color = 'white';
            random = false;
        } else if (button.id == 'btn-rainbow') {
            random = true;
        };
    });
});

// Selects the random colors
function updateColor() {
    color = `hsl(${Math.random() * 360}, 100%, 50%)`
}

createDivs()
console.log()