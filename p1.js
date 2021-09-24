//Write a function that takes in a string as an input and returns it in reverse alphabetical order
const reverseAlph = inputstring => {
    let output = '';
    for (let i = 0; i < inputstring.length; i++) {
        if (inputstring[i].match(/[a-z]/i)) output += inputstring[i]; //if
    }
    let final = '';
    final = output.split('').sort().reverse().join('')

    return final
}

console.log(reverseAlph('supercalifragilistiexpialidocious'))
