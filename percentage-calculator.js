document.getElementById('calculate-btn').addEventListener('click', function() {
    const percentage = parseFloat(document.getElementById('percentage-input').value);
    const of = parseFloat(document.getElementById('of-input').value);
    const resultDiv = document.getElementById('result');

    if (!isNaN(percentage) && !isNaN(of)) {
        const result = (percentage / 100) * of;
        resultDiv.innerHTML = `<div class="alert alert-success">Result: ${result}</div>`;
    } else {
        resultDiv.innerHTML = '<div class="alert alert-warning">Please enter valid numbers.</div>';
    }
}); 