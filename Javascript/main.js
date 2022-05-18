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

function displayBook(book) {
    let bookContainer = document.createElement('div')
    bookContainer.className = 'book-container'

    let bookTitle = document.createElement('h2')
    bookTitle.className = 'book-title'
    bookTitle.innerHTML = book.title

    let bookInfo = document.createElement('p')
    bookInfo.className = 'book-info'
    bookInfo.innerHTML = book.info()

    let removeBookButton = document.createElement('button')
    removeBookButton.innerHTML = 'Remove from Library'
    removeBookButton.id = `${book.title}`
    removeBookButton.addEventListener('click', () => {
        const match = myLibrary.findIndex(book => book.title === removeBookButton.id)
        console.log(match)
        if (match >= 0) {
            myLibrary.splice(match, 1)
            bookContainer.remove()
        } else {
            console.log('No match found')
        }
    })

    bookContainer.append(bookTitle)
    bookContainer.append(bookInfo)
    bookContainer.append(removeBookButton)
    return bookContainer
}

function displayMyLibrary() {
    let index = 0
    let cardDivElements = document.querySelectorAll('.card')
    myLibrary.forEach(book => {
        cardDivElements[index++].appendChild(displayBook(book))
    })
}

function addNewBook(book) {
    const newBook = new Book(book.title, book.author, book.pages, book.read)
    addBookToLibrary(newBook)
    alert('Added new book!')
}

document.querySelector('.grid-container').addEventListener('change', () => {
    alert('Change in books detected')
    displayMyLibrary()    
})

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