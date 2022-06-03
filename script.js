const easGrid = document.querySelector('#eas-grid');

easGrid.addEventListener('mouseover', e => {
    if(e.target.matches('div')) {
        console.log();
    }
})


function createDiv() {
    for (let i = 0; i < 16; i++) {
        let div = document.createElement('div');
        // div.classList.add('.grid-item')
        easGrid.append(div);
        console.log()
    }
}

createDiv()
// console.log(easGrid.childElementCount)