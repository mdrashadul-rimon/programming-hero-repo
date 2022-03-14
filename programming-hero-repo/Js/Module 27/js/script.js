//banking
let depositInput = document.getElementById('deposit-input');
let totalDeposit = document.getElementById('deposit-total');
let widthdrawInput = document.getElementById('widthdraw-input');
let totalWidthdraw = document.getElementById('widthdraw-total');
let totalBalance = document.getElementById('balance-total');


document.getElementById('confirm-deposit').addEventListener('click', function TotalDepositFunc() {
    //deposit
    let depositInputChange = parseFloat(depositInput.value);
    let changeValueOfTotalDeposit = parseFloat(totalDeposit.innerText);
    let sum = depositInputChange + changeValueOfTotalDeposit;
    totalDeposit.innerText = sum;
    //balance
    totalBalance.innerText = sum;
    depositInput.value = '';
});

document.getElementById('confirm-widthdraw').addEventListener('click', function () {
    let widthdrawInputChange = parseFloat(widthdrawInput.value);
    let changeValueOfTotalWidthdraw = parseFloat(totalWidthdraw.innerText);
    // console.log(widthdrawInputChange);
    // totalWidthdraw.innerText = widthdrawInputChange;

    let sub = sum - changeValueOfTotalWidthdraw;
    totalWidthdraw.innerText = sub;
});
