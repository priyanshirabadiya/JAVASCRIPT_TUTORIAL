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

//This can be possible only threw Variable declaration
{
    // const node2 = document.getElementById("id3");
    // {
    //     const node1 = document.getElementById("id2");
    //     function textNode1() {
    //         alert(node1.innerHTML = "this is node inner");
    //     }
    //     // textNode1();   //If we add here than it give Alert one time default
    // }
    // function textNode2() {
    //     alert(node2.innerHTML = "this is node inner");
    // }
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

// get document by tag name
{
    // const element = document.getElementsByTagName("h1");
    // console.log(element);
    // function changecolor(){
    //     for(let i = 0 ; i < element.length ; i++)
    //     {
    //         if(i==1)
    //             continue;
    //         element[i].style.color = "red";
    //     }
    // }
}


// Query selector

{
    //  document.querySelector(".demo").style.color = "red";  //In one line without onclick
    // loop is not work in this
    //  const element = document.querySelector(".demo");
    //  console.log(element);
    // function changecolor(){
    //         element.style.color = "red";
    // }

    // without onclick work
    // const element = document.querySelectorAll(".demo");
    // console.log(element);
    // function changecolor(){
    //     for(let i = 0 ; i < element.length ; i++)
    //     {
    //         if(i==0)
    //             continue;
    //         element[i].style.color = "red";
    //     }
    // }
}


// Javascript has attribute
{

    // const element = document.querySelector("p");
    // function check(){
    //     if(element.hasAttribute("name"))
    //     {
    //         alert("Yes name attribute exist!");
    //     }
    //     else{
    //         alert("not exist");
    //     }
    // }

}

// Javascript get attribute

{
    // function attr(elem){
    //     alert(elem.getAttribute("id"));
    // }
}


// Javascript set attribute
{
    // const element = document.querySelector("p");
    //     function checkAttr()
    //     {
    //         alert(element.hasAttribute("name"));
    //     }
    //     function AddAttr(){
    //         element.setAttribute("name","myparagraph");
    //         alert(element.hasAttribute("name"));
    //     }
}


// Javascript remove attribute

{
    // const element = document.getElementById("p1");
    //     element.innerHTML = "Element found!...";
    //     element.style.color = "red";
    // // const element = document.querySelector("button");
    // function remove()
    // {
    //     element.removeAttribute("id");
    // }
}


// Html object Accessible
/*
document.body
document.documnentElement...
*/

// {
//     document.getElementById("demo").innerHTML = document.body.innerHTML;
//     document.getElementById("demo").innerHTML = "skillqode";
// }

// {
//     document.getElementById("demo").innerHTML = "number of form tag:" + document.forms.length;
// }
// {
//     document.getElementById("demo-1").innerHTML = "number of form tag:" + document.images.length;
// }
// {
//     document.getElementById("demo-2").innerHTML = "number of form tag:" + document.links.length;
// }
// {
//     document.getElementById("demo3").innerHTML = "number of form tag:" + document.demo3;
// }