let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;

    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    renderBooks();
}

function renderBooks() {
    let libraryElement = document.querySelector("#library");
    libraryElement.textContent= "";
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookElement = document.createElement("div");
        bookElement.classList.add("book-card");
        bookElement.innerHTML = `
        <div class="card-header">
            <h3 class="title">${book.title}</h3>
            <h5 class="author">by ${book.author}</h5>
        </div>

        <div class="card-body">
            <p>${book.pages}</p>
            <p class="read-status">
                ${book.read ? "Read" : "Not Read Yet"}
            </p>
            <button class="remove-button" onclick="removeBook(${i})">Remove Book</button>
            <button class="toggle-read-button" onclick="toggleRead(${i})"></button>
        </div>
        `
        libraryElement.appendChild(bookElement);
    }
}

function removeBook(book) {
    myLibrary.splice(book, 1);
    renderBooks();
}

let newBookButton = document.querySelector("#new-book-button");
newBookButton.addEventListener("click", () => {
    let newBookForm = document.querySelector("#new-book-form");
    newBookForm.style.display = "block";
});

document.querySelector("#new-book-form").addEventListener("submit", (event) => {
    event.preventDefault();
    addBookToLibrary();
});