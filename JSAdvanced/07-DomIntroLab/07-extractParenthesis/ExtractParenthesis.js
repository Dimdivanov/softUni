function extract(elementId) {
  let contentRef = document.getElementById(elementId).textContent;
  let pattern = /\((.*?)\)/g;
  let result = [];

  let match = contentRef.match(pattern);
  for (let el of match) {
    result.push(el);
  }
  return result.join('; ');
}
