document.getElementById('generate-btn').addEventListener('click', function() {
    const oldUrl = document.getElementById('old-url').value;
    const newUrl = document.getElementById('new-url').value;
    const output = document.getElementById('output');

    if (oldUrl && newUrl) {
        output.value = `Redirect 301 ${oldUrl} ${newUrl}`;
    } else {
        output.value = 'Please enter both old and new URLs.';
    }
}); 