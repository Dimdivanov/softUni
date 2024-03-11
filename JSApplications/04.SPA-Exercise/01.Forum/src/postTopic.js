//what i learned: ако сложим евент лисънър на форм за да избегнем 2рия бутон
//на него му слагаме отделно лисънър с клик
//евент.таргет.ресет() занулява формуляра
//
start();
function start() {
  const form = document.querySelector('form');
  form.addEventListener('submit', onPosting);
  document.querySelector('.cancel').addEventListener('click', onCancelClick);
  const homeBtn = document
    .querySelector('nav ul li a')
    .addEventListener('click', homeClicked);
}
//create a post -- will be moved in another file -- export
async function onPosting(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());

  const postText = data.postText.trim();
  const topicName = data.topicName.trim();
  const username = data.username.trim();

  const url = 'http://localhost:3030/jsonstore/collections/myboard/posts';
  try {
    if (!postText || !topicName || !username) {
      throw new Error('Missing field');
    }
    const request = await fetch(url, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ postText, topicName, username }),
    });
    if (!request.ok) {
      const err = await request.json();
      throw new Error(err.message);
    }
    await request.json();
    event.target.reset();
    loadAllPosts();
  } catch (err) {
    alert(err.message);
  }
}
//attach with the creation
function onCancelClick(ev) {
  ev.preventDefault();
  const form = document.querySelector('form');
  form.reset();
}

//loading all posts when page opens;
async function loadAllPosts() {
  const url = 'http://localhost:3030/jsonstore/collections/myboard/posts';
  const topicContainer = document.querySelector('.topic-container');
  try {
    const request = await fetch(url);
    if (!request.ok) {
      const err = await request.json();
      throw new Error(err.message);
    }
    const data = await request.json();
    topicContainer.innerHTML = '';
    Object.values(data).forEach((el) => {
      createSkeleton(el.postText, el.topicName, el.username, el._id);
    });
  } catch (err) {
    alert(err.message);
  }
}
//create a function that creates the skeleton
function createSkeleton(postText, topicName, username, id) {
  const topicContainer = document.querySelector('.topic-container');

  const wrapperDiv = document.createElement('div');
  wrapperDiv.setAttribute('class', 'topic-name');
  const date = new Date();
  topicContainer.innerHTML += `
  <div class="topic-name-wrapper">
  <div class="topic-name">
  <a href="#${id}" class="normal">
  <h2>${topicName}</h2>
  </a>
  <div class="columns">
  <div>
  <p>Date: <time>${date.toISOString()}</time></p>
  <div class="nick-name">
  <p>Username: <span>${username}</span></p>
  </div>
  </div>
  </div>
  </div>
  </div>`;
  topicContainer.appendChild(wrapperDiv);
}

//when they click on the id
async function clickOnLinks() {
  debugger;
  console.log('i was clicked');
}
