import { html } from '../../node_modules/lit-html/lit-html.js';
import { userService } from '../service/userService.js';
import { userHelper } from '../utility/userHelper.js';

const registerViewTemp = () => html`
  <section id="form-sign-up" class="view-section">
    <form @submit="${onRegister}" id="register-form" class="text-center border border-light p-5" action="" method="">
      <div class="form-group">
        <label for="email">Email</label>
        <input id="email" type="email" class="form-control" placeholder="Email" name="email" value="" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input id="password" type="password" class="form-control" placeholder="Password" name="password" value="" />
      </div>

      <div class="form-group">
        <label for="repeatPassword">Repeat Password</label>
        <input
          id="repeatPassword"
          type="password"
          class="form-control"
          placeholder="Repeat-Password"
          name="repeatPassword"
          value=""
        />
      </div>

      <button type="submit" class="btn btn-primary">Register</button>
    </form>
  </section>
`;
let context = null;
export async function showRegisterView(ctx) {
  context = ctx;
  ctx.render(registerViewTemp());
}

async function onRegister(e) {
  e.preventDefault();
  const formData = new FormData(e.target);

  const email = formData.get('email');
  const password = formData.get('password');
  const rePass = formData.get('repeatPassword');

  if (!email || !password || password !== rePass) {
    alert('Error Register');
    return;
  }

  const userData = await userService.register({ email, password });
  userHelper.setUserData(userData);
  context.updateNav();
  context.goTo('/home');
}
