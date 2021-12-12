"use strict";
const animals = ["ant", "bison", "camel", "duck", "elephant"];
function fakeSlice(arr, n, m) {
  let newArr = [];
  if (m == undefined) {
    m = arr.length;
  }
  if (m < 0 && n < 0) {
    for (let i = arr.length + n; i < arr.length + m; i++) {
      newArr.push(arr[i]);
    }
    return newArr;
  }
  if (m < 0) {
    for (let i = n; i <= m * -1; i++) {
      newArr.push(arr[i]);
    }
    return newArr;
  } else {
    if (n < 0) {
      n = arr.length + n;
      m = arr.length;
    }
    for (let i = n; i < m; i++) {
      newArr.push(arr[i]);
    }
    return newArr;
  }
}
//console.log(fakeSlice(animals, 2)); //[ 'camel', 'duck', 'elephant' ]
//console.log(animals.slice(2)); //[ 'camel', 'duck', 'elephant' ]
//console.log(fakeSlice(animals, 1, 3)); //[ 'bison', 'camel' ]
//console.log(animals.slice(1, 3)); //[ 'bison', 'camel' ]
//console.log(fakeSlice(animals, -3, -1)); //[ 'camel', 'duck' ]
//console.log(animals.slice(-3, -1)); //[ 'camel', 'duck' ]
//console.log(fakeSlice(animals,-1)); //[ 'elephant' ]
//console.log(animals.slice(-1)); //[ 'elephant' ]
