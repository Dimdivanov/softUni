function fuelReservior(input) {
  let typeFuel = input[0].toLowerCase();
  let literFuel = Number(input[1]);

  if (typeFuel !== "kerosene") {
    if (literFuel >= 25) {
      console.log(`You have enough ${typeFuel}.`);
    } else {
      console.log(`Fill your tank with ${typeFuel}!`);
    }
  } else {
    console.log("Invalid fuel!");
  }
}
fuelReservior(["Kerosene", "25"]);
