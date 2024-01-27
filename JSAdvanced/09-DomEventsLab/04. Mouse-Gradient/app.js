function attachGradientEvents() {
  let gradient = document.getElementById('gradient');
  gradient.addEventListener('mousemove', gradMove);
  gradient.addEventListener('mouseout', gradOut);

  function gradMove(event) {
    let boxWidth = event.target.clientWidth;
    let mousePosition = event.offsetX / boxWidth;
    let percentage = Math.trunc(mousePosition * 100);
    document.getElementById('result').textContent = percentage + '%';
  }
  function gradOut() {
    document.getElementById('result').textContent = '';
  }
}
