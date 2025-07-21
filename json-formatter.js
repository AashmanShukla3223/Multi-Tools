document.getElementById('format-btn').addEventListener('click', function() {
    const jsonInput = document.getElementById('json-input').value;
    const formattedJson = document.getElementById('formatted-json');

    try {
        const parsedJson = JSON.parse(jsonInput);
        formattedJson.value = JSON.stringify(parsedJson, null, 2);
    } catch (e) {
        formattedJson.value = 'Invalid JSON: ' + e.message;
    }
}); 