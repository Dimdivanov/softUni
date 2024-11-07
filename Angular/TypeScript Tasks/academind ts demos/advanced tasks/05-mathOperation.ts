function mathOperation(num1: number, num2: number, operator: string) {
    switch (operator) {
        case '+':
            console.log(num1 + num2);
            break;
        case '-':
            console.log(num1 - num2);
            break;
        case '*':
            console.log(num1 * num2);
            break;
        case '/':
            console.log(num1 / num2);
            break;
        case '%':
            console.log(num1 % num2);
            break;
        case '**':
            console.log(num1 ** num2);
            break;
    }
}
mathOperation(5, 6, '*');
