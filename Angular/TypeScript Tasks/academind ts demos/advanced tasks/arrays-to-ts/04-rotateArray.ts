function rotateArr(arr: any[], n: number) {
    for (let i = 0; i < n; i++) {
        let moved = arr.pop();
        arr.unshift(moved);
    }
    console.log(arr.join(' '));
}
rotateArr(['1', '2', '3', '4'], 2);
rotateArr(['Banana', 'Orange', 'Coconut', 'Apple'], 15);
