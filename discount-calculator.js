document.getElementById('calculate-btn').addEventListener('click', function() {
    const originalPrice = parseFloat(document.getElementById('original-price-input').value);
    const discount = parseFloat(document.getElementById('discount-input').value);
    const resultDiv = document.getElementById('result');

    if (originalPrice > 0 && discount > 0) {
        const finalPrice = originalPrice - (originalPrice * (discount / 100));
        const savedAmount = originalPrice - finalPrice;

        resultDiv.innerHTML = `
            <div class="alert alert-success">
                <h5>Final Price: ${finalPrice.toFixed(2)}</h5>
                <p>You saved: ${savedAmount.toFixed(2)}</p>
            </div>
        `;
    } else {
        resultDiv.innerHTML = '<div class="alert alert-warning">Please enter valid price and discount.</div>';
    }
}); 