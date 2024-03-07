const loadBtnRef = document.getElementById('loadBooks');
const form = document.querySelector('form');
const submitBtnRef = document.getElementById('submit');
const titleRef = document.querySelector('input[name="title"]');
const authorRef = document.querySelector('input[name="author"]');

const url = 'http://localhost:3030/jsonstore/collections/books';
let editUrl;

loadBtnRef.addEventListener('click', loadAllBooks);
async function loadAllBooks(ev) {
  const request = await fetch(url);
  const data = await request.json();

  const entries = Object.entries(data);
  const rows = entries.map(createRow);
  document.querySelector('tbody').replaceChildren(...rows);

  const editBtnRef = Array.from(document.getElementsByClassName('edit'));
  editBtnRef.forEach((el) => el.addEventListener('click', onEditClick));
  const deleteBtnRef = Array.from(document.getElementsByClassName('delete'));
  deleteBtnRef.forEach((el) => el.addEventListener('click', onDeleteClick));
}

function createRow([key, value]) {
  const element = document.createElement(`tr`);
  element.innerHTML = `
  <td>${value.title}</td>
  <td>${value.author}</td>
  <td>
  <button data-id="${key}"class="edit">Edit</button>
  <button data-id="${key}"class="delete">Delete</button>
  </td>`;

  return element;
}

form.addEventListener('submit', onSubmit);
async function onSubmit(ev) {
  ev.preventDefault();
  if (submitBtnRef.id == 'save') {
    return;
  }
  const formData = new FormData(form);
  const { author, title } = Object.fromEntries(formData.entries());
  if (!author || !title) {
    return;
  }
  const request = await fetch(url, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ author, title }),
  });
}
async function onEditClick(e) {
  e.preventDefault();
  const id = e.target.dataset.id;
  editUrl = url + '/' + id;

  const request = await fetch(editUrl);
  const data = await request.json();
  const { author, title } = data;

  titleRef.value = title;
  authorRef.value = author;

  const h3 = form.querySelector('h3');
  h3.textContent = 'Edit FORM';
  submitBtnRef.removeAttribute('id');
  submitBtnRef.setAttribute('id', 'save');
  submitBtnRef.textContent = 'Save';
  submitBtnRef.addEventListener('click', onSaveClick);
}
async function onSaveClick(e) {
  if (submitBtnRef.id == 'submit') {
    return;
  }
  const formData = new FormData(form);
  const { author, title } = Object.fromEntries(formData.entries());

  if (!author || !title) {
    return;
  }

  await fetch(editUrl, {
    method: `put`,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ author, title }),
  });
  submitBtnRef.removeAttribute('id');
  submitBtnRef.setAttribute('id', 'submit');
  submitBtnRef.textContent = 'Submit';

  titleRef.value = '';
  authorRef.value = '';
}
async function onDeleteClick(e) {
  const id = e.target.dataset.id;
  const deleteUrl = url + '/' + id;
  await fetch(deleteUrl, { method: 'delete' });
}
