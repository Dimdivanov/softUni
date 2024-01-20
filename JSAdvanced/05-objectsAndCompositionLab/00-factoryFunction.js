function createRect(width, height) {
  const rect = { width, height };

  rect.getArea = () => {
    return rect.width * rect.height;
  };

  return rect;
}
createRect(4, 5);
