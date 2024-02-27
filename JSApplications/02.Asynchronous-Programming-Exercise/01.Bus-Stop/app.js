function getInfo() {
  const busStopRef = document.getElementById('stopId');
  const stopId = busStopRef.value;

  const stopNameRef = document.getElementById('stopName');
  const busesRef = document.getElementById('buses');

  stopNameRef.textContent = '';
  busesRef.innerHTML = '';

  let url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;
  let response = fetch(url);
  response
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      stopNameRef.textContent = data.name;
      createList(Object.entries(data.buses));
    })
    .catch((err) => {
      stopNameRef.textContent = 'Error';
    });

  function createList(data) {
    for (let [bus, time] of data) {
      let li = document.createElement('li');
      li.textContent = `Bus ${bus} arrives in ${time} minutes`;
      busesRef.appendChild(li);
    }
  }
}
