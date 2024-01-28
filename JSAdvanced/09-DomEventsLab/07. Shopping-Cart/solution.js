function solve() {
  let textArea = document.querySelector('textarea');
  let addBtn = Array.from(document.querySelectorAll('.add-product'));

  let products = [];
  let totalPrice = 0;

  for (let btn of addBtn) {
    btn.addEventListener('click', addProductBtn);
  }

  function addProductBtn(event) {
    let productName = event.target.parentNode.parentNode.querySelector(
      '.product-details>.product-title'
    ).textContent;

    let price = event.target.parentNode.parentNode.querySelector(
      '.product-line-price'
    ).textContent;

    if (!products.includes(productName)) {
      products.push(productName);
    }

    totalPrice += Number(price);
    textArea.value += `Added ${productName} for ${price} to the cart.\n`;
  }
  let checkoutBtn = document.querySelector('.checkout');
  checkoutBtn.addEventListener('click', checkOutFn);
  function checkOutFn() {
    textArea.value += `You bought ${products.join(
      ', '
    )} for ${totalPrice.toFixed(2)}.`;
    for (let btn of addBtn) {
      btn.disabled = true;
      checkoutBtn.disabled = true;
    }
  }
}
