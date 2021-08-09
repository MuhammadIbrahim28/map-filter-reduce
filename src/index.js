import React from "react";
import ReactDOM from "react-dom";

var numbers = [6, 12, 15, 20, 25];
//Map create
//function double(x){
//  return x * 2;
//}
//const newnumber=numbers.map(double);
//console.log(newnumber);
// var newnumber = [];
// numbers.forEach(function (x) {
//   newnumber.push(x * 2);
// });
// console.log(newnumber);
// const newnumber=numbers.map(function(x){
// return x * 2;

//});
//console.log(newnumber);
//filter number return true
//const newnumber=numbers.filter(function(num){
//return num>10;
//})
//console.log(newnumber);
//reduce
//var newnumber = numbers.reduce(function (accumulator, currentNumber) {
//  return accumulator + currentNumber;
//});
//console.log(newnumber);
//find frist number
// var newnumber = numbers.find(function (num) {
//   return num > 10;
// });
// console.log(newnumber);
var newnumber = numbers.findIndex(function (num) {
  return num > 10;
});
console.log(newnumber);
