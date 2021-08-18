
function updateNumber(product,pirce,isAdd) {
    const productInput = document.getElementById(product +'-number');
    let productNumber = productInput.value;
    if (isAdd) {
        productNumber = parseInt(productNumber) + 1;
    } else {
        if (productInput.value > 0) {
            productNumber = parseInt(productNumber) - 1;
        }
    }
    productInput.value = productNumber;
    let productTotal = document.getElementById(product +'-total');
    productTotal.innerText = productNumber * pirce;
    calculatTotal();
}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

//calculateTotal
function calculatTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const total = subTotal + tax;
    document.getElementById('subTotal').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = total;
}
calculatTotal();
document.getElementById('case-plus').addEventListener('click', function () {
    updateNumber('case', 59, true);
    
})

document.getElementById('case-minus').addEventListener('click', function () {
    updateNumber('case', 59, false);
})
// phone 
document.getElementById('phone-pluse').addEventListener('click', function () {
    updateNumber('phone',1219, true);
})

document.getElementById('phone-minus').addEventListener('click', function () {
    updateNumber('phone', 1219,false);
})