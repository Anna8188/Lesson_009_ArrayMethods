"use strict;";
function callBack(item) {
  console.log(item);
}
function forEach(arr, f) {
  for (let i = 0; i < arr.length; i++) {
    f(arr[i]);
  }
}

//forEach([1, 2, 3], callBack);
