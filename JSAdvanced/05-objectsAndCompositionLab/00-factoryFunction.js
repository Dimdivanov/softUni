//creates objects in a way that allows for encapsulation and creation of multiple instances
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
