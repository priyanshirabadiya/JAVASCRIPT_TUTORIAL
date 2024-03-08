// Document Object Model in Javascript
// what is dom object model(DOM)


// javascript getelementbyID

{
    // function findElement()
    {
        // const element = document.getElementById("id1");
        // element.innerHTML = "Element found!...";
        // element.style.color = "red";
        // document.getElementById("id2").innerHTML = "Hello world...!"
        // document.getElementById("id2").style.color = "pink";
    }
}

{
    // function findElement()
    // {
    // const element = document.getElementById("id1");
    // element.innerHTML = "Textes...";
    // element.style.color = "red";

    // document.getElementById("id2").innerHTML = "hello world...".style.color = "red";
    // }
}
//Do this throw Variable declaration
{
    const node2 = document.getElementById("id3");
    {
        const node1 = document.getElementById("id2");
        function textNode1() {
            alert(node1.innerHTML = "this is node inner");
        }
        // textNode1();   //If we add here than it give Alert one time default
    }
    function textNode2() {
        alert(node2.innerHTML = "this is node inner");
    }
    // textNode2();

}





// document.getElementById("id1").innerHTML = "ALERT SHOW...";
// }

// get elementby tag name
{

    // const elements = document.getElementsByClassName("blue");
    // console.log(elements);

    // function changecolor(){
    //     for(let i = 0 ; i < elements.length ; i++)
    //         elements[i].style.color = "pink";
    // }

}