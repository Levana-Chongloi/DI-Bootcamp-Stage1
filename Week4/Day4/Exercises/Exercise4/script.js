// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Step 2: Create an array of books
    const allBooks = [
        {
            title: "Harry Potter",
            author: "JK Rowling",
            image: "https://m.media-amazon.com/images/I/81Fyh2mrw4L._AC_UF1000,1000_QL80_.jpg",
            alreadyRead: true
        },
        {
            title: "The Hobbit",
            author: "JRR Tolkien",
            image: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/710+HcoP38L._AC_UF1000,1000_QL80_.jpg",
            alreadyRead: false
        }
    ];

    // Step 3: Render the books inside an HTML table
    const bookTable = document.createElement("table");

    allBooks.forEach(book => {
        const row = bookTable.insertRow();
        
        // Display the book's title and author
        const cell1 = row.insertCell(0);
        cell1.textContent = `${book.title} written by ${book.author}`;

        // Set the width of the image to 100px
        const cell2 = row.insertCell(1);
        const image = document.createElement("img");
        image.src = book.image;
        image.width = 100;
        cell2.appendChild(image);

        // Set the color of the book's details to red if already read
        if (book.alreadyRead) {
            cell1.style.color = "red";
            cell2.style.color = "red";
        }
    });

    // Append the table to the div created in step 1
    const bookListDiv = document.querySelector(".listBooks");
    bookListDiv.appendChild(bookTable);
});

