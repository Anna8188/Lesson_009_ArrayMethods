"use strict";
function every(arr, f) {
  for (let i = 0; i < arr.length; i++) {
    if (!f(arr[i])) {
      return false;
    }
  }
  return true;
}
/*function isBig_15(n) {
  if (n > 15) {
    return true;
  }
  return false;
}

let arr = [2, 3, 5, 1, 7];

console.log(every(arr, isBig_15));
console.log(arr.every(isBig_15));
*/
