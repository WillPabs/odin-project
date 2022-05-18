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

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayMyLibrary() {
    let index = 0
    let cardDivElements = document.querySelectorAll('.card')
    myLibrary.forEach(book => {
        cardDivElements[index].children.item(0).innerHTML = book.title
        cardDivElements[index].children.item(1).innerHTML = book.info()
        let removeBookButton = document.createElement('button')
        removeBookButton.innerHTML = "Remove from Library"
        cardDivElements[index].children.item(1).append(removeBookButton)
        index++
    })
}


function addNewBook(book) {
    const newBook = new Book(book.title, book.author, book.pages, book.read)
    addBookToLibrary(newBook)
    alert('Added new book!')
}

const bookForm = document.querySelector('#new-book-form')
bookForm.addEventListener('submit', () => {
    console.log(bookForm.classList)
    alert('submit clicked')
})


const newBookButton = document.querySelector('#new-book-button')
newBookButton.addEventListener('click', () => {
    const newBookForm = document.querySelector('.new-book-form')

    if (newBookForm.style.display === 'none') {
        newBookForm.style.display = 'block'
    } else {
        newBookForm.style.display = 'none'
    }
})



let myLibrary = []
const potter = new Book('Harry Potter', 'J.K. Rowling', 500, false)
const frost = new Book('Jack Frost', 'Santa Claus', 100, false)
const think = new Book('Think and Grow Rich', 'Something something', 100, true)

addBookToLibrary(potter)
addBookToLibrary(frost)
addBookToLibrary(think)

displayMyLibrary()