"use strict;";
const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8, 9];
function concat(arr1, arr2) {
  let arr3 = arr1;
  let long = arr3.length;
  for (let i = 0; i < arr2.length; i++) {
    arr3[long + i] = arr2[i];
  }
  return arr3;
}
//console.log(concat([1, 2, 3, 4], [5, 6, 7, 8, 9]));
