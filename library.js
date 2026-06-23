const myBooks = [{ Title: "The Hobbit", Author: "J.R.R. Tolkien", Pages: 295 },
{ Title: "Harry Potter: Azakaban", Author: "J.K. Rowling", Pages: 500 }
];

function Book(title, author, pages) {
    this.Title = title;
    this.Author = author;
    this.Pages = pages;

};



function addBookToLibrary(title, author, pages) {
    const book = new Book(title, author, pages);
    myBooks.push(book);

    return myBooks;
};

addBookToLibrary("Harry 2", "Shreejesh Gautam", 500);



