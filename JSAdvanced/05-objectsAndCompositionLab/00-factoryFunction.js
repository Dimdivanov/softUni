function createRect(width, height) {
  const rect = { width, height };
  rect.getArea = () => {
    return rect.width * rect.height;
  };
  return rect;
}
let rectangle1 = createRect(4, 5);
let rectangle2 = createRect(7, 8);

console.log(rectangle1);
console.log(rectangle2);
