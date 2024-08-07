import { html } from '../../node_modules/lit-html/lit-html.js';
import { userService } from '../service/userService.js';
import { userHelper } from '../utility/userHelper.js';
import { notify } from './notify.js';

const registerViewTemp = () => html`
  <section id="register">
    <div @submit="${onRegister}" class="form">
      <h2>Register</h2>
      <form class="register-form">
        <input type="text" name="email" id="register-email" placeholder="email" />
        <input type="password" name="password" id="register-password" placeholder="password" />
        <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
        <button type="submit">register</button>
        <p class="message">Already registered? <a href="/login">Login</a></p>
      </form>
    </div>
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
  const rePass = formData.get('re-password');

  try {
    if (!email || !password || !rePass) {
      throw new Error('Error Register');
    }
    if (password !== rePass) {
      throw new Error("Passwords don't match");
    }
    const userData = await userService.register({ email, password });
    userHelper.setUserData(userData);
    context.updateNav();
    context.goTo('/home');
  } catch (error) {
    notify(error.message);
  }
}
