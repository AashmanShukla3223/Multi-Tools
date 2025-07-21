document.getElementById('convert-btn').addEventListener('click', function() {
    const binaryInput = document.getElementById('binary-input').value;
    const resultDiv = document.getElementById('result');

    if (/^[01]+$/.test(binaryInput)) {
        const decimal = parseInt(binaryInput, 2);
        resultDiv.innerHTML = `<div class="alert alert-success">Decimal: ${decimal}</div>`;
    } else {
        resultDiv.innerHTML = '<div class="alert alert-warning">Please enter a valid binary number.</div>';
    }
}); 