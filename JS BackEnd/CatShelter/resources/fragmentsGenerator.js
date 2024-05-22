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
  <form action="/edit/cat/${cats.id}" method="post" class="cat-form" enctype="multipart/form-data">
        <h2>Edit Cat</h2>
        <label for="name">Name</label>
        <input type="text" id="name" name="name" value="${cats.name}" />
        <label for="description">Description</label>
        <textarea id="description" name="description">${cats.description}</textarea>
        <label for="image">Image</label>
        <input type="file" id="image" name="image" />
        <label for="group">Breed</label>
        <select id="group" name="breed">
          <option value="Fluffy Cat">${cats.breed}</option>
        </select>
        <button type="submit">Edit Cat</button>
  </form>
  `;
}

function shelterTheCat(cats) {
  return `
  <form action="" method="POST" class="cat-form">
        <h2>Shelter the cat</h2>
        <img src=${cats.imageUrl} alt="" />
        <label for="name">Name</label>
        <input type="text" id="name" value=${cats.name} disabled />
        <label for="description">Description</label>
        <textarea id="description" disabled>${cats.description}</textarea>
        <label for="group">Breed</label>
        <select id="group" disabled>
        <option value="">${cats.breed}</option>
        </select>
        <button>SHELTER THE CAT</button>
      </form>
  `;
}

function breedsDropDownMenu(breed) {
  return `
    <option value="Fluffy Cat">${breed}</option>
    `;
}

module.exports = {
  catFragment,
  catInfoFragment,
  shelterTheCat,
  breedsDropDownMenu,
};
