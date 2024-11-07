function largestNum(num1: number, num2: number, num3: number) {
    let result: number[] = [];
    result.push(num1, num2, num3);
    result.sort((a, b) => a - b);
    console.log(`The largest number is ${result.pop()}.`);
}
largestNum(5, -3, 16);
