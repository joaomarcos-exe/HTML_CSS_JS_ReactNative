const form = document.querySelector('#form')

form.addEventListener('submit', function (event){
    event.preventDefault();
    
    const inputPeso = event.target.querySelector('#inputPeso')
    const inputAltura = event.target.querySelector('#inputAltura')

    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)
    
    
    

});

function nivelImc(){
    const nivel = ['Abaixo do Peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']
    return nivel;
}

function criarP() {
    const resultado = document.querySelector('#resultado')
    const paragrafo = document.createElement('p')
    
}

