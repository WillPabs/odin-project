function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = () => {
        const readString = this.read ? 'read' : 'not read yet'
        return `${this.title} by ${this.author}, ${this.pages} pages, ${readString}`
    }
}

let myLibrary = [];

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayMyLibrary() {
    for (let book in myLibrary) {
        let bookDiv = document.getElementsByClassName('book')
        bookDiv.innerHtml = book.title;
    }
}

const potter = new Book('Harry Potter', 'J.K. Rowling', 500, false)
