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
    selectRef.innerHTML = '';

    const response = await fetch(urlPosts);
    const data = await response.json();

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

    const responseSingle = await fetch(urlPosts);
    const data = await responseSingle.json();

    const currentPost = Object.values(responseSingle).filter(
      (x) => x.id === currentPostId
    );

    const responseComments = await fetch(urlComments);
    const dataComments = await responseComments.json();

    const values = Object.values(dataComments);
    const filterComments = values.filter((x) => x.postId == currentPostId);

    h1.textContent = currentPost.title;
    p.textContent = currentPost.body;

    postComments.innerHTML = '';
    filterComments.forEach((c) => {
      const li = document.createElement('li');

      li.id = c.id;
      li.textContent = c.text;

      postComments.appendChild(li);
    });
  }
}

attachEvents();

/*
New solution working in Judge - the above code works well. 
function attachEvents() {
  //Get DOM elements
  let postsSelect = document.querySelector('select#posts');
  let btnLoadPosts = document.getElementById('btnLoadPosts');
  let btnViewPost = document.getElementById('btnViewPost');
  let postTitle = document.getElementById('post-title');
  let postContent = document.getElementById('post-body');

  //Add event listeners
  btnLoadPosts.addEventListener('click', handleLoadPosts);
  btnViewPost.addEventListener('click', handleViewPost);
  let commonData;

  function handleLoadPosts() {
    //Get posts
    fetch('http://localhost:3030/jsonstore/blog/posts')
      .then((res) => res.json())
      .then((data) => addPosts(data));

    function addPosts(data) {
      commonData = data;

      postsSelect.innerHTML = '';

      for (let [id, postInfo] of Object.entries(data)) {
        //Create option
        let option = document.createElement('option');
        option.value = id;
        option.textContent = postInfo.title;
        option.dataset.body = postInfo.body;
        postsSelect.appendChild(option);
      }
    }
  }

  function handleViewPost() {
    //Get post id
    let selectedPostId = document.getElementById('posts').value;

    postTitle.textContent = commonData[selectedPostId].title;
    postContent.textContent = commonData[selectedPostId].body;

    //Fetch comments
    fetch('http://localhost:3030/jsonstore/blog/comments')
      .then((res) => res.json())
      .then((data) => handleComments(data));

    //Handle comments
    function handleComments(data) {
      let commentsUl = document.getElementById('post-comments');
      commentsUl.innerHTML = '';

      for (let [commentInfo] of Object.entries(data)) {
        if (commentInfo.postId == selectedPostId) {
          //Create comment li
          let li = document.createElement('li');
          li.id = commentInfo.id;
          li.textContent = commentInfo.text;
          commentsUl.appendChild(li);
        }
      }
    }
  }
}

attachEvents();
 */
