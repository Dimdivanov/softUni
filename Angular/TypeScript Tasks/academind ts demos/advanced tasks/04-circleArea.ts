function circleArea(num: number | string) {
    if (typeof num == 'number') {
        const pi: number = Math.PI;
        let area = pi * Math.pow(num, 2);
        console.log(area.toFixed(2));
    } else {
        console.log(
            `We can not calculate the circle area, because we received a ${typeof num}.`
        );
    }
}
circleArea(5);
circleArea('text');
