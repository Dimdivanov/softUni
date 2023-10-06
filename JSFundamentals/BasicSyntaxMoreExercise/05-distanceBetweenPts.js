function distanceBetweenPts(x1, y1, x2, y2) {
  let dinstanceX = x2 - x1;
  let distanceY = y2 - y1;
  let distance = Math.sqrt(dinstanceX * dinstanceX + distanceY * distanceY);
  console.log(distance);
}
distanceBetweenPts(2, 4, 5, 0);
distanceBetweenPts(2.34, 15.66, -13.55, -2.9985);
