function printArray(arr: string[], str: string) {
    let result: string[] = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i]);
    }
    console.log(result.join(`${str}`));
}
printArray(['One', 'Two', 'Three', 'Four', 'Five'], '-');
