const cats = require('../data/dataCats.json');
const breed = require('../data/dataBreeds.json');

async function postEditCat(req, res) {

    let body = '';
    req.on('data', chunk => {
        body += chunk.toString()
    })
    req.on('end', ()=> {
        console.log(body);
    })
    res.statusCode(204);
    res.end();
}

module.exports = {
    postEditCat,
}