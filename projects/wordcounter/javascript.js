let textbox = document.getElementById("textbox");   

textbox.addEventListener('input',function(){
    var txt = this.value;
    let char = txt.length;
    txt = txt.trim();
    document.getElementById("char").innerHTML = char;


    let words = txt.split(" ");
    document.getElementById('word').innerHTML = words.length;

})
