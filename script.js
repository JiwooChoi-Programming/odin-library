let myLibrary = [];

function Book() {}

function addBookToLibrary() {}

let newBookButton = document.querySelector("#new-book-button");
newBookButton.addEventListener("click", () => {
    let newBookForm = document.querySelector("#new-book-form");
    console.log(newBookForm);
    newBookForm.style.display = "block";
})