const express = require('express');
const session = require('express-session');

const PORT = 3000;

const app = express();
//using session
app.use(
  session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
//encoding all posts
app.use(express.urlencoded({ extended: false }));
//disable x-powered-by to not display in browser
app.disable('x-powered-by');

app.get('/', (req, res) => {
  console.log(req.session);
  if (req.session.user) {
    res.send(`Hello ${req.session.user.username}`);
  } else {
    res.send('Please Login');
  }
});

app.get('/login', (req, res) => {
  res.send(`
    <h2>Login Form</h2>
    <form action="/login" method="post">
        <label for="username">Username:</label><br>
        <input type="text" id="username" name="username" required><br><br>
        <label for="password">Password:</label><br>
        <input type="password" id="password" name="password" required><br><br>
        
        <button type="submit">Login</button>
    </form>
    `);
});
app.post('/login', (req, res) => {
  req.session.user = req.body;
  req.session.priveInfo = 'blablabla';
  res.end();
});
app.listen(PORT, console.log(`Server is listening on port ${PORT}`));
