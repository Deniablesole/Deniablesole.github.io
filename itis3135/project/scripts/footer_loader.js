function loadFooter() {
    const footerPlaceholder = document.getElementById('footerPlaceholder');
    const footerUrl = footerPlaceholder.getAttribute('data-footer');

    fetch(footerUrl)
        .then(response => response.text())
        .then(data => {
            footerPlaceholder.innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
}

loadFooter();