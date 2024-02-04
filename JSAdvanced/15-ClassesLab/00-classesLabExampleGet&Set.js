class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return 2 * this.radius;
  }

  set diameter(value) {
    this.radius = value / 2;
  }

  get area() {
    return Math.PI * this.radius ** 2;
  }
}

const myCircle = new Circle(5);

console.log(myCircle.diameter); // Използване на гетър diameter
// Резултат: 10

myCircle.diameter = 14; // Използване на сетър diameter
console.log(myCircle.radius); // Проверка на променената стойност
// Резултат: 7

console.log(myCircle.area); // Използване на гетър area
// Резултат: ~153.93804002589985
