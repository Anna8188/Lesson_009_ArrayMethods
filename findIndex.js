"use strict";
let arr = [3, 8, 90, 11];
function finedIndex(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
}
//console.log(finedIndex(arr, 90));
