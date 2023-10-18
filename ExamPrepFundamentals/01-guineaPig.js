function guineaPig(input) {
  //parse the input
  //-food, hay, cover
  //-pigs weight
  // calculate everything in grams *1000
  let food = Number(input[0]) * 1000;
  let hay = Number(input[1]) * 1000;
  let cover = Number(input[2]) * 1000;
  let pigsWeight = Number(input[3]) * 1000;

  //- for 30 days
  //- 300gr of food every day
  //- every 2nd day %5 of rest of the food
  //- every 3rd day cover with a quantity of 1/3 of its weight
  for (let i = 1; i <= 30; i++) {
    food -= 300;
    if (i % 2 == 0) {
      hay -= food * 0.05;
    }
    if (i % 3 == 0) {
      cover -= pigsWeight * (1 / 3);
    }
  }

  if (food < 0 || hay < 0 || cover < 0) {
    console.log('Merry must go to the pet store!');
    return;
  } else {
    console.log(
      `Everything is fine! Puppy is happy! Food: ${(food / 1000).toFixed(
        2
      )}, Hay: ${(hay / 1000).toFixed(2)}, Cover: ${(cover / 1000).toFixed(2)}.`
    );
  }

  //calculate if food, hay , cover will be enough for a month
  //if we run out of stuff end program!
  //print output
  //-Everything is fine! Puppy is happy! Food: {excessFood}, Hay: {excessHay}, Cover: {excessCover}.
  //-Merry must go to the pet store!
  //-- format to second decimal place!
}
guineaPig(['10', '5', '5.2', '1']);
