function calculate() {
    // Retrieve input values
    let num1 = parseFloat(document.getElementById('firstNumber').value);
    let num2 = parseFloat(document.getElementById('secondNumber').value);
    let operation = document.getElementById('operation').value;
    let resultElement = document.getElementById('result');

    // Check if input values are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        resultElement.textContent = 'Please enter valid numbers';
        resultElement.className = 'invalid';
        return;
    }

    // Perform calculation based on selected operation
    let result;
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            // Check for division by zero
            if (num2 === 0) {
                resultElement.textContent = 'Cannot divide by zero';
                return;
            }
            result = num1 / num2;
            break;
        default:
            resultElement.textContent = 'Invalid operation';
            resultElement.className = 'invalid';
            return;
    }

    // Display the result
    resultElement.textContent = 'Result: ' + result;
    resultElement.className = '';
}
