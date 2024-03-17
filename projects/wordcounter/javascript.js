let textbox = document.getElementById("textbox");   

textbox.addEventListener('input',function(){
    var txt = this.value;
    let char = txt.length;
    document.getElementById("char").innerHTML = char;
    txt = txt.trim();

    let words = txt.split(" ");
    let cleanlist = words.filter(function(ele){
        return ele != "";
    })

    document.getElementById('word').innerHTML = cleanlist.length;

})
