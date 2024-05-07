const url = require('url');
const queryString = require('querystring');

const myURL = url.parse('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');

console.log(myURL);

//output - Url {protocol: 'https:', slashes: true, auth: 'user:pass', host: 'sub.example.com:8080', port: '8080', …};

const qs = queryString.parse(myURL.search);

console.log(qs);

//output - {?query: 'string'} - обект с ключ-стойност;