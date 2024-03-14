import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';

const URL = 'http://localhost:3030/jsonstore/advanced/table';
const root = document.querySelector('tbody');

solve();
async function solve() {
  const request = await dataService.getAllOption(URL);
  const dataRaf = await request;

  const options = Object.values(dataRaf).map((el) => {
    const isSelected = el.firstName.toLowerCase().includes(input.toLowerCase()); // Adjust this condition as per your requirement
    return createrCont(el, isSelected);
  });
  render(options, root);

  document.querySelector('#searchBtn').addEventListener('click', onClick);

  function onClick() {
    const inputRef = document.getElementById('searchField');
    const input = inputRef.value.trim().toLowerCase();
    const tbody = document.querySelectorAll('tbody tr');

    for (let tr of tbody) {
      tr.classList.remove('select');
    }

    if (input === '') {
      inputRef.value = '';
      return;
    }

    for (let tr of tbody) {
      const rowData = tr.textContent.toLowerCase();
      if (rowData.includes(input)) {
        tr.classList.add('select');
      }
    }

    inputRef.value = '';
  }
}

function createrCont(data, isSelected) {
  return html`
    <tr class="${isSelected ? 'select' : ''}">
      <td>${data.firstName} ${data.lastName}</td>
      <td>${data.email}</td>
      <td>${data.course}</td>
    </tr>
  `;
}
