function oldBooks(input) {
  let index = 0;

  let searchedBook = input[index];
  index++;

  let currentBook = input[index];
  index++;

  let isFound = false;
  let booksChecked = 0;

  while (currentBook !== 'No More Books') {
    if (currentBook === searchedBook) {
      isFound = true;
      break;
    }

    booksChecked++;

    currentBook = input[index];
    index++;
  }
  if (isFound) {
    console.log(`You checked ${booksChecked} books and found it.`);
  } else {
    console.log(`The book you search is not here!`);
    console.log(`You checked ${booksChecked} books.`);
  }
}
oldBooks(['Troy', 'Stronger', 'Life Style', 'Troy']);
