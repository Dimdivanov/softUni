function journey(input) {
  let budget = Number(input[0]);
  let season = input[1];

  let moneySpend = 0;

  if (budget <= 100) {
    console.log('Somewhere in Bulgaria');
    if (season === 'summer') {
      moneySpend = budget * 0.3;
      console.log(`Camp - ${moneySpend.toFixed(2)}`);
    } else if (season === 'winter') {
      moneySpend = budget * 0.7;
      console.log(`Hotel - ${moneySpend.toFixed(2)}`);
    }
  } else if (budget > 100 && budget <= 1000) {
    console.log('Somewhere in Balkans');
    if (season === 'summer') {
      moneySpend = budget * 0.4;
      console.log(`Camp - ${moneySpend.toFixed(2)}`);
    } else if (season === 'winter') {
      moneySpend = budget * 0.8;
      console.log(`Hotel - ${moneySpend.toFixed(2)}`);
    }
  } else {
    console.log('Somewhere in Europe');
    moneySpend = budget * 0.9;
    console.log(`Hotel - ${moneySpend.toFixed(2)}`);
  }
}
journey(['678.53', 'winter']);
