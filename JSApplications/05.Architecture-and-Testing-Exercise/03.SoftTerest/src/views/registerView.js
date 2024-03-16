import { register } from '../api/userService.js';
import { setUser } from '../utils/userUtils.js';
const registerSection = document.querySelector('div[data-view-name="register"]');
const form = registerSection.querySelector('form').addEventListener('submit', onSubmit);
//creating a renderer and context object in app.js
let context = null; //important step1
export function showRegisterView(ctx) {
  context = ctx; //important step2 - става глобален за файла
  context.render(registerSection);
}

async function onSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const { email, password, repeatPassword } = Object.fromEntries(formData);

  if (email.length < 3 || password.length < 3 || password !== repeatPassword) {
    return alert('Register Error');
  }

  // time to register we need service
  const userData = await register({ email, password });
  setUser(userData);
  //time to navigate to another page - goTo
  context.updateNav();
  context.goTo('/home');
  form.reset();
}
