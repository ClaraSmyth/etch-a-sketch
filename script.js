const easGrid = document.querySelector('#eas-grid');

function createDiv() {
    for (let i = 0; i < 16; i++) {
        const div = document.createElement('div')
        easGrid.append(div);
    }
}

createDiv()