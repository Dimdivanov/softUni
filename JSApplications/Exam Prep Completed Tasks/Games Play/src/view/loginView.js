import { html } from '../../node_modules/lit-html/lit-html.js';
import { userService } from '../service/userService.js';
import { userHelper } from '../utility/userHelper.js';

const loginViewTemp = (data) => html`
  <section id="login-page" class="auth">
    <form @submit="${onLogin} " id="login">
      <div class="container">
        <div class="brand-logo"></div>
        <h1>Login</h1>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Sokka@gmail.com" />

        <label for="login-pass">Password:</label>
        <input type="password" id="login-password" name="password" />
        <input type="submit" class="btn submit" value="Login" />
        <p class="field">
          <span>If you don't have profile click <a href="/register">here</a></span>
        </p>
      </div>
    </form>
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

  if (!email || !password) {
    return alert('Error login');
  }

  const userData = await userService.login({ email, password });
  userHelper.setUserData(userData);
  context.updateNav();
  context.goTo('/home');
}
