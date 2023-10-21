function theLift(arr) {
  let people = Number(arr.shift());
  let lift = arr.shift().split(' ').map(Number);
  let wagons = [];

  for (let i = 0; i < lift.length; i++) {
    let passengers = lift[i];
    let difference = 4 - passengers;

    if (passengers < 4) {
      wagons.push(difference);
    }
  }

  console.log(wagons);
}

theLift(['20', '0 2 0']);
