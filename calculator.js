document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.button');

    let firstNumber = '';
    let operator = '';
    let secondNumber = '';
    let displayValue = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            if (value >= '0' && value <= '9' || value === '.') {
                handleNumber(value);
            } else if (value === 'C') {
                clearDisplay();
            } else if (value === '=') {
                calculateResult();
            } else {
                handleOperator(value);
            }

            updateDisplay();
        });
    });

    function handleNumber(value) {
        if (operator === '') {
            firstNumber += value;
            displayValue = firstNumber;
        } else {
            secondNumber += value;
            displayValue = secondNumber;
        }
    }

    function handleOperator(value) {
        if (firstNumber !== '' && secondNumber !== '') {
            calculateResult();
            operator = value;
        } else {
            operator = value;
        }
    }

    function calculateResult() {
        if (firstNumber !== '' && operator !== '' && secondNumber !== '') {
            displayValue = operate(operator, firstNumber, secondNumber).toString();
            firstNumber = displayValue;
            operator = '';
            secondNumber = '';
        }
    }

    function clearDisplay() {
        firstNumber = '';
        operator = '';
        secondNumber = '';
        displayValue = '';
    }

    function updateDisplay() {
        display.textContent = displayValue || '0';
    }

    function operate(operator, a, b) {
        a = parseFloat(a);
        b = parseFloat(b);
        switch (operator) {
            case '+':
                return add(a, b);
            case '-':
                return subtract(a, b);
            case '*':
                return multiply(a, b);
            case '/':
                return divide(a, b);
            default:
                return null;
        }
    }

    function add(a, b) {
        return a + b;
    }

    function subtract(a, b) {
        return a - b;
    }

    function multiply(a, b) {
        return a * b;
    }

    function divide(a, b) {
        if (b === 0) {
            return 'Error';
        }
        return a / b;
    }
});
