const data = new Date();

function diaSemana() {
    let semanaNum = data.getDay();
    let semanaTxt

    switch (semanaNum) {
        case 0:
            semanaTxt = 'Domingo'
            break;
        
        case 1:
            semanaTxt = 'Segunda'
            break;
    
        case 2: 
            semanaTxt = 'Terça'
            break;

        case 3:
            semanaTxt = 'Quarta'
            break;

        case 4:
            semanaTxt = 'Quinta'
            break;

        case 5:
            semanaTxt = 'Sexta'
            break;

        default:
            semanaTxt = 'Sabado'
            break;
    }

    dia();
    return semanaTxt;


}



function dia() {
    let diaMes = data.getDate();
    return diaMes;
}

function pegaMes() {
    let mes = data.getMonth();
    let mesTxt;
    switch (mes) {
        case 0:
            return mesTxt = 'Janeiro'
        
        case 1:
            return mesTxt = 'Fevereiro'

        case 2:
            return mesTxt = 'Março'
        
        case 3:
            return mesTxt = 'Abril'

        case 4:
            return mesTxt = 'Maio'
        
        case 5:
            return mesTxt = 'Junho'

        case 6:
            return mesTxt = 'Julho'

        case 7:
            return mesTxt = 'Agosto'

        case 8:
            return mesTxt = 'Setembro'

        case 9: 
            return mesTxt = 'Outubro'

        case 10:
            return mesTxt = 'Novembro'

        default:
            return mesTxt = 'Dezembro'

    }
}

function ano() {
    let ano = data.getFullYear();
    return ano;
}

function hora() {
    const hora = data.getHours();
    return hora
}

function min() {
    const min = data.getMinutes();
    return min
}

// console.log(hora())


function mandandoParaIndex() {
    const p = document.querySelector('#texto')
    p.innerHTML += `<strong>${diaSemana()}, ${dia()} de ${pegaMes()} de ${ano()} ${hora()}:${min()}</strong>`
    
}

mandandoParaIndex();