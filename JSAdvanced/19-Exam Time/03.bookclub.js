class BookClub {
  constructor(library) {
    this.library = library;
    this.books = [];
    this.members = [];
  }
  addBook(title, author) {
    const currentBook = this.books.find((el) => el.title === title);
    if (currentBook) {
      return `The book "${title}" by ${author} is already in ${this.library} library.`;
    }
    const book = { title, author };
    this.books.push(book);
    return `The book "${title}" by ${author} has been added to ${this.library} library.`;
  }
  addMember(memberName) {
    const curMember = this.members.find((el) => el.memberName === memberName);
    if (curMember) {
      return `Member ${memberName} is already a part of the book club.`;
    }
    this.members.push({ memberName });
    return `Member ${memberName} has been joined to the book club.`;
  }
  assignBookToMember(memberName, bookTitle) {
    const memberInArr = this.members.find((el) => el.memberName === memberName);
    if (!memberInArr) {
      throw new Error(`Member ${memberName} not found.`);
    }
    const bookIdx = this.books.findIndex((item) => item.title === bookTitle);
    if (bookIdx === -1) {
      throw new Error(`Book "${bookTitle}" not found.`);
    }

    const assignedBook = this.books[bookIdx];
    this.books.splice(bookIdx, 1);
    return `Member ${memberName} has been assigned the book "${assignedBook.title}" by ${assignedBook.author}.`;
  }
  generateReadingReport() {
    if (this.members.length === 0) {
      return 'No members in the book club.';
    }
    if (this.books.length === 0) {
      return 'No available books in the library.';
    }
    let result = [`Available Books in ${this.library} library:`];
    for (let data of this.books) {
      let { title, author } = data;
      result.push(`"${title}" by ${author}`);
    }
    return result.join('\n');
  }
}
const myBookClub = new BookClub('The Bookaholics');
console.log(myBookClub.addBook('The Great Gatsby', 'F. Scott Fitzgerald'));
console.log(myBookClub.addBook('To Kill a Mockingbird', 'Harper Lee'));
console.log(myBookClub.addBook('1984', 'George Orwell'));
console.log(myBookClub.addMember('Alice'));
console.log(myBookClub.addMember('Alice'));
console.log(myBookClub.assignBookToMember('Alice', 'The Great Gatsby'));
console.log(myBookClub.generateReadingReport());
