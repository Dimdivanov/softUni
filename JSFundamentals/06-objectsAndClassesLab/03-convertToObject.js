function convert(string) {
  let converted = JSON.parse(string);

  let object = Object.entries(converted);
  for (let [key, value] of object) {
    console.log(`${key}: ${value}`);
  }
}
convert('{"name": "George", "age": 40, "town": "Sofia"}');
