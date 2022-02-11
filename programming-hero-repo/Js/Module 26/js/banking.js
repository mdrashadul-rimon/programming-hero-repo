//deposite
document.getElementById('deposit-btn').addEventListener('click', function () {
    let depositInput = document.getElementById('deposit-input');
    let depositTotal = document.getElementById('deposit-total');
    let balanceTotal = document.getElementById('balance-total');

    let b = parseFloat(depositInput.value);
    // const convert = b;
    // console.log(b);
    let total = parseFloat(depositTotal.innerText);
    let sum = total + b;
    // console.log(sum);
    depositTotal.innerText = sum;

    //update balance

    let c = parseFloat(balanceTotal.innerText);
    let newBalanceTotal = c + b;
    balanceTotal.innerText = newBalanceTotal;
    depositInput.value = '';
});


// handle withdraw event handler
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    console.log(newWithdrawAmount);

    // set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotal.innerText = newBalanceTotal;

    // clear withdraw input
    withdrawInput.value = '';
})