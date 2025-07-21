document.getElementById('minify-btn').addEventListener('click', function() {
    const jsInput = document.getElementById('js-input').value;
    const minifiedJs = document.getElementById('minified-js');
    minifiedJs.value = 'Minifying...';

    fetch('https://javascript-minifier.com/raw', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `input=${encodeURIComponent(jsInput)}`
    })
    .then(response => response.text())
    .then(data => {
        minifiedJs.value = data;
    })
    .catch(error => {
        minifiedJs.value = 'An error occurred: ' + error;
    });
}); 