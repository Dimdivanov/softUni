import { html } from '../../node_modules/lit-html/lit-html.js';
import { userService } from '../service/userService.js';
import { userHelper } from '../utility/userHelper.js';

const loginViewTemp = () => html`
  <section id="login">
    <div class="form">
      <img class="border" src="./images/border.png" alt="" />
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

  if (!email || !password) {
    alert('Error login');
    return;
  }

  const userData = await userService.login({ email, password });
  userHelper.setUserData(userData);
  context.updateNav();
  context.goTo('/');
}
