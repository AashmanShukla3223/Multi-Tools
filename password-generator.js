document.getElementById('generate-btn').addEventListener('click', function() {
    const length = parseInt(document.getElementById('length-input').value);
    const includeUppercase = document.getElementById('uppercase-check').checked;
    const includeLowercase = document.getElementById('lowercase-check').checked;
    const includeNumbers = document.getElementById('numbers-check').checked;
    const includeSymbols = document.getElementById('symbols-check').checked;
    const output = document.getElementById('output');

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    let allChars = '';
    if (includeUppercase) allChars += uppercaseChars;
    if (includeLowercase) allChars += lowercaseChars;
    if (includeNumbers) allChars += numberChars;
    if (includeSymbols) allChars += symbolChars;

    let password = '';
    for (let i = 0; i < length; i++) {
        password += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }

    output.value = password;
}); 