window.addEventListener('load', start);

const url = 'http://localhost:3030/jsonstore/collections/books';

const loadBtnRef = document.getElementById('loadBooks');
const form = document.querySelector('form');
const submitBtnRef = document.getElementById('submit');
const titleRef = document.querySelector('input[name="title"]');
const authorRef = document.querySelector('input[name="author"]');
const tbodyRef = document.querySelector('tbody');

let editUrl;

function start() {
  loadBtnRef.addEventListener('click', loadAllBooks);
}

async function loadAllBooks(ev) {
  ev.preventDefault();
  tbodyRef.innerHTML = '';
  const request = await fetch(url);
  const data = await request.json();

  const entries = Object.entries(data);
  const rows = entries.map(createRow);
  tbodyRef.replaceChildren(...rows);

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
  const formData = new FormData(form);
  const { author, title } = Object.fromEntries(formData.entries());
  try {
    const request = await fetch(url, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ author, title }),
    });
    if (!request.ok || !author || !title) {
      throw new Error('missing info');
    }
    titleRef.value = '';
    authorRef.value = '';
  } catch (err) {
    alert(err.message);
  }
}
async function onEditClick(e) {
  e.preventDefault();
  const id = e.target.dataset.id;
  editUrl = url + '/' + id;
  try {
    const request = await fetch(editUrl);
    const data = await request.json();
    const { author, title } = data;
    titleRef.value = title;
    authorRef.value = author;

    const h3 = document.querySelector('form h3');
    h3.textContent = 'Edit FORM';
    submitBtnRef.removeAttribute('id');
    submitBtnRef.setAttribute('id', 'save');
    submitBtnRef.textContent = 'Save';
    submitBtnRef.addEventListener('click', onSaveClick);
    if (!request.ok || !author || !title) {
      throw new Error('missing info');
    }
  } catch (err) {
    alert(err.message);
  }
}
async function onSaveClick(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const { author, title } = Object.fromEntries(formData.entries());

  try {
    const req = await fetch(editUrl, {
      method: `put`,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ author, title }),
    });
    if (!req.ok || !author || !title) {
      throw new Error('missing info');
    }
    submitBtnRef.removeAttribute('id');
    submitBtnRef.setAttribute('id', 'submit');
    submitBtnRef.textContent = 'Submit';

    titleRef.value = '';
    authorRef.value = '';
  } catch (err) {
    alert(err.message);
  }
}
async function onDeleteClick(e) {
  const id = e.target.dataset.id;
  const deleteUrl = url + '/' + id;
  await fetch(deleteUrl, { method: 'delete' });
  titleRef.value = '';
  authorRef.value = '';
}

/* Judge accepts this one 
const url = "http://localhost:3030/jsonstore/collections/books";
const resultTbody = document.querySelector("tbody");
const headingForm = document.querySelector("form h3");
 
const titleInput = document.querySelector("input[name='title']");
const authorInput = document.querySelector("input[name='author']");
 
const loadBtn = document.getElementById("loadBooks");
loadBtn.addEventListener("click", loadBooks);
 
const form = document.querySelector("form");

const submitBtn = document.querySelector("form button");
submitBtn.addEventListener("click", async (ev) => {
  ev.preventDefault();
  createNewBook({
    title: titleInput.value,
    author: authorInput.value,
  });
});
 
async function loadBooks(ev) {
  ev.preventDefault();
  resultTbody.innerHTML = "";
  try {
    const response = await fetch(url);
    const data = await response.json();
    Object.entries(data).map(appendBooks);
  } catch (error) {
    alert(error);
  }
}
 
function appendBooks(data) {
  const [idKey, { author, title }] = data;
 
  const tr = document.createElement("tr");
  tr.dataset.id = idKey;
 
  const tdAuthor = el("td", author);
  const tdTitle = el("td", title);
  tr.appendChild(tdTitle);
  tr.appendChild(tdAuthor);
 
  const editBtn = el("button", "Edit");
  const deleteBtn = el("button", "Delete");
 
  editBtn.addEventListener("click", onEdit);
  deleteBtn.addEventListener("click", onDelete);
 
  tr.appendChild(editBtn);
  tr.appendChild(deleteBtn);
  resultTbody.appendChild(tr);
}
 
async function onEdit(e) {
  const saveBtn = el("button", "Save");
  saveBtn.addEventListener("click", onSave);
 
  const bookRef = e.target.parentElement;
  headingForm.textContent = "Edit " + headingForm.textContent;
  submitBtn.replaceWith(saveBtn);
 
  const [title, author] = bookRef.querySelectorAll("td");
  const data = {
    title: title.textContent,
    author: author.textContent,
    id: bookRef.dataset.id,
  };
 
  titleInput.value = data.title;
  authorInput.value = data.author;
 
  async function onSave() {
    try {
      await fetch(url + "/" + data.id, {
        method: "patch",
        body: JSON.stringify({ author: data.author, title: data.title }),
      });
    } catch (error) {
      alert(error);
    }
  }
}
 
async function onDelete(e) {
  const idBook = e.target.parentElement.dataset.id;
  try {
    await fetch(url + "/" + idBook, {
      method: "delete",
    });
    loadBooks();
  } catch (error) {
    alert(error);
  }
}
 
async function createNewBook(data) {
  const { title, author } = data;
  if (!title || !author) {
    return;
  }
 
  try {
    await fetch(url, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, author }),
    });
    form.reset();
  } catch (error) {
    alert(error);
  }
}
 
function el(type, cont) {
  const el = document.createElement(type);
  el.textContent = cont;
  return el;
} */
