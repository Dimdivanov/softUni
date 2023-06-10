function passwordGuess(input){
    let text = input[0];

    if (text === 's3cr3t!P@ssw0rd'){
        console.log('Welcome');
    } else {
        console.log('Wrong password!');
    }
}

passwordGuess(["qwerty"]);