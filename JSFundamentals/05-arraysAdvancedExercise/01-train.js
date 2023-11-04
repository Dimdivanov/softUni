function train(arr) {
  let waggons = arr[0].split(' ').map(Number);
  let capacity = Number(arr[1]);
  console.log(arr);
  for (let i = 2; i < arr.length; i++) {
    let command = arr[i]; // взимаме текущия елемент
    let tickets = command.split(' '); // за да махнем празното място ползваме сплит което прави ['add', '10']

    if (tickets[0] == 'Add') {
      let passengers = Number(tickets[1]);
      waggons.push(passengers);
    } else {
      let passengers = Number(tickets[0]); // елементите след 2те Add команди
      for (let j = 0; j < waggons.length; j++) {
        if (waggons[j] + passengers <= capacity) {
          waggons[j] += passengers;
          break;
        }
      }
    }
  }
  console.log(waggons.join(' '));
}
train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);
