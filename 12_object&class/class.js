// class person{
//     constructor(name){
//         this.name = name;
//     }
//     display = function() {
//         return "hello" + " " + this.name;
//     }
// };
// let obj = new person('john');
// console.log(obj);
// console.log(obj.name);
// // console.log(obj.display);
// console.log(obj.display());


// call method

// let person = {
//     print : function(city){
//         return this.name + " " + this.surname + "\n" + city;
//     }
// }

// let viru = {
//     name : "virat",
//     surname : "kohli"
// }

// console.log(person.print.call(viru ,"surat"));





// shallow copy and deep copy

// const first_person = {
//     name: "Jack",
//     age: 24,
// };

// const second_person = first_person;
// first_person.age = 25;

// console.log(first_person.age); // output: 25
// // console.log(second_person.age); // output: 25

// const obj = {
//     anme : "cjsdi",
//     rno : 2
// }
// const obj2 = obj;
// obj2.anme = "mital";
// console.log(obj.anme);
// console.log(obj2.anme);

// shallow  copy

// const first_person = {
//     name: "Jack",
//     age: 24,
// };

// const second_person = { ...first_person };
// second_person.age = 25;

// console.log(first_person.age); // output: 24
// console.log(second_person.age); // output: 25





// class Car {
//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }
//     age(x) {
//         return x - this.year;
//     }
// }

// const date = new Date();
// let year = date.getFullYear();

// const myCar = new Car("Ford", 2014);
// console.log(`Car Name: ${myCar.name}`);
// console.log(`Car Year: ${myCar.year}`);
// console.log(`Car Age: ${myCar.age(year)} years`);


// -----------------------------------------------------

// class gadi{
//     constructor(gname , gyear){
//         this.gname = gname;
//         this.gyear = gyear;
//     }
//     difference(x){
//         return x - this.gyear;
//     }
// }

// const gdate = new Date();
// const Gyear = gdate.getFullYear();
// const mygadi = new gadi('shine',2021);

// console.log(`Name is: ${mygadi.gname} `);
// console.log(`year is: ${mygadi.gyear} `);
// console.log(`Completed years are : ${mygadi.difference(Gyear)}`);



