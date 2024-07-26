let b = document.body
console.log(('first child of b is:', b.firstChild));
console.log(('first element child of b is:', b.firstElementChild));

let changC = () => {
    b.firstElementChild.style.background = "red";
}

changC();


