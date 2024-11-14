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

let newBookButton = document.querySelector("#new-book-button");
newBookButton.addEventListener("click", () => {
    let newBookForm = document.querySelector("#new-book-form");
    console.log(newBookForm);
    newBookForm.style.display = "block";
});

document.querySelector("#new-book-form").addEventListener("submit", (event) => {
    event.preventDefault();
    addBookToLibrary();
});