//============================= app.js ===============================
const userData = JSON.parse(localStorage.getItem('userData'));

if (userData) {
  document.querySelector('.email span').textContent = userData.email;
  document.querySelector('#guest').style.display = 'none';
  document.querySelector('#addForm .add').disabled = false;
  loadData();
} else {
  document.getElementById('user').style.display = 'none';
}

document.querySelector('.load').addEventListener('click', loadData);
document.querySelector('#addForm').addEventListener('submit', onSubmit);
document.querySelector('#main').addEventListener('click', buttonDelegation);
document.querySelector('#logout').addEventListener('click', onLogout);
document.getElementById('catches').innerHTML = '';

async function onLogout() {
  await fetch('http://localhost:3030/users/logout', {
    method: 'get',
    headers: {
      'X-Authorization': userData.token,
    },
  });
  localStorage.clear();
  document.querySelector('#logout').style.disabled = 'none';
  document.querySelector('#addForm .add').disabled = 'true';
  document.querySelector('#guest').style.display = 'inline-block';
}

async function onSubmit(e) {
  e.preventDefault();

  if (!userData) {
    window.location = './login.html';
    return;
  }

  const formData = new FormData(e.target);
  const data = [...formData.entries()].reduce(
    (acc, [k, v]) => Object.assign(acc, { [k]: v }),
    {}
  );

  try {
    if (Object.values(data).some((x) => x === '')) {
      throw new Error('All fields are requierd!');
    }

    const res = await fetch('http://localhost:3030/data/catches', {
      method: 'post',
      headers: {
        'Content-Type': 'aplication/json',
        'X-Authorization': userData.token,
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message);
    }
    loadData();
    e.target.reset();
  } catch (error) {
    alert(error.message);
  }
}

async function loadData() {
  const res = await fetch('http://localhost:3030/data/catches');
  const data = await res.json();
  document.getElementById('catches').replaceChildren(...data.map(createCatch));
}

function buttonDelegation(e) {
  const currBtn = e.target.textContent;
  const id = e.target.id === '' ? e.target.dataset.id : e.target.id;
  const currentCatchEl = e.target.parentElement;
  if (currBtn === 'Delete') {
    deleteCatch(id);
  } else if (currBtn === 'Update') {
    updateCatchElement(id, currentCatchEl);
  }
}

async function deleteCatch(id) {
  await fetch(`http://localhost:3030/data/catches/${id}`, {
    method: 'delete',
    headers: {
      'Content-Type': 'aplication/json',
      'X-Authorization': userData.token,
    },
  });
  loadData();
}

async function updateCatchElement(id, currentCatchEl) {
  let [angler, weight, species, location, bait, captureTime] =
    currentCatchEl.querySelectorAll('input');

  try {
    const res = await fetch(`http://localhost:3030/data/catches/${id}`, {
      method: 'put',
      headers: {
        'Content-Type': 'aplication/json',
        'X-Authorization': userData.token,
      },
      body: JSON.stringify({
        angler: angler.value,
        weight: +weight.value,
        species: species.value,
        location: location.value,
        bait: bait.value,
        captureTime: +captureTime.value,
      }),
    });
    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message);
    }
  } catch (error) {
    alert(error.message);
  }
  loadData();
}

function createCatch(data) {
  const isDisabled = userData && data._ownerId === userData.id ? false : true;
  const catches = createElement(
    'div',
    { class: 'catch' },
    createElement('label', {}, 'Angler'),
    createElement('input', {
      type: 'text',
      class: 'angler',
      value: data.angler,
      disabled: isDisabled,
    }),
    createElement('label', {}, 'Weight'),
    createElement('input', {
      type: 'text',
      class: 'weight',
      value: data.weight,
      disabled: isDisabled,
    }),
    createElement('label', {}, 'Species'),
    createElement('input', {
      type: 'text',
      class: 'species',
      value: data.species,
      disabled: isDisabled,
    }),
    createElement('label', {}, 'Location'),
    createElement('input', {
      type: 'text',
      class: 'location',
      value: data.location,
      disabled: isDisabled,
    }),
    createElement('label', {}, 'Bait'),
    createElement('input', {
      type: 'text',
      class: 'bait',
      value: data.bait,
      disabled: isDisabled,
    }),
    createElement('label', {}, 'Capture Time'),
    createElement('input', {
      type: 'text',
      class: 'captureTime',
      value: data.captureTime,
      disabled: isDisabled,
    }),
    createElement(
      'button',
      { class: 'update', id: data._id, disabled: isDisabled },
      'Update'
    ),
    createElement(
      'button',
      { class: 'delete', id: data._id, disabled: isDisabled },
      'Delete'
    )
  );
  return catches;
}

function createElement(type, attr, ...content) {
  const element = document.createElement(type);
  for (const item in attr) {
    if (item == 'class') {
      element.classList.add(attr[item]);
    } else if (item == 'disabled') {
      element.disabled = attr[item];
    } else {
      element[item] = attr[item];
    }
  }

  for (let item of content) {
    if (typeof item == 'string' || typeof item == 'number') {
      item = document.createTextNode(item);
    }
    element.appendChild(item);
  }
  return element;
}

//============================= login.js ===============================
const loginForm = document.querySelector('form');
loginForm.addEventListener('submit', userLogin);
document.getElementById('user').style.display = 'none';

async function userLogin(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const email = formData.get('email');
  const password = formData.get('password');
  try {
    const res = await fetch('http://localhost:3030/users/login', {
      method: 'post',
      headers: { 'Content-Type': 'aplication/json' },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    if (!res) {
      const error = await res.json();
      throw new Error(error.message);
    }
    const data = await res.json();
    const userData = {
      email: data.email,
      id: data._id,
      token: data.accessToken,
    };
    localStorage.setItem('userData', JSON.stringify(userData));
    window.location = './index.html';
  } catch (error) {
    document.querySelector('form').reset();
    alert(error.message);
  }
}

// =============================== register.js ========================

const registerForm = document.querySelector('form');
const url = 'http://localhost:3030/users/register';
registerForm.addEventListener('submit', onUserGegister);

async function onUserGegister(e) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const { email, password, rePass } = Object.fromEntries(formData);
  try {
    if ([...formData.values()].some((el) => el == '')) {
      throw new Error('Input is not corect');
    } else if (password != rePass) {
      throw new Error('The password do not match');
    }

    const res = await fetch(url, {
      method: 'post',
      headers: { 'Content-Type': 'aplication/json' },
      body: JSON.stringify({
        email,
        password,
        rePass,
      }),
    });
    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message);
    }
    const data = await res.json();
    const user = {
      email: data.email,
      id: data._id,
      token: data.accessToken,
    };
    localStorage.setItem('userData', JSON.stringify(user));
    window.location = './index.html';
  } catch (error) {
    document.querySelector('form').reset();
    alert(error.message);
  }
}
