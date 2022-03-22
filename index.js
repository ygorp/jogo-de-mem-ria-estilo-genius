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

//FUNÇÃO para ordem aleatoria
let shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];

  for(let i in order){
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1);
  }
}
//acende a proxima cor
let lightColor = (element, number) => {
  number = number * 500;
  setTimeout(() => {
    element.classList.add('selected');
  }, number - 250);
  setTimeout(() => {
    element.classList.remover('selected');
  });
}
//checa se os clicados são os mesmos gerados pelo jogo
let checkOrder = () => {
  for(let i in clickedOrder) {
    if(clickedOrder[i] != order[i]) {
      gameOver();
      break;
    }
  }
  if(clickedOrder.length == order.length){
    alert(`pontuação: ${score}\nVocê acertou! Iniciando próximo nivel`);
    nextLevel();
  }
}

//função clique do usuário
let click = (color) =>  {
  clickedOrder[clickedOrder.length] =color;
  createColorElement(color).classList.add('selected');

  setTimeout(() => {
    elementColor(color).classList.remover('selected');
  })

  checkOrder();
}

//função que retorna a cor
let createColorElement = (color) => {
  if(color == 0) {
    return verde;
  }else if(color == 1) {
    return vermelho;
  }else if(color == 2) {
    return amarelo;
  }else if(color == 3) {
    return azul;
  }
} 

//função para proximo nivel do jogo
let nextLevel = () => {
  score++;
  shuffleOrder();
}

//perdeu o jogo
let gameOver = () => {
  alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em ok para iniciar um novo jogo!`);
  order = [];
  clickedOrder = [];

  playGame();
}

let playGame = () => {
  
}