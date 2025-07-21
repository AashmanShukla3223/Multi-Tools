document.getElementById('validate-btn').addEventListener('click', function() {
    const sitemapUrl = document.getElementById('sitemap-url').value;
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>';

    const apiUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(`http://www.webmaster-toolkit.online/sitemap-validator-api.html?sitemap=${sitemapUrl}`)}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // The API returns HTML, so we need to parse it
            const parser = new DOMParser();
            const doc = parser.parseFromString(data.contents, 'text/html');
            const result = doc.querySelector('.sitemap-validation-result');

            if (result) {
                resultsDiv.innerHTML = result.outerHTML;
            } else {
                resultsDiv.innerHTML = '<div class="alert alert-danger">Could not parse validation results.</div>';
            }
        })
        .catch(error => {
            resultsDiv.innerHTML = `<div class="alert alert-danger">An error occurred: ${error}</div>`;
        });
}); 