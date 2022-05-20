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

Book.prototype = Object.create(Book.prototype)
Book.prototype.changeReadStatus = function() {
    this.read ? this.read = false : this.read = true
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function bookContainerElement(bookTitle, bookInfo, readContainer, removeBookButton) {
    let bookContainer = document.createElement('div')
    bookContainer.className = 'book-container'
    bookContainer.appendChild(bookTitle)
    bookContainer.appendChild(bookInfo)
    bookContainer.appendChild(readContainer)
    bookContainer.appendChild(removeBookButton)
    return bookContainer
}

function bookTitleElement(book) {
    let bookTitle = document.createElement('h2')
    bookTitle.className = 'book-title'
    bookTitle.innerHTML = book.title
    return bookTitle
}

function bookInfoElement(book) {
    let bookInfo = document.createElement('p')
    bookInfo.className = 'book-info'
    bookInfo.innerHTML = book.info()
    return bookInfo
}

function readContainerElement(book) {
    let readContainer = document.createElement('div')
    let readStatus = document.createElement('input')
    readStatus.className = 'read-status'
    readStatus.type = 'checkbox'
    if(book.read) readStatus.checked = true
    let readStatusLabel = document.createElement('label')
    readStatusLabel.textContent = 'Read'
    readStatus.addEventListener('click', () => {
        book.changeReadStatus()
        // the title variable is found by searching all matching classes,
        // appending them to the array if they match the current instance's title
        let info = [].slice.call(document.querySelectorAll('.book-container .book-title')).filter(function(div) {
            return div.innerHTML === book.title;
        })[0].parentElement.children[1]
        info.innerHTML = book.info()
    })
    readContainer.append(readStatus)
    readContainer.append(readStatusLabel)
    return readContainer
}

function removeBookButtonElement(book, library) {
    let removeBookButton = document.createElement('button')
    removeBookButton.innerHTML = 'Remove from Library'
    removeBookButton.id = `${book.title}`
    removeBookButton.addEventListener('click', () => {
        const match = library.findIndex(book => book.title === removeBookButton.id)
        if (match >= 0) {
            library.splice(match, 1)
            removeBookButton.parentElement.parentElement.remove()
        } else {
            console.log('No match found')
        }
    })
    return removeBookButton
}


function displayBook(book) {
    let bookTitle = bookTitleElement(book)
    let bookInfo = bookInfoElement(book)
    let readContainer = readContainerElement(book)
    let removeBookButton = removeBookButtonElement(book, myLibrary)
    let bookContainer = bookContainerElement(bookTitle, bookInfo, readContainer, removeBookButton)
    return bookContainer
}

function displayMyLibrary() {
    let books = document.querySelector('.grid-container')
    myLibrary.forEach(book => {
        const card = document.createElement('div')
        card.className = 'card'
        card.append(displayBook(book))
        books.appendChild(card)
    })
}

function addNewBook(book) {
    const newBook = new Book(book.title, book.author, book.pages, book.read)
    addBookToLibrary(newBook)
    alert('Added new book!')
}

// document.querySelector('.grid-container').addEventListener('change', () => {
    
//     displayMyLibrary()    
// })

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
const math = new Book('Math', 'Feyman', 1000, false)
const science = new Book('Science', 'Professor', 1000, false)


addBookToLibrary(potter)
addBookToLibrary(frost)
addBookToLibrary(think)
addBookToLibrary(math)
addBookToLibrary(science)

displayMyLibrary()