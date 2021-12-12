"use strict";
function map(arr, f) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(f(arr[i]));
  }
  return newArr;
}
/*
let arr = [2, 3, 5, 1, 7];
function sum2(a) {
  return a + 2;
}

console.log(map(arr, sum2));
console.log(arr.map(sum2));
*/
