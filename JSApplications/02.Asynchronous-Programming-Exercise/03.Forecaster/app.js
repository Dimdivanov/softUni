function attachEvents() {
  const locationRef = document.getElementById('location');
  const submitBtnRef = document.getElementById('submit');

  const forecastRef = document.getElementById('forecast');
  const currentRef = document.getElementById('current');
  const upcomingRef = document.getElementById('upcoming');

  const url = `http://localhost:3030/jsonstore/forecaster/locations`;
  const urlToday = `http://localhost:3030/jsonstore/forecaster/today/`;
  const threeDaysUrl = `http://localhost:3030/jsonstore/forecaster/upcoming/`;
  submitBtnRef.addEventListener('click', onSubmitClick);

  async function onSubmitClick(e) {
    const locationInput = locationRef.value;
    forecastRef.style.display = 'block';
    const response = await fetch(url);
    const data = await response.json();

    const currentData = data.find((x) => x.name === locationInput);

    await todayInfo(currentData.code);
    await threeDays(currentData.code);
  }

  async function todayInfo(code) {
    const response = await fetch(urlToday + code);
    const data = await response.json();
    const todayInfo = createForecast(data);
    currentRef.appendChild(todayInfo);
  }

  function createForecast(data) {
    const divForecasts = document.createElement('div');
    divForecasts.setAttribute('class', 'forecasts');

    const conditionSpan = document.createElement('span');
    conditionSpan.setAttribute('class', 'condition symbol');

    const symbols = {
      Sunny: '&#x2600',
      'Partly Sunny': '&#x26C5',
      Overcast: '&#x2601',
      Rain: '&#x2614',
    };

    if (data.forecast.condition in symbols) {
      let result = symbols[data.forecast.condition];
      conditionSpan.innerHTML = result;
    }

    const spanHolder = document.createElement('span');
    spanHolder.setAttribute('class', 'condition');

    const spanName = document.createElement('span');
    spanName.setAttribute('class', 'forecast-data');
    spanName.textContent = data.name;

    const degree = document.createElement('span');
    degree.setAttribute('class', 'forecast-data');
    degree.innerHTML = `${data.forecast.low}&#176/${data.forecast.high}&#176`;

    const weather = document.createElement('span');
    weather.setAttribute('class', 'forecast-data');
    weather.textContent = data.forecast.condition;

    spanHolder.appendChild(spanName);
    spanHolder.appendChild(degree);
    spanHolder.appendChild(weather);

    divForecasts.appendChild(conditionSpan);
    divForecasts.appendChild(spanHolder);

    return divForecasts;
  }

  async function threeDays(code) {
    const response = await fetch(threeDaysUrl + code);
    const data = await response.json();
    const three = threeForecasts(data);
    upcomingRef.appendChild(three);
  }

  function threeForecasts(data) {
    const divThree = document.createElement('div');
    divThree.setAttribute('class', 'forecast-info');

    for (let el of data.forecast) {
      const iconSymbols = {
        Sunny: '&#x2600',
        'Partly Sunny': '&#x26C5',
        Overcast: '&#x2601',
        Rain: '&#x2614',
      };

      const spanUpcoming = document.createElement('span');
      spanUpcoming.setAttribute('class', 'upcoming');

      const symbol = document.createElement('span');
      symbol.setAttribute('class', 'symbol');
      if (el.condition in iconSymbols) {
        symbol.innerHTML = iconSymbols[el.condition];
      }
      const degree = document.createElement('span');
      degree.setAttribute('class', 'forecast-data');
      degree.innerHTML = `${el.low}&#176/${el.high}&#176`;

      const weather = document.createElement('span');
      weather.setAttribute('class', 'forecast-data');
      weather.textContent = el.condition;

      spanUpcoming.appendChild(symbol);
      spanUpcoming.appendChild(degree);
      spanUpcoming.appendChild(weather);

      divThree.appendChild(spanUpcoming);
    }

    return divThree;
  }
}

attachEvents();
