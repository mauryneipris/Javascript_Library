let myLibrary = [];

function Book (title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.info = function() {
    let isRead;
    if (this.read) {
        isRead = 'read';
    } else {
        isRead = 'not read yet';
    }
   return  `${this.title} by ${this.author}, ${this.pages} pages, ${isRead}`
}

function addBookToLibrary() {

}