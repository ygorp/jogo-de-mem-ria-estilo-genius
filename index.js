//Variáveis para as funções

let order = [];
let clickedOrder = [];
let score = 0;

//SELECIONANDO AS CORES DOS ELEMENTOS
//0 = verde
//1 = vermelho
//2 = amarelo
//3 = azul

const azul = document.querySelector('.azul');
const vermelho = document.querySelector('.vermelho');
const verde = document.querySelector('.verde');
const amarelo = document.querySelector('.amarelo');

//FUNÇÃO PARA SORTEIO DAS CORES
let shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];

  for(let i in order){
    let elementColor = createColorElement(order[i]);
  }
}