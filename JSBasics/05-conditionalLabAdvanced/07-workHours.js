function workHours(input) {
  let hours = Number(input[0]);
  let days = input[1];

  switch (days) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
    case "Saturday":
      if (hours >= 10 && hours <= 18) {
        console.log("open");
      } else {
        console.log("closed");
      }
      break;
    default:
      console.log("closed");
      break;
  }
}
workHours(["11", "Sunday"]);
