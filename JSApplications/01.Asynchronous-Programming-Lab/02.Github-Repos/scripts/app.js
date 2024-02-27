function loadRepos() {
  const user = document.getElementById('username').value;
  const list = document.getElementById('repos');

  const url = `https://api.github.com/users/${user}/repos`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw 'Error';
      }
      return response.json();
    })
    .then(onSuccess)
    .catch((error) => {
      list.textContent = error;
    });

  function onSuccess(data) {
    list.replaceChildren(...data.map(createListItem));
  }
  function createListItem({ tml_url, full_name }) {
    const item = document.createElement('li');
    const anchro = document.createElement('a');
    anchro.href = tml_url;
    anchro.textContent = full_name;
    item.appendChild(anchro);
    return item;
  }
}
