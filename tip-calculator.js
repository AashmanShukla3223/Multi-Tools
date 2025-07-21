document.getElementById('calculate-btn').addEventListener('click', function() {
    const billAmount = parseFloat(document.getElementById('bill-amount-input').value);
    const tipPercentage = parseFloat(document.getElementById('tip-percentage-input').value);
    const resultDiv = document.getElementById('result');

    if (billAmount > 0 && tipPercentage >= 0) {
        const tipAmount = billAmount * (tipPercentage / 100);
        const totalAmount = billAmount + tipAmount;

        resultDiv.innerHTML = `
            <div class="alert alert-success">
                <h5>Tip Amount: ${tipAmount.toFixed(2)}</h5>
                <p>Total Bill: ${totalAmount.toFixed(2)}</p>
            </div>
        `;
    } else {
        resultDiv.innerHTML = '<div class="alert alert-warning">Please enter a valid bill amount and tip percentage.</div>';
    }
}); 