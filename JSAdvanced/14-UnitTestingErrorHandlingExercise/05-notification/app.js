function notify(message) {
  let notificationDivRef = document.getElementById('notification');
  notificationDivRef.style.display = 'block';
  notificationDivRef.textContent = message;

  notificationDivRef.addEventListener('click', hideAgain);
  function hideAgain(event) {
    let tar = event.target;
    tar.style.display = 'none';
  }
}
