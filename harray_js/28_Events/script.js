// let a = document.getElementsByClassName('container')[0];

// a.onclick = () => {
//     let b = document.getElementsByClassName('container')[0].innerHTML = "hello world"
// }


// <!-- le-2 -->
// var btn = e.target;
// var btn_id = btn.id;
// var btn_name  = btn.textContext; 
// var btn_class = btn.className;


// function objects might be same ex : x,y function
let x = function (e) {
    console.log(e.target);
    console.log(e.type);
    alert("hellp1");
}

let y = function (e) {
    alert("hellp2");
}

btn.addEventListener('click', x)

// btn.addEventListener('click', y)
// let a = prompt("enter num")

// if (a == '2') {
//     btn.removeEventListener('click', x);
// }

