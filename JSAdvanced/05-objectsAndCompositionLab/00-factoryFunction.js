//creates objects and behavior in a way that allows
//for encapsulation and creation of multiple instances
function createRect(width, height) {
  const rect = { width, height }; //creates an object
  //creates behavior
  rect.getArea = () => {
    return rect.width * rect.height;
  };
  return rect;
}
let rectangle1 = createRect(4, 5); //to avoid using constructor function and 'new' keyword
let rectangle2 = createRect(7, 8);

console.log(rectangle1);
console.log(rectangle2);

//Example 2
/* function factory(library, orders) {
const result = [];
for (let order of orders) {
// Create a copy of the 'template' object from the current order
const current = Object.assign({}, order.template);
for (let part of order.parts) {
current[part] = library[part];
}
result.push(current);
}
return result;
} */
