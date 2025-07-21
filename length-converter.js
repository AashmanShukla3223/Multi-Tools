document.addEventListener('DOMContentLoaded', function() {
    const fromValue = document.getElementById('from-value');
    const toValue = document.getElementById('to-value');
    const fromUnit = document.getElementById('from-unit');
    const toUnit = document.getElementById('to-unit');
    const swapBtn = document.getElementById('swap-btn');

    const units = {
        meter: 1,
        kilometer: 1000,
        centimeter: 0.01,
        millimeter: 0.001,
        mile: 1609.34,
        yard: 0.9144,
        foot: 0.3048,
        inch: 0.0254
    };

    for (const unit in units) {
        const option1 = document.createElement('option');
        option1.value = unit;
        option1.textContent = unit.charAt(0).toUpperCase() + unit.slice(1);
        fromUnit.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = unit;
        option2.textContent = unit.charAt(0).toUpperCase() + unit.slice(1);
        toUnit.appendChild(option2);
    }

    fromUnit.value = 'meter';
    toUnit.value = 'kilometer';

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