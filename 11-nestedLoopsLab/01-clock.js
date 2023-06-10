function clock() {
  for (let hours = 0; hours < 24; hours++) {
    for (let mins = 0; mins < 60; mins++) {
      console.log(`${hours}:${mins}`);
    }
  }
}
clock();
