const num = 100;
const verific = (typeof num)


if (verific == 'string') {verific == 'string'
    console.log('E uma string')
}else if(num >= 0 && num <=100){
    oneNumber(num) 
}else{
    console.log('Numero Invalido')
}


function oneNumber(numRecive){
    const num1 = numRecive%3;
    const num2 = numRecive%5;
    if (num1 === 0 && num2 ===0) {
        console.log('FizzBuzz')
    }else if(num1 ===0){
        console.log('Fizz')
    }else if(num2 === 0){
        console.log('Buzz')
    }else{
        console.log(numRecive)
    }
}
   

