
const input = 'supercalifragilisticexpialidocious'
const perform = (inputstring, func) => { //decorator
    return func(inputstring) //return function with input
}

//split by c's
let csplit = perform (inputstring = input, b =>
    inputstring.split(/(?=c)/g))
console.log(csplit);

//replace a's
let counter = 0;
let atable = perform(inputstring = input, c => //lambda function
    [['originalString:', inputstring],
    ['modifiedString:', newstring = inputstring.replace(/['a']/g,  function(){counter++; return 'a'.toUpperCase()})],
        //lambda function that returns the replacing character ad increments the counter
    ['numberReplaced:', counter],
    ['length:', newstring.length]])
console.table(atable)

