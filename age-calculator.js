document.getElementById('calculate-btn').addEventListener('click', function() {
    const dob = new Date(document.getElementById('dob-input').value);
    const resultDiv = document.getElementById('result');
    const today = new Date();

    if (dob.getTime()) {
        let age = today.getFullYear() - dob.getFullYear();
        const m = today.getMonth() - dob.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
            age--;
        }

        let months = today.getMonth() - dob.getMonth();
        if (months < 0) {
            months += 12;
        }

        let days = today.getDate() - dob.getDate();
        if (days < 0) {
            const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
            days += lastMonth.getDate();
        }

        resultDiv.innerHTML = `<div class="alert alert-success">You are ${age} years, ${months} months, and ${days} days old.</div>`;
    } else {
        resultDiv.innerHTML = '<div class="alert alert-warning">Please enter a valid date of birth.</div>';
    }
}); 