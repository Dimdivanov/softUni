function speedInfo(input) {
  let typeSpeed = Number(input[0]);

  if (typeSpeed <= 10) {
    console.log("slow");
  } else if (typeSpeed <= 50) {
    console.log("average");
  } else if (typeSpeed <= 150) {
    console.log("fast");
  } else if (typeSpeed <= 1000) {
    console.log("ultra fast");
  } else {
    console.log("extremely fast");
  }
}
speedInfo(["49.5"]);
