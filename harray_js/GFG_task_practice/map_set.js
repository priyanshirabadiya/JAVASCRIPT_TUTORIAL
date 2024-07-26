
// let myset = new Set();

// myset.add(1);
// myset.add(2);
// myset.add(3);
// myset.add(4);
// myset.add(5);

// console.log(myset)

// let arr = []

// for(let ele in myset){
//     arr.push(ele);
// }

// myset.forEach((ele) => {
//     arr.push(ele)
// })

// console.log(arr);



// let obj = {
//     name: "priyanshi",
//     sname : "rabadiya",
//     age : "89"
// }
// let txt = "";
// for(let ele in obj){
//     txt += obj[ele] + "<br/>" ;
// }
// console.log(txt);

// let set = new Set();

// set.add("mina");
// set.add("jinal");
// set.add("mahesh");
// let txt = ""
// for(let ele in [...set])
// {
//     txt += set[ele];
// }
// console.log(txt);
// let set = new Set();

// set.add("mina");
// set.add("jinal");
// set.add("mahesh");

// let txt = "";

// for (let ele in [...set]) {
//     txt += set[ele];
// }

// console.log(txt);





// const set = new Set([1 , 2 , 3 , 4 , 5 , 6]);
// console.log(typeof set);
// let arr = Array.from(set);
// console.log(arr);
// console.log(typeof arr);



// let Arr = ["A", "A", "Computer Science", "portal",
// 	"for", "for", "Geeks", "Geeks"];

// const setArr = new Set(Arr);

// console.log(setArr);

// function GFG_Fun() {
// 	let set = new Set(Arr);
	
// 	// console.log(JSON.stringify([...set.keys()]));
//     console.log(JSON.stringify([...set.keys()]));
// }

// GFG_Fun();





// let set1 = new Set([1, 2, 3]); 
// let set2 = new Set([4, 3, 2]); 
// let set = new Set([...set1].filter((x) => set2.has(x)))

// console.log(set);



// let sample = new Set();
// sample.add("Hello");
// sample.add("Geek");
// sample.add("How");
// sample.add("Are");
// sample.add("You");

// let data = sample.values();
// for(let val of data)
// {
//     console.log(val);
// }



// let map = new Map([
//     [1,2],
//     [2,3],
//     [5,1]
// ])


// let arr = Array.from(map);
// const serialized = JSON.stringify(arr);
// console.log(typeof serialized);
// console.log(serialized);




// let newMap = new Map()
 
// newMap.set("Cricket", "sport");
// newMap.set("Apple", "fruit");

// for(let [key,val] of newMap )
// {
//     console.log(key + " is " + val);
// }

// let map = new Map([
//     [3],
//     [6],
//     [1]
// ])

// let newMap = new Map([...map.entries()].sort());

// for(let [kry,val] of newMap){
//     console.log(kry);
// }


// function myfun(map , serchkey)
// {
//     for(const [key,val] of map.entries())
//     {
//         if(val == serchkey)
//             return key;
//     }
//     return 'not found';
// }

// let students = new Map(); 
// students.set('1', 'Diya'); 
// students.set('2', 'Arav'); 
// students.set('3', 'Priyanka'); 
// students.set('4', 'Raj'); 
  

// console.log( 
//     "Key associated with the value is: " + myfun(students, 'Arav'));


// let students = new Map(); 
// students.set('1', 'dfusd'); 
// students.set('2', 'xfg'); 
// students.set('3', 'rdty'); 
// students.set('4', 'y'); 

// let map2 = new Map();
// map2.set('1', 'Diya'); 
// map2.set('2', 'Arav'); 
// map2.set('3', 'Priyanka'); 
// map2.set('4', 'Raj'); 

// // Extract entries from the maps
// let combinedEntries = [...students.entries(), ...map2.entries()];

// // Create a new map from the combined entries
// let map3 = new Map(combinedEntries);

// console.log(map3);



let map = new Map([
    ["name" , "pru"]
]
)

console.log(map);


let set = new Set(["name", "pru"]);
console.log(set);




