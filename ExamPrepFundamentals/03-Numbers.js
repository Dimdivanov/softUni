function numbers(str) {
  let nums = str.split(' ').map(Number);
  let avg = nums.reduce((acc, val) => acc + val) / nums.length;
  let topNums = nums
    .filter((num) => num > avg) //филтрирай числата които само по големи от средно аритметичното
    .sort((a, b) => b - a) // сортирай ги по големина (обърнати)
    .slice(0, 5); // вземи само тези елементи

  if (topNums.length == 0) {
    console.log('No');
  } else {
    console.log(topNums.join(' '));
  }
}
numbers('10 20 30 40 50');
