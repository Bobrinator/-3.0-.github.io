document.getElementById('search').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const books = document.querySelectorAll('#book-list li');

    books.forEach(book => {
        if (book.textContent.toLowerCase().includes(query)) {
            book.style.display = 'list-item';
        } else {
            book.style.display = 'none';
        }
    });
});

