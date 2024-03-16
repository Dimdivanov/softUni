import { render, html } from './node_modules/lit-html/lit-html.js';
const mainRoot = document.querySelector('body');
let template = () => html` <button @click=${getData} id="loadBooks">LOAD ALL BOOKS</button>
  <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>

  <form @submit=${addData} id="add-form" style="display:block">
    <h3>Add book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title..." />
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author..." />
    <input type="submit" value="Submit" />
  </form>

  <form @submit=${editData} id="edit-form" style="display:none">
    <input type="hidden" name="id" />
    <h3>Edit book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title..." />
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author..." />
    <input type="submit" value="Save" />
  </form>`;
render(template(), mainRoot);
const tableRoot = document.querySelector('tbody');
const editFormRef = document.getElementById('edit-form');
const addFormRef = document.getElementById('add-form');
const url = 'http://localhost:3030/jsonstore/collections/books';

async function getData() {
  try {
    let res = await fetch(url);
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message);
    }
    let data = await res.json();
    let items = Object.entries(data);
    let createRows = (items) =>
      html` ${items.map(
        (el) => html`
          <tr>
            <td>${el[1].title}</td>
            <td>${el[1].author}</td>
            <td>
              <button @click=${showEditForm} data-id=${el[0]}>Edit</button>
              <button @click=${deleteData} data-id=${el[0]}>Delete</button>
            </td>
          </tr>
        `
      )}`;
    render(createRows(items), tableRoot);
  } catch (err) {
    alert(err.message);
  }
}

async function addData(event) {
  event.preventDefault();
  let formData = new FormData(event.target);
  let title = formData.get('title');
  let author = formData.get('author');

  try {
    if (!title || !author) {
      throw new Error('All fields required!');
    }
    let res = await fetch(url, {
      method: 'post',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ title, author }),
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message);
    }
    getData();
    event.target.reset();
  } catch (err) {
    alert(err.message);
  }
}

async function editData(event) {
  event.preventDefault();
  const id = event.target.dataset.id;
  let formData = new FormData(event.target);
  let title = formData.get('title');
  let author = formData.get('author');
  try {
    if (!title || !author) {
      throw new Error('All fields required!');
    }
    let res = await fetch(url + '/' + id, {
      method: 'put',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ title, author }),
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message);
    }
    getData();
    event.target.reset();
    editFormRef.style.display = 'none';
    addFormRef.style.display = 'block';
  } catch (err) {
    alert(err.message);
  }
}

async function deleteData(event) {
  let id = event.target.dataset.id;
  try {
    let res = await fetch(url + '/' + id, { method: 'delete' });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message);
    }
    getData();
  } catch (err) {
    alert(err.message);
  }
}

function showEditForm(event) {
  const id = event.target.dataset.id;
  editFormRef.style.display = 'block';
  addFormRef.style.display = 'none';
  editFormRef.dataset.id = id;
  const authorInput = document.querySelector("#edit-form input[name='author']");
  const titleInput = document.querySelector("#edit-form input[name='title']");
  const title = event.target.parentElement.parentElement.children[0];
  const author = event.target.parentElement.parentElement.children[1];
  titleInput.value = title.textContent;
  authorInput.value = author.textContent;
}
