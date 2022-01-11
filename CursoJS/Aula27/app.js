let num1 = 0.7
let num2 = 0.1

let num3 = num1 + num2

//Jeitos de reolver a imprecisão
//num1 = Number(num3.toFixed(2))
//num1 = parseFloat(num3.toFixed(2))
num1 = ((num1*100) + (num2*100))/100
console.log(num1)