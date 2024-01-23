function rectangle(width, height, color) {
  let rect = { width, height, color };
  rect.calcArea = () => {
    return rect.width * rect.height;
  };
  rect.color = rect.color[0].toUpperCase() + color.slice(1);
  return rect;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
