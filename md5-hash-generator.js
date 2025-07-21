document.getElementById('generate-btn').addEventListener('click', function() {
    const textInput = document.getElementById('text-input').value;
    const output = document.getElementById('output');
    
    output.value = CryptoJS.MD5(textInput).toString();
}); 