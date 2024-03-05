function attachEvents() {
  const btnSendRef = document.getElementById('submit');
  const btnRefreshRef = document.getElementById('refresh');
  const textAreaRef = document.getElementById('messages');

  const url = 'http://localhost:3030/jsonstore/messenger';

  btnSendRef.addEventListener('click', onSend);
  btnRefreshRef.addEventListener('click', onRefresh);

  async function onSend(e) {
    const authorRef = document.querySelector('input[name="author"]');
    const messageRef = document.querySelector('input[name="content"]');

    const message = messageRef.value;
    const author = authorRef.value;

    await fetch(url, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ author: author, content: message }),
    });
    messageRef.value = '';
    authorRef.value = '';
  }
  async function onRefresh(e) {
    textAreaRef.value = '';

    const response = await fetch(url);
    const data = await response.json();

    Object.values(data).forEach((msg) => {
      textAreaRef.value += `${msg.author}: ${msg.content}\n`;
    });
    textAreaRef.value = textAreaRef.value.trim();
  }
}

attachEvents();
