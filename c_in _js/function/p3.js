// (function()
// {
//     let netbill;
//     let rate = prompt("enter rate:");
//     let qty = prompt("enter qty:");
//     amt = rate*qty;
//     let gst = amt * 18 / 100;
//     let dis = amt * 5 / 100;
//     let billamt = amt - dis;
//     netbill = billamt;
//     if(billamt > 5000)
//     {
//         netbill = billamt + gst;
//     }
//     console.log(`Rate is:${rate}`);
//     console.log(`Quentity is:${qty}`);
//     console.log(`Total amt is:${amt}`);
//     console.log(`Amt after dicount is: ${parseInt(billamt)}`);
//     console.log(`Total bill after gst is:${parseInt(netbill)}`);
// }
// )();








// -----------------------------------------using  Arrow function

// var gst;
// let amt = prompt("enter Amt:")
// let qty = prompt("enter qty:")
// let tamt = (amt , qty) => qty * amt;
// console.log(`Total amount is: ${tamt(amt,qty)}`);
// let dis = (tamt) => tamt * 10 / 100;
// let ftotal = (tamt , dis) => tamt - dis;
// if(ftotal>1000)
// {
//     gst = (ftotal) => ftotal * 12 / 100;
// }
// let Grandtotl = (ftotal , gst) => ftotal + gst;
// console.log(`Amount is ${amt}`);
// console.log(`Quentity is ${qty}`);
// console.log(`Total amount is: ${ftotal(tamt,dis)}`);
// console.log(`Total amount is: ${Grandtotl(ftotal,gst)}`);




// gpt
// let amt = prompt("Enter Amount:");
// let qty = prompt("Enter Quantity:");

// let tamt = (amt, qty) => qty * amt;
// console.log(`Amount is ${amt}`);
// console.log(`Quantity is ${qty}`);
// console.log(`Total amount is: ${tamt(amt, qty)}`);

// let dis = (tamt) => tamt * 10 / 100;
// console.log(`Discount is: ${dis(tamt(amt, qty))}`);

// let ftotal = (tamt, discount) => tamt - discount;
// console.log(`Final Total is: ${ftotal(tamt(amt, qty), dis(tamt(amt, qty)))}`);

// let gst = (ftotal) => ftotal * 12 / 100;
// if (ftotal(tamt(amt, qty), dis(tamt(amt, qty))) > 1000) {
//     console.log(`GST is: ${gst(ftotal(tamt(amt, qty), dis(tamt(amt, qty))))}`);
// }

// let Grandtotal = (ftotal, gst) => ftotal + gst;
// console.log(`Grand Total is: ${Grandtotal(ftotal(tamt(amt, qty), dis(tamt(amt, qty))), gst(ftotal(tamt(amt, qty), dis(tamt(amt, qty)))))}`);


// second--------------------------
// const students = [
//     {
//       name: "John Doe",
//       math: 90,
//       science: 85,
//       english: 95
//     },
//     {
//       name: "Jane Doe",
//       math: 80,
//       science: 90,
//       english: 92
//     },
//     {
//       name: "Peter Parker",
//       math: 95,
//       science: 92,
//       english: 98
//     }
//   ];
  
//   const calculateAverage = (student) => {
//     const total = student.math + student.science + student.english;
//     const average = total / 3;
//     return average;
//   };
  
//   const results = students.map(calculateAverage);
  
//   console.log(results);