function sumOfNums(n: string, m: string) {
    let num1 = Number(n);
    let num2 = Number(m);
    let result: number = 0;
    for (let i = num1; i <= num2; i++) {
        result += i;
    }
    console.log(result);
}

sumOfNums('1', '5');
