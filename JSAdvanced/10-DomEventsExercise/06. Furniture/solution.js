function solve() {
  const [inputAreaRef, resultAreaRef] = document.querySelectorAll('textarea');
  const [generateBtnRef, buyBtnRef] = document.querySelectorAll('button');
  let tableRow = document.querySelector('tbody');
  generateBtnRef.addEventListener('click', generateInput);

  function generateInput(event) {
    let data = JSON.parse(inputAreaRef.value);
    for (let item of data) {
      let tr = document.createElement('tr'); //creating elements manually below
      tr.innerHTML += `<td><img src=${item.img}></td>`;
      tr.innerHTML += `<td><p>${item.name}</p></td>`;
      tr.innerHTML += `<td><p>${item.price}</p></td>`;
      tr.innerHTML += `<td><p>${item.decFactor}</p></td>`;
      tr.innerHTML += `<td><input type='checkbox'></td>`;
      tableRow.appendChild(tr);
    }
  }

  buyBtnRef.addEventListener('click', buyHandler);

  function buyHandler(event) {
    let name = [];
    let price = 0;
    let sumDecFac = 0;
    let selectedRows = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    );
    for (let checkbox of selectedRows) {
      let [imgRef, nameRef, priceRef, decFactorRef] = Array.from(
        checkbox.parentElement.parentElement.children
      );
      let nameValue = nameRef.children[0].textContent;
      let priceValue = Number(priceRef.children[0].textContent);
      let decFactorValue = Number(decFactorRef.children[0].textContent);
      name.push(nameValue);
      price += priceValue;
      sumDecFac += decFactorValue;
    }
    resultAreaRef.value = `Bought furniture: ${name.join(
      ', '
    )}\nTotal price: ${price.toFixed(2)}\nAverage decoration factor: ${
      sumDecFac / name.length
    }`;
  }
}
