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
// console.log(second_person.age); // output: 25


// deep  copy

const first_person = {
    name: "Jack",
    age: 24,
};

const second_person = { ...first_person };
second_person.age = 25;

console.log(first_person.age); // output: 24
console.log(second_person.age); // output: 25

