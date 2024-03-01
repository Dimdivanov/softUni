function attachEvents() {
  const loadPostRef = document.getElementById('btnLoadPosts');
  const viewPostRef = document.getElementById('btnViewPost');
  const selectRef = document.getElementById('posts');
  const postComments = document.getElementById('post-comments');

  const h1 = document.getElementById('post-title');
  const p = document.getElementById('post-body');

  let urlPosts = 'http://localhost:3030/jsonstore/blog/posts';
  let urlComments = 'http://localhost:3030/jsonstore/blog/comments';

  loadPostRef.addEventListener('click', loadPost);
  async function loadPost(event) {
    //to do GET request
    const response = await fetch(urlPosts);
    const data = await response.json();

    selectRef.innerHTML = '';

    Object.values(data).forEach((post) => {
      selectRef.innerHTML += createOptions(post);
    });
  }
  function createOptions(postData) {
    return `<option value=${postData.id}>${postData.title}</option>`;
  }

  viewPostRef.addEventListener('click', viewPost);
  async function viewPost(event) {
    const currentPostId = selectRef.selectedOptions[0].value;
    const responseSingle = await fetch(urlPosts + '/' + currentPostId);
    const data = await responseSingle.json();

    const responseComments = await fetch(urlComments);
    const dataComments = await responseComments.json();
    const values = Object.values(dataComments);
    const filterComments = values.filter((x) => x.postId === currentPostId);

    h1.textContent = data.title;
    p.textContent = data.body;

    postComments.innerHTML = '';
    filterComments.forEach((x) => {
      const li = document.createElement('li');
      li.id = x.id;
      li.textContent = x.text;

      postComments.appendChild(li);
    });
  }
}

attachEvents();
