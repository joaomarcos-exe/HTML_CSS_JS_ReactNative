const elemento = [
  {tag: 'p', texto: 'Frase 01'},
  {tag: 'div', texto: 'Frase 02'},
  {tag: 'footer', texto: 'Frase 03'},
  {tag: 'section', texto: 'Frase 04'},
];


const container = document.querySelector('.container')
const div = document.createElement('div')

for(let i = 0; i<elemento.length; i++){
  const {tag, texto} = elemento[i];
  let tagCriada = document.createElement(tag)
  tagCriada.innerHTML = texto;// tambem podemos usar innerText por ter so texto
  div.appendChild(tagCriada)
}

container.appendChild(div);