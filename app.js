const checkbox = document.querySelector('#switch');
const body = document.querySelector('body');

checkbox.onchange = trocaTema;

function trocaTema() {
    if(this.checked) {
        body.className = body.className.replace('dark-mode', '');
        body.classList.add('light-mode');
    } else {
        body.className = body.className.replace('light-mode', '');
        body.classList.add('dark-mode');
    };
};
