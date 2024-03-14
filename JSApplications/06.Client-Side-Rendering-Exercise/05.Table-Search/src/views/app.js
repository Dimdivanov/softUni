import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';

const URL = 'http://localhost:3030/jsonstore/advanced/table';
const root = document.querySelector('tbody');
let isActive = false;
solve();
async function solve() {
  const request = await dataService.getAllOption(URL);
  const dataRaf = await request;

  const options = Object.values(dataRaf).map((el) => createrCont(el));
  render(options, root);

  document.querySelector('#searchBtn').addEventListener('click', onClick);
  function onClick() {
    const inputRef = document.getElementById('searchField');
    const input = inputRef.value;
    const tbody = document.querySelectorAll('tbody tr');
    if (input == '') {
      return '';
    }
    for (let tr of tbody) {
      if (tr.textContent.includes(input)) {
        isActive = true;
      }
    }
  }
}

function createrCont(data, isActive) {
  return html`
    <tr class=${isActive ? 'select' : ''}>
      <td>${data.firstName} ${data.lastName}</td>
      <td>${data.email}</td>
      <td>${data.course}</td>
    </tr>
  `;
}
