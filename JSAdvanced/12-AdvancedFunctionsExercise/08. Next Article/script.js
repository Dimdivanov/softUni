function getArticleGenerator(articles) {
  let divRef = document.getElementById('content');
  return function () {
    if (!articles.length <= 0) {
      let text = articles.shift();
      let newEl = document.createElement('article');
      let newDiv = document.createElement('content');
      divRef.appendChild(newEl);
      newEl.appendChild(newDiv);
      newDiv.textContent = text;
    }
  };
}
