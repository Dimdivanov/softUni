function matchName(input) {
  let pattern = /\b([A-Z]{1}[a-z]+) ([A-Z]{1}[a-z]+)\b/g;
  let match = input.match(pattern);
  console.log(match.join(' '));
}
matchName(
  'Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov'
);
