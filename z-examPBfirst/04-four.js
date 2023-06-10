function compFirm(input) {
  let index = 0;

  let n = Number(input[index]);
  index++;

  let totalSales = 0;
  let totalRating = 0;

  for (let i = 0; i < n; i++) {
    let currentRating = Number(input[index]);
    index++;

    let rating = currentRating % 10;
    let sales = Math.floor(currentRating / 10);

    if (rating === 2) {
      totalSales += 0;
    } else if (rating === 3) {
      totalSales += sales * 0.5;
    } else if (rating === 4) {
      totalSales += sales * 0.7;
    } else if (rating === 5) {
      totalSales += sales * 0.85;
    } else if (rating === 6) {
      totalSales += sales;
    } else {
      console.log(totalSales);
    }

    totalRating += rating;
  }

  let averageRating = (totalRating / n).toFixed(2);
  let formattedSales = totalSales.toFixed(2);
  console.log(formattedSales);
  console.log(averageRating);
}

compFirm(['5', '122', '156', '202', '214', '185']);
