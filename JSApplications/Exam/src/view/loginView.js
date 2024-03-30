import { html } from '../../node_modules/lit-html/lit-html.js';
import { userService } from '../service/userService.js';
import { userHelper } from '../utility/userHelper.js';
import { notify } from './notify.js';

const loginViewTemp = (data) => html`
  <section id="login">
    <div class="form">
      <h2>Login</h2>
      <form @submit="${onLogin}" class="login-form">
        <input type="text" name="email" id="email" placeholder="email" />
        <input type="password" name="password" id="password" placeholder="password" />
        <button type="submit">login</button>
        <p class="message">Not registered? <a href="/register">Create an account</a></p>
      </form>
    </div>
  </section>
`;

let context = null;
export function showLoginView(ctx) {
  context = ctx;
  context.render(loginViewTemp());
}

async function onLogin(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const { email, password } = Object.fromEntries(formData);

  try {
    if (!email || !password) {
      throw new Error('Error login');
    }
    
    const userData = await userService.login({ email, password });
    userHelper.setUserData(userData);
    context.updateNav();
    context.goTo('/home');
  } catch (error) {
    notify(error.message);
  }
}
