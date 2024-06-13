const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const { auth } = require('../middleware/authMiddleware');

function expressConfigurator(app) {
  app.use(express.static(path.resolve(__dirname, '../public')));
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(auth);

  return app;
}

module.exports = expressConfigurator;
