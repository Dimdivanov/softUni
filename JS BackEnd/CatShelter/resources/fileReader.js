const fs = require('fs').promises;

async function fileReader(url, res) {
  try {
    let type;
    if (url.includes('.css')) {
      type = 'text/css';
    } else if (url.includes('ico')) {
      type = 'image/x-icon';
    } else {
      type = 'text/html';
    }
    const data = await fs.readFile(url, 'utf8');
    res.writeHead(200, {
      'Content-Type': type,
    });
    res.write(data);
    res.end();
  } catch (err) {
    console.error(err.message);
    res.writeHead(500, {
      'Content-Type': 'text/plain',
    });
    res.write('Internal Server Error');
    res.end();
  }
}

module.exports = {
  fileReader,
};
