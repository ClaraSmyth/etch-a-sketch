const easGrid = document.querySelector('#eas-grid');
const gridSize = document.querySelector('#eas-size');
const colorPicker = document.querySelector('#color-picker');
const buttons = document.querySelectorAll('button')
let color = colorPicker.value;

// Sets default grid size
easGrid.style.gridTemplateColumns = `repeat(${gridSize.value}, 1fr)`;

// Hover effect
easGrid.addEventListener('mouseover', e => {
    if(e.target.matches('div')) {
        e.target.style.backgroundColor = color;
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

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id == 'btn-color') {
            color = colorPicker.value;
        } else if (button.id == 'btn-erasor') {
            color = 'white';
        } else if (button.id == 'btn-rainbow') {
            color = 'purple';
        };
    });
});

createDivs()
console.log()