const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        // Validate and sanitize input
        let expression = display.value;
        
        // Check for invalid characters
        if (/[^0-9+\-*/().]/.test(expression)) {
            throw new Error("Invalid character");
        }

        // Check for balanced parentheses
        if (!isBalanced(expression)) {
            throw new Error("Unmatched parentheses");
        }

        // Perform the calculation
        display.value = eval(expression);

        // Handle potential mathematical errors
        if (!isFinite(display.value)) {
            throw new Error("Math error");
        }
    } catch (error) {
        display.value = "Error";
    }
}

// Function to check if parentheses are balanced
function isBalanced(expression) {
    let stack = [];
    for (let char of expression) {
        if (char === '(') {
            stack.push('(');
        } else if (char === ')') {
            if (stack.length === 0) {
                return false;
            }
            stack.pop();
        }
    }
    return stack.length === 0;
}
