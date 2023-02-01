const toggle = document.querySelector('#switch');
const body = document.querySelector('body');

toggle.onchange = trocaDeTema;

function trocaDeTema() {

    if(this.checked) {
        body.className = body.className.replace('dark-mode', 'light-mode');
    } else {
        body.className = body.className.replace('light-mode', 'dark-mode');
    };
};
