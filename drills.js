const Memory = require("Memory");

class Array {
  constructor() {
    this.length = 0;
    this.ptr = memory.allocate(this.length);
  }
}

function main() {
  Array.SIZE_RATIO = 3;
  let arr = new Array();
  arr.push(3);
  arr.pop();
  arr.pop();
  arr.pop();
  console.log(arr);
}

//unify a string
function unify() {}
