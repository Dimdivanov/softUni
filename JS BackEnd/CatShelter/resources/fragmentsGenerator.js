const cats = require('../data/dataCats.json');

function catFragment(cats) {
  return `
    <li>
    <img src=${cats.imageUrl} />
    <h3>${cats.name}</h3>
    <p><span>Breed: </span>${cats.breed}</p>
    <p>
      <span>Description: </span>${cats.description}
    </p>
    <ul class="buttons">
      <li class="btn edit"><a href="edit/cat/${cats.id}">Change Info</a></li>
      <li class="btn delete"><a href="delete/cat/${cats.id}">New Home</a></li>
    </ul>
  </li>
    `;
}
function catInfoFragment(cats) {
  return `
    <form action="#" method="POST" class="cat-form" enctype="multipart/form-data">
        <h2>Edit Cat</h2>
        <label for="name">Name</label>
        <input type="text" id="name" value=${cats.name} />
        <label for="description">Description</label>
        <textarea id="description">${cats.description}</textarea>
        <label for="image">Image</label>
        <input type="file" id=${cats.imageUrl}/>
        <label for="group">Breed</label>
        <select id="group">
          <option value="Fluffy Cat">${cats.breed}</option>
        </select>
        <button>Edit Cat</button>
      </form>
    `;
}
module.exports = {
  catFragment,
  catInfoFragment,
};
