document.getElementById('calculate-btn').addEventListener('click', function() {
    const height = parseFloat(document.getElementById('height-input').value);
    const weight = parseFloat(document.getElementById('weight-input').value);
    const resultDiv = document.getElementById('result');

    if (height > 0 && weight > 0) {
        const bmi = weight / ((height / 100) ** 2);
        let category = '';

        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            category = 'Normal weight';
        } else if (bmi >= 25 && bmi <= 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obesity';
        }

        resultDiv.innerHTML = `<div class="alert alert-success">Your BMI is ${bmi.toFixed(2)} (${category})</div>`;
    } else {
        resultDiv.innerHTML = '<div class="alert alert-warning">Please enter valid height and weight.</div>';
    }
}); 