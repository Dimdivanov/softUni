function theLift(arr) {
  let people = Number(arr.shift()); //15 chisloto hora
  let lift = arr.shift().split(' ').map(Number); // [0, 0, 0, 0, 0] vseki vagon v chislo i kolko choveka ima vutre

  let wagons = [];

  for (let i = 0; i < lift.length; i++) {
    let passengers = lift[i];
    let difference = 4 - passengers;

    if (passengers < 4) {
      wagons.push(difference);
    }
  }

  console.log(wagons);
  //Всеки вагон е с максимум капацитет 4
  //ако е пълен редиректваме към следващия вагон
  //където има места свободни

  //when there is NO more available spaces left on the lift
  // OR there are no more people in the que , print final state of the lifts wagons Separated
}

theLift(['20', '0 2 0']);
