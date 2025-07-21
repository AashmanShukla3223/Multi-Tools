document.getElementById('generate-btn').addEventListener('click', function() {
    const siteTitle = document.getElementById('site-title').value;
    const siteDescription = document.getElementById('site-description').value;
    const siteKeywords = document.getElementById('site-keywords').value;

    const metaTags = `
<meta name="title" content="${siteTitle}">
<meta name="description" content="${siteDescription}">
<meta name="keywords" content="${siteKeywords}">
    `;

    document.getElementById('generated-tags').value = metaTags.trim();
}); 