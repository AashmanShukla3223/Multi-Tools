document.getElementById('generate-btn').addEventListener('click', function() {
    const text = document.getElementById('text-input').value;
    if (text) {
        JsBarcode("#barcode", text);
    }
}); 