// Sample data for books and categories
const books = [
    { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee", category: "Fiction", borrowed: false },
    { id: 2, title: "1984", author: "George Orwell", category: "Dystopian", borrowed: false },
    { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "Fiction", borrowed: false },
    { id: 4, title: "The Catcher in the Rye", author: "J.D. Salinger", category: "Fiction", borrowed: false },
    { id: 5, title: "Moby-Dick", author: "Herman Melville", category: "Adventure", borrowed: false }
];

const categories = ["Fiction", "Dystopian", "Adventure", "Science Fiction"];

// Borrowing history to track borrowed books
let borrowHistory = [];

// Function to render the book list
function renderBooks(bookList) {
    const bookListElement = document.getElementById("book-list");
    bookListElement.innerHTML = "";
    
    bookList.forEach(book => {
        const li = document.createElement("li");
        li.textContent = `${book.title} by ${book.author} (${book.category})`;
        
        // Add a button for borrowing the book
        const borrowButton = document.createElement("button");
        borrowButton.textContent = book.borrowed ? "Returned" : "Borrow";
        borrowButton.onclick = () => borrowBook(book);
        
        li.appendChild(borrowButton);
        bookListElement.appendChild(li);
    });
}

// Function to render the categories
function renderCategories() {
    const categoryListElement = document.getElementById("category-list");
    categoryListElement.innerHTML = "";

    categories.forEach(category => {
        const li = document.createElement("li");
        li.textContent = category;
        li.onclick = () => filterBooksByCategory(category);
        categoryListElement.appendChild(li);
    });
}

// Function to filter books by category
function filterBooksByCategory(category) {
    const filteredBooks = books.filter(book => book.category === category);
    renderBooks(filteredBooks);
}

// Function to search books
function searchBooks() {
    const searchQuery = document.getElementById("search-bar").value.toLowerCase();
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchQuery) || book.author.toLowerCase().i
    renderBooks(filteredBooks);
}

// Function to borrow or return a book
function borrowBook(book) {
    if (book.borrowed) {
        book.borrowed = false;
        borrowHistory.push(`Returned: ${book.title}`);
    } else {
        book.borrowed = true;
        borrowHistory.push(`Borrowed: ${book.title}`);
    }

    // Update book list and borrow history
    renderBooks(books);
    renderBorrowHistory();
}

// Function to render the borrowing history
function renderBorrowHistory() {
    const borrowHistoryElement = document.getElementById("borrow-history");
    borrowHistoryElement.innerHTML = "";

    borrowHistory.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        borrowHistoryElement.appendChild(li);
    });
}

// Initial rendering
renderBooks(books);
renderCategories();
