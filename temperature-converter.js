document.addEventListener('DOMContentLoaded', function() {
    const fromValue = document.getElementById('from-value');
    const toValue = document.getElementById('to-value');
    const fromUnit = document.getElementById('from-unit');
    const toUnit = document.getElementById('to-unit');
    const swapBtn = document.getElementById('swap-btn');

    const units = ['Celsius', 'Fahrenheit', 'Kelvin'];

    units.forEach(unit => {
        const option1 = document.createElement('option');
        option1.value = unit;
        option1.textContent = unit;
        fromUnit.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = unit;
        option2.textContent = unit;
        toUnit.appendChild(option2);
    });

    fromUnit.value = 'Celsius';
    toUnit.value = 'Fahrenheit';

    const convert = () => {
        const from = fromUnit.value;
        const to = toUnit.value;
        const value = parseFloat(fromValue.value);
        let result;

        if (!isNaN(value)) {
            if (from === to) {
                result = value;
            } else if (from === 'Celsius') {
                if (to === 'Fahrenheit') result = (value * 9/5) + 32;
                else if (to === 'Kelvin') result = value + 273.15;
            } else if (from === 'Fahrenheit') {
                if (to === 'Celsius') result = (value - 32) * 5/9;
                else if (to === 'Kelvin') result = (value - 32) * 5/9 + 273.15;
            } else if (from === 'Kelvin') {
                if (to === 'Celsius') result = value - 273.15;
                else if (to === 'Fahrenheit') result = (value - 273.15) * 9/5 + 32;
            }
            toValue.value = result.toFixed(2);
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