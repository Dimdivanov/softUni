function solve() {
  let departBtnRef = document.getElementById('depart');
  let arriveBtnRef = document.getElementById('arrive');

  let infoBox = document.querySelector('.info');
  let url = 'http://localhost:3030/jsonstore/bus/schedule/';

  const stop = {
    currentStop: '',
    nextStop: 'depot',
  };
  async function depart() {
    let response = await fetch(url + stop.nextStop);
    let data = await response.json();
    stop.currentStop = data.name;
    stop.nextStop = data.next;

    infoBox.textContent = `Next stop ${stop.currentStop}`;

    arriveBtnRef.disabled = false;
    departBtnRef.disabled = true;
  }

  function arrive() {
    infoBox.textContent = `Arriving at ${stop.currentStop}`;

    departBtnRef.disabled = false;
    arriveBtnRef.disabled = true;
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
