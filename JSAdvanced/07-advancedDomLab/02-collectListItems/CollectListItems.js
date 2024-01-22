function extractText() {
  let result = []; // масив да държи резултата
  let list = document.getElementById('items'); // намираме елемента И СЕЛЕКТИРАМЕ

  let items = Array.from(list.children); // взимаме неговите деца
  for (let item of items) {
    // минаваме през всеки от елементите ЧЕТЕМ
    result.push(item.textContent); // текст контента на всеки елемент го запазваме
  }

  let textArea = document.getElementById('result'); // намираме на страницата къде ще е резултата СЕЛЕКТИРАМЕ
  textArea.value = result.join('\n'); // сетваме като value на конкретния резултат ПРОМЕНЯМЕ стойността
}
