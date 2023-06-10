function pcStore(input) {
  let cpuPriceDollars = Number(input[0]);
  let gpuPriceDollars = Number(input[1]);
  let ramPriceDollars = Number(input[2]);
  let numberOfRam = Number(input[3]);
  let discount = Number(input[4]);

  let cpuPriceLeva = cpuPriceDollars * 1.57;
  let gpuPriceLeva = gpuPriceDollars * 1.57;

  let ramPriceLeva = ramPriceDollars * 1.57;
  let allRamPrice = ramPriceLeva * numberOfRam;

  let cpuPriceAfterDiscount = cpuPriceLeva - cpuPriceLeva * discount;
  let gpuPriceAfterDiscount = gpuPriceLeva - gpuPriceLeva * discount;

  let fullPrice = allRamPrice + cpuPriceAfterDiscount + gpuPriceAfterDiscount;
  console.log(`Money needed - ${fullPrice.toFixed(2)} leva.`);
}
pcStore(['1200', '850', '120', '4', '0.1']);
