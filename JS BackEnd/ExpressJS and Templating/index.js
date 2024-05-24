const express = require('express');
const path = require('path');

const app = express();
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
//make hierarchy
app.listen(3000, () => console.log('Server is up on port 3000...'));
