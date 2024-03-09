const formRef = document.querySelector('form');
const logoutRef = (document.getElementById('logout').style.display = 'none');

const url = 'http://localhost:3030/users/login';

formRef.addEventListener('submit', onloginClicked);
async function onloginClicked(ev) {
  ev.preventDefault();
  const formData = new FormData(formRef);
  const { email, password } = Object.fromEntries(formData.entries());
  try {
    const response = await fetch(url, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.message);
    }
    const data = await response.json();
    const userData = {
      email: data.email,
      id: data._id,
      token: data.accessToken,
    };
    localStorage.setItem('userData', JSON.stringify(userData));
    window.location = './index.html';
  } catch (err) {
    document.querySelector('form').reset();
    alert(err.message);
  }
}
/*//============================= login.js ===============================
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
*/
