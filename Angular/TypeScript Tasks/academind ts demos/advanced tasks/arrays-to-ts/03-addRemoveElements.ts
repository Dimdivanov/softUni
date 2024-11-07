function addRemoveElements(command: string[]) {
    let result: number[] = [];
    let n: number = 1;
    for (let i = 0; i < command.length; i++) {
        let curCommand = command[i];
        if (curCommand == 'add') {
            result.push(n);
            n++;
        } else if (curCommand == 'remove') {
            result.pop();
            n++;
        }
    }
    let answer = result.length ? result.join('\n') : 'Empty';
    console.log(answer);
}

addRemoveElements(['add', 'add', 'remove', 'add', 'add']);