const username = 'yourUsername';
const password = 'yourPassword';
const credentials = btoa(`${username}:${password}`); //btoa - binary to ASCII - encodes the data

fetch('https://example.com/api/resource', {
  headers: {
    Authorization: `Basic ${credentials}`,
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error('Error:', error));
