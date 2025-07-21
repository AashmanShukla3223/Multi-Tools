document.getElementById('generate-btn').addEventListener('click', function() {
    const urls = document.getElementById('url-list').value.split('\n').filter(url => url.trim() !== '');
    const today = new Date().toISOString().split('T')[0];

    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    urls.forEach(url => {
        sitemap += '  <url>\n';
        sitemap += `    <loc>${url.trim()}</loc>\n`;
        sitemap += `    <lastmod>${today}</lastmod>\n`;
        sitemap += '  </url>\n';
    });

    sitemap += '</urlset>';

    document.getElementById('generated-sitemap').value = sitemap;
}); 