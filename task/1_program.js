(function ()
{
    var a = 123456;
    var temp;
    var rev = 0;
    while(a!=0)
    {
        temp = a % 10;
        rev = rev * 10 + temp;
        a = parseInt(a / 10);
    }
    console.log(rev);
})();


// (function()
// {
//     let a , x , b , j , m;
//     a = 123456;
//     x = a.toString();
//     b = x.split("");
//     b.reverse();
//     j = m.join("");
//     console.log(parseInt(j));
// })