const easGrid = document.querySelector('#eas-grid');

easGrid.addEventListener('mouseover', e => {
    if(e.target.matches('div')) {
        e.target.style.backgroundColor = 'red';
    }
});

function createDiv() {
    for (let i = 0; i < 16; i++) {
        let div = document.createElement('div');
        easGrid.append(div);
    }
}

createDiv()
// console.log(easGrid.childElementCount)