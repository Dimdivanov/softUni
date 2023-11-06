function exsersise(arr) {
  let dict = {};

  for (let el of arr) {
    let obj = JSON.parse(el);
    dict = Object.assign(dict, obj); //merges multiple objects into one
  }
  let sortedKeys = Object.keys(dict); //focus on the keys coffee, bus, boiler, tape..
  sortedKeys.sort((a, b) => a.localeCompare(b)); // sort

  for (let term of sortedKeys) {
    let def = dict[term];
    console.log(`Term: ${term} => Definition: ${def}`);
  }
}
exsersise([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);
