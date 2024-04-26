const addOne = (function () {
  let counter = 0;
  return function () {
    console.log(++counter);
  };
})();

addOne();
addOne();
addOne();
addOne();
