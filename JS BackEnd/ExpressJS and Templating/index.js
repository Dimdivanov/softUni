const express = require('express');
const path = require('path');
const app = express();
const handlebars = require('express-handlebars');

//add handlebars to express
app.engine('hbs', handlebars.engine({ extname: 'hbs' }));
app.set('view engine', 'hbs');
app.get('/home', (req, res) => {
  res.render('home');
});
//using static
app.use(express.static('public')); //load all kinds of files from that directory

//Add third-party middleware
const bodyParser = express.urlencoded({ extended: false }); //this is a func
app.use(bodyParser); //req.body attaches the parsed post

//Add Middleware
//=global middleware
app.use((req, res, next) => {
  console.log(`Global middleware on ${req.method}: ${req.path}`);
  next();
});
//=partial route middleware
app.use('/cats', (req, res, next) => {
  console.log('middleware on cats');
  next();
});
//=specific route middleware
const someSpecificFunc = (req, res, next) => {
  console.log('specific middleware');
  next();
};
app.get('/specificpath', someSpecificFunc, (req, res) => {
  res.send('some specific route with middleware');
});

//Add Routes
//get, post, put, delete, update etc.
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});
app.get('/cats', (req, res) => {
  res.send('Hello from the /cats!');
});
//routing
app.get('/cats/:catId', (req, res) => {
  res.send(`Showing you the ${req.params.catId}`);
});
//routing
app.get('/cats/download', (req, res) => {
  //type1 download
  res.download('./pathofthefile.pdf', (err) => console.log(err));
  //type 2 attachment
  res.attachment('./filetodownload');
  // res.end has to be used here
  //type 3
  res.sendFile(path.resolve(__dirname, 'filePath'));
  // sendfile needs path lib and specific path - (path.resolve(__dirname, 'filePath '))
  //to display he file in the browser
});

//routing example
// app
//   .route('/home')
//   .get((req, res) => {
//     res.send('GET home page');
//   })
//   .post((req, res) => {
//     res.send('POST home page');
//   })
//   .all((req, res) => {
//     res.send('Everything else');
//   });

//redirect example
//kebab case to write paths
app.get('old-path-bla', (req, res) => {
  res.redirect('/cats');
});

//modular routers
//make hierarchy routers
app.listen(3000, () => console.log('Server is up on port 3000...'));
