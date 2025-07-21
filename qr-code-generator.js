document.getElementById('generate-btn').addEventListener('click', function() {
    const qrText = document.getElementById('qr-text').value;
    if (qrText) {
        document.getElementById('qr-code').innerHTML = '';
        new QRCode(document.getElementById('qr-code'), qrText);
    }
}); 