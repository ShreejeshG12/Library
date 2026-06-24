const myBooks = [{ Id: "7f3c9a21-6d84-4b5e-a912-3f8c7e1d5a60", Title: "The Hobbit", Author: "J.R.R. Tolkien", Pages: 295 },
{ Id: "b4e8f2c7-91a3-46d0-8c5b-2e7f9a1d6c34", Title: "Harry Potter: Azakaban", Author: "J.K. Rowling", Pages: 500 }
];

function Book(title, author, pages) {
    this.Id = crypto.randomUUID();
    this.Title = title;
    this.Author = author;
    this.Pages = pages;
    this.Read = false;

};



function addBookTomyBooks(title, author, pages) {
    const book = new Book(title, author, pages);
    myBooks.push(book);

    return myBooks;
};

function populateBook() {
    const library = document.querySelector(".library");
    if (myBooks.length === 0) return;
    for (const book of myBooks) {
        const card = document.createElement("div");
        card.classList.add("book");

        const id = document.createElement("div");
        id.classList.add("Id");
        id.textContent = `ID: ${book.Id}`

        const title = document.createElement("div");
        title.classList.add("title");
        title.textContent = `Title: ${book.Title}`;

        const author = document.createElement("div");
        author.classList.add("author");
        author.textContent = `Author: ${book.Author}`;

        const pages = document.createElement("div");
        pages.classList.add("pages");
        pages.textContent = `Pages: ${book.Pages} `;

        const controls = document.createElement("div");
        controls.classList.add("controls");

        const read = document.createElement("button");
        read.classList.add("read")
        read.classList.add("unread")
        read.textContent = "Unread ❌";

        read.addEventListener("click", (e) => {
            book.Read = !book.Read;

            if (book.Read) {
                e.target.textContent = "Read ✅";
                read.classList.remove("unread");
                read.classList.add("finished");
            } else {
                e.target.textContent = "Unread ❌";
                read.classList.remove("finished");
                read.classList.add("unread");
            }
        })

        const remove = document.createElement("button");
        remove.classList.add("remove");
        remove.textContent = "Remove";

        remove.addEventListener("click", () => {
            card.remove();
        })


        card.appendChild(id);
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(controls)
        controls.appendChild(read);
        controls.appendChild(remove);
        library.appendChild(card);

    }

};


populateBook();

//Starting DOM manipulation

//Defining Selectors

/*
const book = document.querySelector(".book")
const id = document.querySelector(".Id")
const name = document.querySelector(".name")
const author = document.querySelector(".author")
const pages = document.querySelector(".pages")
const status = document.querySelector(".status")
const read = document.querySelector(".read-status")
const remove = document.querySelector(".remove")
*/
