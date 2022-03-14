function getPin() {
    let pin = Math.round(Math.random() * 10000);
    console.log(pin);
    let pinString = pin + '';
    if (pinString.length == 4) {
        // console.log(pin);
        document.getElementById('display-pin').value = pin;
        return pin;
    }
    else {
        // console.log('Got less than 4 digit and calling again', pin);
        return getPin();
    }
}

function generatePin() {
    getPin();
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    let number = event.target.innerText;
    let calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        console.log(number);
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {
        let previousNumber = calcInput.value;
        let newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
});

function verifyPin(){
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const successMessage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');
    if (pin == typedNumbers) {
        successMessage.style.display = 'block';
        failError.style.display = 'none';
    }
    else {
        successMessage.style.display = 'none';
        failError.style.display = 'block';
    }
}