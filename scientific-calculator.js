document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const keysContainer = document.querySelector('.keys');
    let currentInput = '';
    let operator = '';
    let previousInput = '';

    const buttons = [
        'sin', 'cos', 'tan', 'log', 'C',
        '7', '8', '9', 'sqrt', '/',
        '4', '5', '6', 'pow', '*',
        '1', '2', '3', '-', '+',
        '0', '.', '=',
    ];

    buttons.forEach(text => {
        const button = document.createElement('button');
        button.className = 'btn';
        button.textContent = text;
        
        if (['C', 'sqrt', 'pow', 'sin', 'cos', 'tan', 'log'].includes(text)) {
            button.classList.add('btn-secondary', 'function');
        } else if (['/', '*', '-', '+', '='].includes(text)) {
            button.classList.add('btn-warning', 'operator');
        } else {
            button.classList.add('btn-light');
        }
        
        keysContainer.appendChild(button);
    });

    keysContainer.addEventListener('click', function(e) {
        if (e.target.tagName === 'BUTTON') {
            const buttonText = e.target.textContent;

            if (buttonText >= '0' && buttonText <= '9' || buttonText === '.') {
                currentInput += buttonText;
                display.value = currentInput;
            } else if (buttonText === 'C') {
                currentInput = '';
                previousInput = '';
                operator = '';
                display.value = '';
            } else if (buttonText === '=') {
                if (currentInput && previousInput && operator) {
                    currentInput = eval(`${previousInput} ${operator} ${currentInput}`);
                    display.value = currentInput;
                    previousInput = '';
                    operator = '';
                }
            } else if (['sqrt', 'sin', 'cos', 'tan', 'log'].includes(buttonText)) {
                if(currentInput) {
                    currentInput = Math[buttonText](parseFloat(currentInput)).toString();
                    display.value = currentInput;
                }
            } else { // operators
                if (currentInput) {
                    if (previousInput) {
                        currentInput = eval(`${previousInput} ${operator} ${currentInput}`);
                        display.value = currentInput;
                    }
                    operator = buttonText;
                    previousInput = currentInput;
                    currentInput = '';
                }
            }
        }
    });
}); 