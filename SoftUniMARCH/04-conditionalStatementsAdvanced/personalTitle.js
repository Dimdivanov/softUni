function personalTitles(input) {
  let personAge = Number(input[0]);
  let personGender = input[1];

  if (personAge >= 16) {
    if (personGender === 'm') {
      console.log('Mr.');
    } else {
      console.log('Ms.');
    }
  } else {
    if (personGender === 'm') {
      console.log('Master');
    } else {
      console.log('Miss');
    }
  }
}
personalTitles(['14', 'f']);
