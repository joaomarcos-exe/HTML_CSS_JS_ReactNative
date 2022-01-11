const numeroDigitado = prompt('Digite um numero:')
const numeroTitulo = document.getElementById('numero')
const textoComInformacoes = document.getElementById('texto')

const numeroDigitadoInt = Number(numeroDigitado)

numeroTitulo.innerHTML = numeroDigitado;
textoComInformacoes.innerHTML += `A raiz Quadrada é: ${(numeroDigitado ** 0.5).toFixed(2)} <br/>` 
textoComInformacoes.innerHTML += `E um numero Inteiro: ${Number.isInteger(numeroDigitadoInt)} <br/>`
textoComInformacoes.innerHTML += `É um NaN: ${Number.isNaN(numeroDigitadoInt)} <br/>`
textoComInformacoes.innerHTML += `Arredondando para cima: ${Math.ceil(numeroDigitadoInt)} <br/>`
textoComInformacoes.innerHTML += `Arredondando para baixo: ${Math.floor(numeroDigitadoInt)} <br/>`
textoComInformacoes.innerHTML += `Com duas casas decimais: ${numeroDigitadoInt.toFixed(2)} <br/>`