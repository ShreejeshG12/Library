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




const add = document.querySelector(".add");
const dialogbox = document.createElement("dialog");
dialogbox.classList.add("dialogbox")


dialogbox.innerHTML = `
    <h2>Add a Book</h2>
    <label for="title">Title:</label>
    <input type = "text" id="title" name="title">
            
    <label for="author">Author:</label>
    <input type = "text" id="author" name="author">

    <label for="pages">Pages:</label>
    <input type = "number" id="pages" name="pages">

    <button class="submit">Submit</button>
    <button class="close">Cancel</button>
`;

document.body.appendChild(dialogbox);

add.addEventListener("click", () => {

    dialogbox.showModal();
});

const cancelBtn = document.querySelector(".close");
cancelBtn.addEventListener("click", () => {
    dialogbox.close();
});

const submitBtn = document.querySelector(".submit");
submitBtn.addEventListener("click", () => {
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;

    const newBook = new Book(title, author, pages);
    myBooks.push(newBook);
    dialogbox.close();
    populateBook();

});



