import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';

const URL = 'http://localhost:3030/jsonstore/collections/books';
const rootBody = document.querySelector('body');
reload();
async function reload() {
  const request = await dataService.getAllOption();
  const data = await request;
  const dataArray = Object.values(data);

  const startingTemplate = () => html`
    <button id="loadBooks">LOAD ALL BOOKS</button>
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <!-- forEach element of dataArray create trs -->
        ${dataArray.map(
          (book) => html`
            <tr>
              <td>${book.title}</td>
              <td>${book.author}</td>
              <td>
                <button data-id="${book._id}" class="edit-btn">Edit</button>
                <button data-id="${book._id}" class="delete-btn">Delete</button>
              </td>
            </tr>
          `
        )}
      </tbody>
    </table>
    <form id="add-form">
      <h3>Add book</h3>
      <label>TITLE</label>
      <input type="text" name="title" placeholder="Title..." />
      <label>AUTHOR</label>
      <input type="text" name="author" placeholder="Author..." />
      <input type="submit" value="Submit" />
    </form>
    <form id="edit-form" style="display: none;">
      <input type="hidden" name="id" />
      <h3>Edit book</h3>
      <label>TITLE</label>
      <input type="text" name="title" placeholder="Title..." />
      <label>AUTHOR</label>
      <input type="text" name="author" placeholder="Author..." />
      <input type="submit" value="Save" />
    </form>
  `;
  render(startingTemplate(), rootBody);

  const loadBooksBtn = document.getElementById('loadBooks');
  loadBooksBtn.addEventListener('click', reload);

  const addForm = document.getElementById('add-form');
  addForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(addForm);

    const title = formData.get('title');
    const author = formData.get('author');
    debugger;
    await dataService.postNewOption({ title, author });
    reload();
  });

  const editButtons = document.querySelectorAll('.edit-btn');
  editButtons.forEach((button) => {
    button.addEventListener('click', onEditClick);
  });
  function onEditClick(event) {
    const bookId = event.target.dataset.id;
    debugger;
    // Implement edit functionality
  }
  const deleteButtons = document.querySelectorAll('.delete-btn');
  deleteButtons.forEach((button) => {
    button.addEventListener('click', async (event) => {
      const bookId = event.target.dataset.id;
      // Implement delete functionality
    });
  });
}
