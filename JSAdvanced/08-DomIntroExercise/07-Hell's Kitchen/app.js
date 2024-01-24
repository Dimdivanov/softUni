function solve() {
  document.querySelector('#btnSend').addEventListener('click', onClick);

  function onClick() {
    let restaurantsData = JSON.parse(
      document.querySelector('#inputs textarea').value
    );
    let bestRestaurant = findBestRestaurant(restaurantsData);
    document.querySelector('#bestRestaurant>p').textContent =
      formatRestaurantMessage(bestRestaurant);
    document.querySelector('#workers>p').textContent = formatWorkersMessage(
      bestRestaurant.workers
    );
  }

  function formatRestaurantMessage(bestRestaurant) {
    return `Name: ${
      bestRestaurant.name
    } Average Salary: ${bestRestaurant.avgSalary.toFixed(
      2
    )} Best Salary: ${bestRestaurant.maxSalary.toFixed(2)}`;
  }

  function formatWorkersMessage(workers) {
    return workers
      .map((worker) => `Name: ${worker.name} With Salary: ${worker.salary}`)
      .join(' ');
  }

  function findBestRestaurant(restaurantsData) {
    let restaurants = restaurantsData.reduce((restaurantsMap, entry) => {
      let [name, ...workers] = entry.split(/(?: - )|(?:, )/g);
      workers = workers.map((workerEntry) => {
        let [workerName, salary] = workerEntry.split(' ');
        return { name: workerName, salary: +salary };
      });

      if (restaurantsMap[name]) {
        restaurantsMap[name].workers =
          restaurantsMap[name].workers.concat(workers);
      } else {
        restaurantsMap[name] = { name, workers };
      }

      return restaurantsMap;
    }, {});

    Object.values(restaurants).forEach((restaurant) => {
      restaurant.avgSalary =
        restaurant.workers.reduce((total, worker) => total + worker.salary, 0) /
        restaurant.workers.length;
      restaurant.maxSalary = Math.max(
        ...restaurant.workers.map((worker) => worker.salary)
      );
      restaurant.workers.sort((a, b) => b.salary - a.salary);
    });

    return Object.values(restaurants).sort(
      (a, b) => b.avgSalary - a.avgSalary
    )[0];
  }
}
