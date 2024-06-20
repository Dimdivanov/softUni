const express = require('express');
const routes = require('./routes');
const cookieParser = require('cookie-parser');

const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');
const dataBaseConfig = require('./config/mongooseConfig');
const { authMiddleware } = require('./middlewares/authMiddleware');

async function start() {
  const app = express();
  await dataBaseConfig();
  
  app.use(cookieParser());
  app.use(authMiddleware);

  expressConfig(app);
  handlebarsConfig(app);

  app.use(routes);
  app.listen(3000, () => console.log(`App is listening on http://localhost:${3000}`));
}
start();
