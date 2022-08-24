let myLibrary = [];

function Book(title, author, pages, read) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    // do stuff here
    myLibrary.push(book);
}

function display(book) {
    const grid = document.querySelector("#shelf");
    const newBook = document.createElement("div");
    newBook.classList.add("newBook");
    newBook.textContent = book.title + " by " + book.author + ", " +
                        book.pages + " pages and read is " + book.read;
    grid.appendChild(newBook);
}

// let JaneEyre = new Book("Jane Eyre", "Charlotte Bronte", 300, true);
// addBookToLibrary(JaneEyre);
// display(JaneEyre);

// let MobyDick = new Book("Moby Dick", "Herman Melville", 300, true);
// addBookToLibrary(MobyDick);
// display(MobyDick);


const btn = document.querySelector("#create");
btn.addEventListener("click", () => {

});


let form = document.querySelector("#form");
form.addEventListener("submit", () => {
    let newBook = new Book();
});








