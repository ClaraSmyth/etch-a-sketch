let easGrid = document.querySelector('#eas-grid');
let gridSize = document.querySelector('#eas-size')
easGrid.style.gridTemplateColumns = `repeat(${gridSize.value}, 1fr)`;

// Hover effect
easGrid.addEventListener('mouseover', e => {
    if(e.target.matches('div')) {
        e.target.style.backgroundColor = 'red';
    }
});


// Creates the divs on the page
function createDivs() {
    for (let i = 0; i < Math.pow(gridSize.value, 2); i++) {
        const div = document.createElement('div');
        easGrid.append(div);
    }
}

gridSize.addEventListener('click', () => {
    easGrid.replaceChildren();
    easGrid.style.gridTemplateColumns = `repeat(${gridSize.value}, 1fr)`;
    createDivs();
});


createDivs()
console.log(gridSize.value)
// console.log(easGrid.childElementCount)