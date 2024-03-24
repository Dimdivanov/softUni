import { html } from '../../node_modules/lit-html/lit-html.js';
import { userService } from '../service/userService.js';
import { userHelper } from '../utility/userHelper.js';

const loginViewTemp = () => html`
  <section id="form-login" class="view-section">
    <form @submit="${onSubmit}" id="login-form" class="text-center border border-light p-5" action="" method="">
      <div class="form-group">
        <label for="email">Email</label>
        <input id="email" type="email" class="form-control" placeholder="Email" name="email" value="" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input id="password" type="password" class="form-control" placeholder="Password" name="password" value="" />
      </div>

      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </section>
`;

let context = null;
export function showLoginView(ctx) {
  context = ctx;
  ctx.render(loginViewTemp());
}

async function onSubmit(e) {
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
