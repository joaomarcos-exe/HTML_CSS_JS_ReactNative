const paragrafo = document.querySelector('.paragrafo')
const ps = paragrafo.querySelectorAll('p')

const estilosBody = getComputedStyle(document.body);
const backgroundColorContainer = estilosBody.backgroundColor;

for (let p of ps) {
    p.style.backgroundColor = backgroundColorContainer
    p.style.color = 'purple'
}


