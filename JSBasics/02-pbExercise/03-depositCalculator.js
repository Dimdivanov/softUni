function depositCalculator(input){
    let depositSum = Number(input[0]);
    let depositMonth = Number(input[1]);
    let rate = Number(input[2]);

    let ratePercentage = rate / 100;
    let accumulatedRate = depositSum * ratePercentage;
    let rateMontly = accumulatedRate / 12;
    let sumOfAll = depositSum + depositMonth * rateMontly;
    console.log(sumOfAll);
}
depositCalculator(["2350",
"6 ",
"7 "]

);