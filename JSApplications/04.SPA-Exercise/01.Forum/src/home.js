import { loadPosts } from './post.js';

function loadHome() {
  const divsRef = document.querySelectorAll('.container');
  divsRef.forEach((el) => (el.style.display = 'none'));
  const homeRef = document.querySelector('.container main');
  homeRef.parentElement.style.display = 'block';
  start();
}

function start() {
  const url = 'http://localhost:3030/jsonstore/collections/myboard/posts';
  const formrRef = document.querySelector('form');
  formrRef.addEventListener('submit', addPost);
  const cancelBtn = document.querySelector('.cancel');
  cancelBtn.addEventListener('click', cleanFields);
  const posts = document.querySelector('.topic-container');
  showPosts();

  async function addPost(event) {
    event.preventDefault();
    let formData = new FormData(event.target);
    let title = formData.get('topicName').trim();
    let username = formData.get('username').trim();
    let content = formData.get('postText').trim();
    try {
      if (!title || !username || !content) {
        throw new Error('All fields are required!');
      }
      let res = await fetch(url, {
        method: 'post',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ title, username, content }),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message);
      }
      formrRef.reset();
      await showPosts();
    } catch (err) {
      alert(err.message);
    }
  }

  async function showPosts() {
    try {
      let res = await fetch(url);
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message);
      }
      let data = await res.json();
      posts.replaceChildren(...Object.values(data).map((el) => createPost(el)));
      let titles = document.querySelectorAll('.normal h2');
      titles.forEach((el) => el.addEventListener('click', loadPosts));
    } catch (err) {
      alert(err.message);
    }
  }

  function createPost(data) {
    let divEl = document.createElement('div');
    divEl.classList.add('topic-name-wrapper');
    let currentDate = new Date();
    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1;
    let year = currentDate.getFullYear();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    divEl.innerHTML = ` <div class="topic-name">
                            <a href="#" class="normal">
                            <h2 data-id="${data._id}">${data.title}</h2>
                            </a>
                            <div class="columns">
                            <div>
                            <p>Date: <time>${year}-${month}-${day}T${hours}:${minutes}:${seconds}</time></p>
                            <div class="nick-name">
                            <p>Username: <span>${data.username}</span></p>
                            </div>
                            </div>
                            </div>
                            </div>`;
    return divEl;
  }

  function cleanFields(event) {
    event.preventDefault();
    formrRef.reset();
  }
}

export { loadHome };
