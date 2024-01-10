// rest operator - the rest of elements '...'
// spread operator - same as rest '...'

function solve(...params) {
  // ... is always rest or when destructuring object
  let largest = Math.max(...params); // ... here is spread
  console.log(largest);
}
solve(7, 11, 3);
