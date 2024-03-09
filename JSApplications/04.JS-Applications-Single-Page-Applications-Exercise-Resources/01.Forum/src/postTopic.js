start();
function start() {
  const form = document.querySelector('form');
  form.addEventListener('submit', onPosting);
}
//create a post -- will be moved in another file -- export
async function onPosting(event) {
  event.preventDefault();
  const cancelClicked = event.target.classList.contains('cancel');
  if (cancelClicked) {
    debugger;
    form.reset();
    return;
  }
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());
  const postText = data.postText.trim();
  const topicName = data.topicName.trim();
  const username = data.username.trim();

  const url = 'http://localhost:3030/jsonstore/collections/myboard/posts';
  try {
    const request = await fetch(url, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ postText, topicName, username }),
    });
    if (!request.ok) {
      const err = await request.json();
      throw new Error(err.message);
    }
    const userPost = await request.json();
    debugger;
  } catch (err) {
    alert(err.message);
  }
}

//create a function that creates the skeleton

//create a function
