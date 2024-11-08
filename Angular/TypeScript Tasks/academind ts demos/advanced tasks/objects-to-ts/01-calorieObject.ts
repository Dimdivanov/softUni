function calorieObject(arr: any[]): void {
    interface Calorie {
        [key: number]: number;
    }
    let kcal: Calorie = {};

    for (let i = 0; i < arr.length; i += 2) {
        let product = arr[i];
        let ammount = arr[i + 1];
        kcal[product] = ammount;
    }
    console.log(kcal);
}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
