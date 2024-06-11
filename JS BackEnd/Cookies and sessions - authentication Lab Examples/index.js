const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');

const app = express();

const secret = 'aklsjdlasjkdlakjsdjklasdjlasjdl';

const db = {};

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res) => {
  const token = req.cookies['auth'];

  if (!token) {
    return res.send('Please login');
  }

  try {
    const decodedToken = jsonwebtoken.verify(token, secret);
    console.log(decodedToken);

    res.send(`Welcome ${decodedToken['username']}`);
  } catch (error) {
    res.status(403).send('Unauthorized');
  }
});

app.get('/login', (req, res) => {
  res.send(`
    <form action="/login" method="post">
        <label>Username</label>
        <input type="text" name="username" />
        <label>Password</label>
        <input type="password" name="password" />
        <input type="submit" value="login">
    </form>
    `);
});

app.post('/login', async (req, res) => {
  const hash = db[req.body.username];

  if (!hash) {
    return res.status(401).end();
  }

  // CHeck if password is valid
  const isValid = await bcrypt.compare(req.body.password, hash);

  if (!isValid) {
    return res.status(401).send('Unauthorized');
  }

  // Generate token
  const payload = {
    username: req.body.username,
  };

  // USE Synchronous sign, not recommended!
  const token = jsonwebtoken.sign(payload, secret, { expiresIn: '2h' });

  res.cookie('auth', token, { httpOnly: true });

  res.send('Logged in successfully');
});

app.get('/register', (req, res) => {
  res.send(`
    <form action="/register" method="post">
        <label>Username</label>
        <input type="text" name="username" />
        <label>Password</label>
        <input type="password" name="password" />
        <input type="submit" value="login">
    </form>
    `);
});

app.post('/register', async (req, res) => {
  // const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(req.body.password, 12);
  console.log(hash);
  db[req.body.username] = hash;

  res.redirect('/login');
});

app.get('/logout', (req, res) => {
  res.clearCookie('user');
  res.end();
});

app.listen(3000, () => console.log('Server is listening on http://localhost:3000...'));
