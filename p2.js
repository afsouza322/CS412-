/*Write a function that takes a string and determines its operator and
returns a function to implement the input operator
 */
const evaluate = formatstring => {
    let newarray = formatstring.split('', 3)
    let firstoperand= Number(newarray[0])
    let secondoperand= Number(newarray[2])
    switch (newarray[1]) {
        case '+':
            return (left,right) => firstoperand + secondoperand
        case '^':
            return (left, right) => firstoperand ^ secondoperand
        case '-':
            return (left, right) => firstoperand - secondoperand
        case '/':
            return (left, right) => firstoperand/ secondoperand
        case '*':
            return (left, right) => firstoperand * secondoperand
        case '%':
            return (left, right) => firstoperand % secondoperand
    }
}
let expression = '8-4';
let operator =  evaluate(expression);
console.log(`${expression} = ${operator(expression)}`)