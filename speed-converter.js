document.addEventListener('DOMContentLoaded', function() {
    const fromValue = document.getElementById('from-value');
    const toValue = document.getElementById('to-value');
    const fromUnit = document.getElementById('from-unit');
    const toUnit = document.getElementById('to-unit');
    const swapBtn = document.getElementById('swap-btn');

    const units = {
        'meters_per_second': 1,
        'kilometers_per_hour': 0.277778,
        'miles_per_hour': 0.44704,
        'knots': 0.514444
    };

    for (const unit in units) {
        const option1 = document.createElement('option');
        option1.value = unit;
        option1.textContent = unit.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        fromUnit.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = unit;
        option2.textContent = unit.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        toUnit.appendChild(option2);
    }

    fromUnit.value = 'meters_per_second';
    toUnit.value = 'kilometers_per_hour';

    const convert = () => {
        const from = fromUnit.value;
        const to = toUnit.value;
        const value = parseFloat(fromValue.value);

        if (!isNaN(value)) {
            const result = value * units[from] / units[to];
            toValue.value = result.toFixed(4);
        }
    };

    fromValue.addEventListener('input', convert);
    fromUnit.addEventListener('change', convert);
    toUnit.addEventListener('change', convert);

    swapBtn.addEventListener('click', () => {
        [fromUnit.value, toUnit.value] = [toUnit.value, fromUnit.value];
        convert();
    });

    convert();
}); 