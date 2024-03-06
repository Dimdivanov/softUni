function attachEvents() {
  const btnLoadRef = document.getElementById('btnLoad');
  const ulRef = document.getElementById('phonebook');
  const createRef = document.getElementById('btnCreate');

  btnLoadRef.addEventListener('click', onLoad);
  createRef.addEventListener('click', onCreate);

  const personTextRef = document.getElementById('person');
  const phoneTextRef = document.getElementById('phone');

  const url = 'http://localhost:3030/jsonstore/phonebook';

  async function onCreate(ev) {
    const person = personTextRef.value;
    const phone = phoneTextRef.value;

    const request = await fetch(url, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ person, phone }),
    });

    personTextRef.value = '';
    phoneTextRef.value = '';
    onLoad();
  }

  async function onLoad(ev) {
    const request = await fetch(url);
    const data = await request.json();
    ulRef.innerHTML = '';
    Object.values(data).forEach((info) => {
      liCreator(info);
    });
  }
  function liCreator(data) {
    const liElement = document.createElement('li');
    liElement.textContent = `${data.person}: ${data.phone}`;

    const btnDelete = document.createElement('button');
    btnDelete.addEventListener('click', onDelete);
    btnDelete.textContent = 'Delete';
    btnDelete.dataset.id = data._id;

    liElement.appendChild(btnDelete);
    ulRef.appendChild(liElement);
  }
  async function onDelete(e) {
    let id = e.target.dataset.id;

    await fetch(url + '/' + id, { method: 'delete' });
    onLoad();
  }
}

attachEvents();
