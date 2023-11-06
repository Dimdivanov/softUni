function minerTask(arr) {
  let resourceObj = {};

  for (let i = 0; i < arr.length; i += 2) {
    let resource = arr[i];
    let qty = Number(arr[i + 1]);

    if (resource in resourceObj) {
      resourceObj[resource] += qty;
    } else {
      resourceObj[resource] = qty;
    }
  }

  for (let [resource, qty] of Object.entries(resourceObj)) {
    console.log(`${resource} -> ${qty}`);
  }
}
minerTask(['Gold', '155', 'Silver', '10', 'Copper', '17']);
