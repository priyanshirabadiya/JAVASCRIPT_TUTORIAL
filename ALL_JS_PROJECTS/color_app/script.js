let inputField = document.querySelector('#input-text');
let bodymain = document.querySelector('body');
let button = document.querySelector('.btn');

function chngecolor() {
    let inputValue = inputField.value;
    bodymain.style.backgroundColor = inputValue;
}
button.addEventListener('click', chngecolor);
