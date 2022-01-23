function soma(num1, num2){
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw('Os tipos precisam ser number');
    }
    return num1 + num2
}

try{
    console.log(soma(1,2))
    console.log(soma('1',2))
}catch(err){
    console.log('Algo amigavel')
}