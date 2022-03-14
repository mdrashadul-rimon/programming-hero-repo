function updateProductNumber(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-number'); //munsiana giri korechi.. variable er moddhe string return korechi diye concatenate korechi
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    //case-total 
    let productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    calculateTotal();

}
//calculation of Sub Total
function getInputValue(product) {
    let productInput = document.getElementById(product + '-number');
    let productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal() {
    let phoneTotal = getInputValue('phone') * 1219; //string pathalam phone name a product er moddhe
    let caseTotal = getInputValue('case') * 59;
    let subTotal = phoneTotal + caseTotal;
    let tax = subTotal / 10;
    let totalPrice = subTotal + tax;
    // console.log(subTotal);
    // update on html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}


//phone increase and decrease
//plus button
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
})
//minus button
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
})

// Casing Increase decrease
//plus button
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
});
// minus button
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);
})