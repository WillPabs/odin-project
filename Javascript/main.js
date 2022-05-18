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

let myLibrary = []

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayMyLibrary() {
    let index = 0
    for (let book of myLibrary) {
        let bookDiv = document.getElementsByClassName('book')[index++]
        bookDiv.innerHTML = book.info()
    }
}
const potter = new Book('Harry Potter', 'J.K. Rowling', 500, false)
const frost = new Book('Jack Frost', 'Santa Claus', 100, false)
const think = new Book('Think and Grow Rich', 'Something something', 100, true)

addBookToLibrary(potter)
addBookToLibrary(frost)
addBookToLibrary(think)

displayMyLibrary()