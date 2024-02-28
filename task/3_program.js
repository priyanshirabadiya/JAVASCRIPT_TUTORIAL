// var str = "the quick brown fox";
// var m = str.split(" ");
// console.log(m);
// var newarr = [];
// for(var i = 0 ; i < m.length ; i++)
// {
//     console.log(newarr.push(m[i].charAt[0].toUppercase()+ m[i].slice(1)).join(''));
// }
// console.log(newarr.join(' '));


function uppercase(str) {
    var array1 = str.split(' ');
    console.log(array1);
    var newarray1 = [];
    for (var x = 0; x < array1.length; x++) {
      newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
    }
    return newarray1.join(' ');
  }
  console.log(uppercase("the quick brown fox"));



