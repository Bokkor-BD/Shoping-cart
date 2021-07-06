
function productPriceHandler(product, isIncrease) {
    const productInput = document.getElementById(product + "Number");
    const productCount = parseInt(productInput.value);
    let productNewCount = productCount;
    if (isIncrease == true) {
        productNewCount = productCount + 1;
    } else if (isIncrease == false && productCount > 0) {
        productNewCount = productCount - 1;
    }
    productInput.value = productNewCount;
    let totalProduct = productNewCount * product;
    if (product == 'phone') {
        totalProduct = productNewCount * 2000;
    }
    if (product == 'case') {
        totalProduct = productNewCount * 150;
    }
    document.getElementById(product + "Price").innerText = totalProduct;
    calculateprice();
}
function calculateprice() {
    const phoneCount = getInputValue('phone');
    const caseCount = getInputValue('case');
    const subtotal = phoneCount * 2000 + caseCount * 150;
    document.getElementById("subTotal").innerText = subtotal;
    const vat = Math.round(subtotal * 0.15);
    document.getElementById("vat").innerText = vat;
    const total = subtotal + vat;
    document.getElementById("total").innerText = total;
}
function getInputValue(product) {
    const productInput = document.getElementById(product + "Number");
    const productCount = parseInt(productInput.value);
    return productCount;
}
document.getElementById("checkoutBtn").addEventListener("click", function () {
    const submitPage = document.getElementById("submit-page");
    const orderPage = document.getElementById("order-page");
    orderPage.style.display = 'none';
    submitPage.style.display = 'block';
})
