function loadPosts(event) {
  event.preventDefault();
  let id = event.target.dataset.id;
  const divsRef = document.querySelectorAll('.container');
  divsRef.forEach((el) => (el.style.display = 'none'));
  const homeRef = document.querySelector('.container .theme-content');
  homeRef.parentElement.style.display = 'block';
  start(id);
}

function start(id) {
  const url = 'http://localhost:3030/jsonstore/collections/myboard/comments';
  const commentRef = document.querySelector('.comment');
  const formRef = document.querySelector('.answer').children[0];
  formRef.addEventListener('submit', postComment);

  async function getPost(id) {
    const url = 'http://localhost:3030/jsonstore/collections/myboard/posts';
    try {
      const title = document.querySelector('.theme-name').children[0];
      let res = await fetch(url + '/' + id);
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message);
      }
      let data = await res.json();
      title.textContent = data.title;
      commentRef.replaceChildren(createElements(data));
      await getComments();
    } catch (err) {
      alert(err.message);
    }
  }

  async function postComment(event) {
    event.preventDefault();
    let formData = new FormData(event.target);
    let content = formData.get('postText');
    let username = formData.get('username');
    try {
      if (!content || !username) {
        throw new Error('All fields must fill!');
      }
      let res = await fetch(url, {
        method: 'post',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ content, username }),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message);
      }
      formRef.reset();
      await getComments();
    } catch (err) {
      alert(err.message);
    }
  }

  async function getComments() {
    try {
      let comments = document.querySelectorAll('#user-comment');
      comments.forEach((el) => el.remove());
      let res = await fetch(url);
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message);
      }
      let data = await res.json();
      let comment = Object.values(data).map((el) => createComment(el));
      comment.forEach((el) => commentRef.appendChild(el));
    } catch (err) {
      alert(err.message);
    }
  }

  function createElements(data) {
    let divEl = document.createElement('div');
    divEl.classList.add('header');
    divEl.dataset.id = id;
    let currentDate = new Date();
    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1;
    let year = currentDate.getFullYear();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    divEl.innerHTML = `<img src="/static/profile.png" alt="avatar">
                         <p><span>${data.username}</span> posted on <time>${year}-${month}-${day} ${hours}:${minutes}:${seconds}</time></p>
                         <p class="post-content">${data.content}</p>`;
    return divEl;
  }

  function createComment(data) {
    let divEl = document.createElement('div');
    divEl.id = 'user-comment';
    divEl.dataset.id = data._id;
    divEl.innerHTML = `<div class="topic-name-wrapper">
                 <div class="topic-name">
                 <p><strong>${data.username}</strong> commented on <time>3/15/2021, 12:39:02 AM</time></p>
                 <div class="post-content">
                 <p>${data.content}</p>
                 </div>
                 </div>
                 </div>`;
    return divEl;
  }
  getPost(id);
}

export { loadPosts };
