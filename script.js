let myLibrary = [];
let count = 0;
const grid = document.querySelector("#shelf");

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.num = count;
    count++;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function display(book) {
    const newBook = document.createElement("div");
    newBook.classList.add("newBook");
    grid.appendChild(newBook);
    
    const info = document.createElement("p");
    info.classList.add("info");

    if(book.read === "read") {
        info.textContent = (book.title).toUpperCase() + " by " + (book.author).toUpperCase() + ", " +
                        book.pages + " pages and read: ✅ ";
    } else {
        info.textContent = (book.title).toUpperCase() + " by " + (book.author).toUpperCase() + ", " +
                        book.pages + " pages and read: ❌";
    }
    newBook.appendChild(info);

    //create toggle for read or unread
    const toggle = document.createElement("button");
    toggle.classList.add("toggle");
    toggle.textContent = "Change Read Status";
    newBook.appendChild(toggle);

    toggle.addEventListener("click", e => {
        e.preventDefault();

        if(book.read === "read") {
            book.read = "unread";
            info.textContent = (book.title).toUpperCase() + " by " + (book.author).toUpperCase() + ", " +
            book.pages + " pages and read: ❌";
        } else {
            book.read = "read";
            info.textContent = (book.title).toUpperCase() + " by " + (book.author).toUpperCase() + ", " +
            book.pages + " pages and read: ✅";
        }
    });

    //add delete button
    const newBtn = document.createElement("button");
    newBtn.classList.add("btn");
    newBtn.textContent = "Delete";
    newBook.appendChild(newBtn);

    newBtn.addEventListener("click", e => {
        e.preventDefault();

        myLibrary.splice(newBook.count, 1);
        grid.removeChild(newBook);
    });
}

//Example book
let JaneEyre = new Book("Jane Eyre", "Charlotte Bronte", 300, true);
addBookToLibrary(JaneEyre);
display(JaneEyre);

let form = document.querySelector('form');
form.addEventListener('submit', e => {
    e.preventDefault();

    let title = document.querySelector('input[name=title]').value;
    let author = document.querySelector('input[name=author]').value;
    let pages = document.querySelector('input[name=pages]').value;
    let read = document.querySelector("input[name=read]:checked").value;

    let newBook = new Book(title, author, pages, read);
    addBookToLibrary(newBook);
    display(newBook);
});










