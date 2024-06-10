const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');

const PORT = 3000;

const app = express();
//using cookies
app.use(cookieParser());
//encoding all posts
app.use(express.urlencoded({ extended: false }));
//disable x-powered-by to not display in browser
app.disable('x-powered-by');

app.get('/', (req, res) => {
  const user = req.cookies['user'];
  if (!user) {
    res.send('Please Login');
  } else {
    res.send(`Hello ${user}`);
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
app.post('/login', async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const saltedHash = await bcrypt.hash(req.body.password, salt);
  console.log(salt);
  console.log(saltedHash);
  bcrypt.compare(req.body.password, saltedHash, (err, res) => {
    console.log(res);
  });
  res.cookie('user', saltedHash);
  res.end();
});
app.listen(PORT, console.log(`Server is listening on port ${PORT}`));
