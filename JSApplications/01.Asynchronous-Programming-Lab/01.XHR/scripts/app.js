function loadRepos() {
  const result = document.getElementById('res');

  fetch('https://api.github.com/users/testnakov/repos')
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      result.textContent = data;
    });
}
