// const arr = [1,2,3,'hello' , true , false];
// console.log(arr);
// console.log(arr[2]);
// console.log(arr.length);


// array methods

// const data = [11,22,33,44,55,66];

// push method -> add element in last
// var p = data.push(77);
// data.push(78);
// console.log(data);
// console.log(data.push()); //not work

// pop method -> delete last element
// data.pop()
// console.log(data);

// shift and unshift


// unshift -> insert record at first position
// shift   -> first delete -> you might write more than 1 time if you want to delete more than one record 
// data.unshift(110);
// data.unshift(200,56,23);
// data.shift();
// data.shift();
// data.shift();
// data.shift();
// console.log(data);

// concat

// let arr = ['skill' , 'Qode'];
// console.log(arr);
// console.log(data.concat(arr , 'hello' , 12 , 45 , 56));
// console.log(data.concat(arr , ['hello'] , [12 , 45 , 56]));


// reverese
// const data = [11,22,33,568,44,55,125,66];
// console.log(data.reverse());


// sort method

// let txt = [88 , 26 , 11 , 13 , 44 , 22 , 15 , 9 ]; // It make to revese using 1 , 2 , 3 ...9 that's why 9 is at last
// let txt = [88 , 266 , 11 , 133 , 44 , 22 , 155 , 9 ];
// let a = txt.sort((a,b)=>a-b);
// console.log(a);


// let str = ["bdsa" , 'hello' , 'Apple' , 'banana'];
// console.log(str.sort());

// console.log(Math.max.apply(null,txt));
// console.log(Math.min.apply(null,txt));

// slice
// txt na main array na data ma koi farak padse nai and only slice part j output ma aapse 
// a = txt.slice(2,5);
// console.log(a);
// console.log(txt.slice(2,6));


// splice 2 pchi thi 5 indexs count krshe and splice valo part j output ma aapshe
// console.log(txt.splice(2,4, 'hello' ,'mam'));  //[11, 133, 44, 22]
// console.log(txt);


