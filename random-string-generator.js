document.getElementById('generate-btn').addEventListener('click', function() {
    const length = parseInt(document.getElementById('length-input').value);
    const output = document.getElementById('output');
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    output.value = result;
}); 