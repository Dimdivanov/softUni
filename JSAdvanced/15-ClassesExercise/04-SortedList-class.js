class List {
  constructor() {
    this.arr = [].sort((a, b) => a - b);
    this.size = this.arr.length;
  }
  add(element) {
    this.arr.push(element);
    this.arr.sort((a, b) => a - b);
    this.size++;
    return;
  }
  remove(index) {
    if (index < 0 || index >= this.arr.length) {
      throw new Error("Index doesn't exist");
    } else {
      this.arr.splice(index, 1);
      this.size--;
      return;
    }
  }
  get(index) {
    if (index < 0 || index >= this.arr.length) {
      throw new Error("Index doesn't exist");
    } else {
      return this.arr[index];
    }
  }
}
let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
