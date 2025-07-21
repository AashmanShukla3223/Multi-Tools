document.addEventListener('DOMContentLoaded', function() {
    const textInput = document.getElementById('text-input');
    const encodeBtn = document.getElementById('encode-btn');
    const decodeBtn = document.getElementById('decode-btn');
    const output = document.getElementById('output');

    encodeBtn.addEventListener('click', () => {
        output.value = btoa(textInput.value);
    });

    decodeBtn.addEventListener('click', () => {
        try {
            output.value = atob(textInput.value);
        } catch (e) {
            output.value = 'Invalid Base64 string.';
        }
    });
}); 