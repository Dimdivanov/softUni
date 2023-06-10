function suppliesForSchool(input){
    let pencil = Number(input[0]);
    let marker = Number(input[1]);
    let detergent = Number(input[2]);
    let discountPercentage = Number(input[3]);

    let pencilSum = pencil * 5.80;
    let markerSum = marker * 7.20;
    let detergentSum = detergent * 1.20;
    let priceOfAll = pencilSum + markerSum + detergentSum;

    let discount = discountPercentage / 100;
    let discountedPrice = priceOfAll - (priceOfAll * discount);

    console.log(discountedPrice);

}
suppliesForSchool(["4 ",
"2 ",
"5 ",
"13 "]
);