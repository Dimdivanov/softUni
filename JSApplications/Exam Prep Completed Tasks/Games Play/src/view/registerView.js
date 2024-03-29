import { html } from '../../node_modules/lit-html/lit-html.js';
import { userService } from '../service/userService.js';
import { userHelper } from '../utility/userHelper.js';

const registerViewTemp = () => html`
  <section id="register-page" class="content auth">
    <form @submit="${onRegister}" id="register">
      <div class="container">
        <div class="brand-logo"></div>
        <h1>Register</h1>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="maria@email.com" />

        <label for="pass">Password:</label>
        <input type="password" name="password" id="register-password" />

        <label for="con-pass">Confirm Password:</label>
        <input type="password" name="confirm-password" id="confirm-password" />

        <input class="btn submit" type="submit" value="Register" />

        <p class="field">
          <span>If you already have profile click <a href="/login">here</a></span>
        </p>
      </div>
    </form>
  </section>
`;

let context = null;
export function showRegisterView(ctx) {
  context = ctx;
  ctx.render(registerViewTemp());
}

async function onRegister(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const email = formData.get('email');
  const password = formData.get('password');
  const rePass = formData.get('confirm-password');

  if (!email || !password || password !== rePass) {
    alert('Error Register');
    return;
  }

  const userData = await userService.register({ email, password });
  userHelper.setUserData(userData);
  context.updateNav();
  context.goTo('/home');
}
