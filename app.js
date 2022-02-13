function updateProductNumberAndPrice(product, price, isIncreasing) {
    const productInput = document.getElementById(product + 'Number');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    };
    productInput.value = productNumber;

    const productTotal = document.getElementById(product + 'Total');
    productTotal.innerText = productNumber * price;

    calculateTotal();
};
// subTotal & tax & Total start
function getProductInput(product) {
    const productInput = document.getElementById(product + 'Number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
};

function calculateTotal() {
    const phoneTotal = getProductInput('phone') * 1219;
    const caseTotal = getProductInput('case') * 59;
    const subTotal = phoneTotal + caseTotal;

    const taxAmount = subTotal / 10;

    const totalPrice = subTotal + taxAmount;

    document.getElementById('subTotal').innerText = subTotal;
    document.getElementById('taxAmount').innerText = taxAmount;
    document.getElementById('totalPrice').innerText = totalPrice;
};
// subTotal & tax & Total end
document.getElementById('phonePlusBtn').addEventListener('click', function () {
    updateProductNumberAndPrice('phone', 1219, true);
});
document.getElementById('phoneMinusBtn').addEventListener('click', function () {
    updateProductNumberAndPrice('phone', 1219, false)
});

document.getElementById('casePlusBtn').addEventListener('click', function () {
    updateProductNumberAndPrice('case', 59, true);
});
document.getElementById('caseMinusBtn').addEventListener('click', function () {
    updateProductNumberAndPrice('case', 59, false);
});
