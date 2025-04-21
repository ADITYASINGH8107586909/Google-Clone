function performSearch() {
    const searchTerm = document.getElementById('search-input').value;
    if (searchTerm.trim() !== '') {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
    }
}


document.getElementById('search-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        performSearch();
    }
});