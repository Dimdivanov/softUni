(function () {
  Array.prototype.last = function () {
    return this[this.length - 1];
  };
  Array.prototype.skip = function (n) {
    n = Number(n);
    let newArray = [];
    for (let i = n; i < this.length; i++) {
      let el = this[i];
      newArray.push(el);
    }
    return newArray;
  };
  Array.prototype.take = function (n) {
    n = Number(n);
    let newArray = [];
    for (let i = 0; i < n; i++) {
      let el = this[i];
      newArray.push(el);
    }
    return newArray;
  };
  Array.prototype.sum = function () {
    return this.reduce((accumulator, curValue) => accumulator + curValue);
  };
  Array.prototype.average = function () {
    return (
      this.reduce((accumulator, curValue) => accumulator + curValue) /
      this.length
    );
  };
})();

let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(myArr.last());
console.log(myArr.skip(2));
console.log(myArr.take(2));
console.log(myArr.sum());
console.log(myArr.average());
