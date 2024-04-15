// header_loader.js

// Function to load header content
function loadHeader() {
    const headerPlaceholder = document.getElementById('headerPlaceholder');
    const headerUrl = headerPlaceholder.getAttribute('data-header');

    fetch(headerUrl)
        .then(response => response.text())
        .then(data => {
            headerPlaceholder.innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));
}

// Call function to load header
loadHeader();