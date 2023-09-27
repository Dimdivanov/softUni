function gramophoneTask(band, album, song) {
  let time = (band.length * album.length * song.length) / 2;
  let rotations = Math.ceil(time / 2.5);
  console.log(`The plate was rotated ${rotations} times.`);
}
gramophoneTask('Black Sabbath', 'Paranoid', 'War Pigs');
