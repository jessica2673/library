let myLibrary = [];
let count;
const grid = document.querySelector("#shelf");

class Book {
    count = 0;

    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.count = 0;
    }

    addBookToLibrary() {
        myLibrary.push(this);
    }

    display() {
        const newBook = document.createElement("div");
        newBook.classList.add("newBook");
        grid.appendChild(newBook);
        
        const info = document.createElement("p");
        info.classList.add("info");
    
        if(this.read === "read") {
            info.textContent = (this.title).toUpperCase() + " by " + (this.author).toUpperCase() + ", " +
            this.pages + " pages and read: ✅ ";
        } else {
            info.textContent = (this.title).toUpperCase() + " by " + (this.author).toUpperCase() + ", " +
            this.pages + " pages and read: ❌";
        }
        newBook.appendChild(info);

        const toggle = document.createElement("button");
        toggle.classList.add("toggle");
        toggle.textContent = "Change Read Status";
        newBook.appendChild(toggle);

        toggle.addEventListener("click", e => {
            e.preventDefault();

            if(this.read === "read") {
                this.read = "unread";
                info.textContent = (this.title).toUpperCase() + " by " + (this.author).toUpperCase() + ", " +
                this.pages + " pages and read: ❌";
            } else {
                this.read = "read";
                info.textContent = (this.title).toUpperCase() + " by " + (this.author).toUpperCase() + ", " +
                this.pages + " pages                                                                and read: ✅";
            }
        });

        const newBtn = document.createElement("button");
        newBtn.classList.add("btn");
        newBtn.textContent = "Delete";
        newBook.appendChild(newBtn);

        newBtn.addEventListener("click", e => {
            e.preventDefault();

            myLibrary.splice(newBook.count, 1);
            grid.removeChild(newBook);

            if(myLibrary.length === 0) {
                document.getElementById("shelf").style.padding = "0px";
            }
        });
    }
}


//Example book
let JaneEyre = new Book("Jane Eyre", "Charlotte Bronte", 300, false);
JaneEyre.addBookToLibrary();
JaneEyre.display();

let form = document.querySelector('form');
form.addEventListener('submit', e => {
    e.preventDefault();

    let title = document.querySelector('input[name=title]').value;
    let author = document.querySelector('input[name=author]').value;
    let pages = document.querySelector('input[name=pages]').value;
    let read = document.querySelector("input[name=read]:checked").value;

    let newBook = new Book(title, author, pages, read);
    newBook.addBookToLibrary();
    document.getElementById("shelf").style.padding = "20px";
    newBook.display();
});










