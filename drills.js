const Memory = require("Memory");

const MEMORY = new Memory();

class MyArray {
  constructor() {
    const INITIAL_CAPACITY = 4;

    this._capacity = INITIAL_CAPACITY;
    this._startAddress = MEMORY.allocate(INITIAL_CAPACITY);
    this.length = 0;
  }

  _resize() {
    const newStart = MEMORY.allocate(this._capacity * 2);
    MEMORY.copy(newStart, this._startAddress, this.length);
    MEMORY.free(this._startAddress);
    this._startAddress = newStart;
    this._capacity *= 2;
    console.log(this._startAddress, MEMORY.get(newStart + 3));
  }

  push(el) {
    if (this.length === this._capacity) this._resize();

    const memoryPtr = this._startAddress + this.length;
    MEMORY.set(memoryPtr, el);
    this.length++;
  }

  get(idx) {
    const memoryAddr = this._startAddress + idx;
    return MEMORY.get(memoryAddr);
  }
}

let arr = new MyArray();

for (let i = 0; i < 65; i++) {
  arr.push(i);
}

console.log(arr.length, arr._startAddress, arr._capacity, arr.get(50));
