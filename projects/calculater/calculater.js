let string ="";

let buttons = document.querySelectorAll('.button');

let arr = Array.from(buttons);

arr.forEach(x => {
    // when someone click then arrow - element function work
    x.addEventListener('click',event => {
        if(event.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(event.target.innerHTML == 'AC'){
            string = "";
            document.querySelector('input').value = string;
        }
        else if(event.target.innerHTML == 'C'){
            string = string.substring(0,string.length - 1);
            document.querySelector('input').value = string;
        }
        else{
            console.log(event.target);
            string = string + event.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})
