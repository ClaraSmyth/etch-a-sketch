let easGrid = document.querySelector('#eas-grid');
let gridSize = document.querySelector('#eas-size')

// Hover effect
easGrid.addEventListener('mouseover', e => {
    if(e.target.matches('div')) {
        e.target.style.backgroundColor = 'red';
    }
});


// Creates the divs on the page
function createDivs() {
    for (let i = 0; i < 16; i++) {
        const div = document.createElement('div');
        easGrid.append(div);
    }
}

gridSize.addEventListener('click', () => {
    easGrid.style.gridTemplateColumns = `repeat(${gridSize.value}, 1fr)`;
});

createDivs()
// console.log(easGrid.childElementCount)