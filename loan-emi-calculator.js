document.getElementById('calculate-btn').addEventListener('click', function() {
    const principal = parseFloat(document.getElementById('amount-input').value);
    const interestRate = parseFloat(document.getElementById('interest-input').value) / 100 / 12;
    const loanTerm = parseFloat(document.getElementById('term-input').value) * 12;
    const resultDiv = document.getElementById('result');

    if (principal > 0 && interestRate > 0 && loanTerm > 0) {
        const emi = (principal * interestRate * (1 + interestRate) ** loanTerm) / ((1 + interestRate) ** loanTerm - 1);
        const totalAmount = emi * loanTerm;
        const totalInterest = totalAmount - principal;

        resultDiv.innerHTML = `
            <div class="alert alert-success">
                <h5>Monthly EMI: ${emi.toFixed(2)}</h5>
                <p>Total Interest Payable: ${totalInterest.toFixed(2)}</p>
                <p>Total Payment (Principal + Interest): ${totalAmount.toFixed(2)}</p>
            </div>
        `;
    } else {
        resultDiv.innerHTML = '<div class="alert alert-warning">Please enter valid loan details.</div>';
    }
}); 