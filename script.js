//your JS code here. If required.
function activateSearch() {
    var searchComponent = document.getElementById('searchComponent');
    var searchInput = document.getElementById('searchInput');

    // Add 'active' class to the search component
    searchComponent.classList.add('active');

    // Focus on the input element
    searchInput.focus();
}
