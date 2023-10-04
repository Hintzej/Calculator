// Pull HTML elements
const displayBarNum = document.getElementById('numInput');
const displayBarSign = document.getElementById('signInput');
const displayBarOperand = document.getElementById('operandInput');
const buttons = document.querySelectorAll('button');

// Function to sort button result
function onButtonPress() {
    const buttonLabel = this.innerText;
    console.log(buttonLabel);

    if(!isNaN(buttonLabel) || buttonLabel === '.') {
        if (displayBarNum.innerText === '0') {
            displayBarNum.innerText = buttonLabel;
        } else {
            displayBarNum.innerText = displayBarNum.innerText + buttonLabel;
        }

    } else if(buttonLabel === '=') {
        solve('=');
    } else if(buttonLabel === 'c') {
        clear();
    } else {
        solve(buttonLabel);
    }
}

function solve(caller) {
    resolveSign();
    if (caller === '=') {
        displayBarSign.innerText = '';
    } else {
        displayBarSign.innerText = caller;
    }
    displayBarNum.innerText = '0';
}

function resolveSign(){

    switch (displayBarSign.innerText) {
        case '+':
            displayBarOperand.innerText = String(parseFloat(displayBarOperand.innerText) + parseFloat(displayBarNum.innerText));
            return;
        case '-':
            displayBarOperand.innerText = String(parseFloat(displayBarOperand.innerText) - parseFloat(displayBarNum.innerText));
            return;
        case '/':
            displayBarOperand.innerText = String(parseFloat(displayBarOperand.innerText) / parseFloat(displayBarNum.innerText));
            return;
        case '*':
            displayBarOperand.innerText = String(parseFloat(displayBarOperand.innerText) * parseFloat(displayBarNum.innerText));
            return;
        case '':
            displayBarOperand.innerText = displayBarNum.innerText;
    }
}

function clear() {
    displayBarNum.innerText = '0';
    displayBarSign.innerText = '';
    displayBarOperand.innerText = '';
}

// Attach sort function to all buttons
buttons.forEach(button => {
    button.addEventListener('click', onButtonPress);
})