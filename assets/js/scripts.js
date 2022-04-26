let ordem = [];
let clickOrdem = [];
let pontos= 0;

/*0-verde
1-vermelho
2-amarelo
3-azul */

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//criar ordem aleatoria cores
let shuffleOrdem = () => {
    let colorOrdem = Math.floor(Math.random()*4);
    ordem[ordem.length] = colorOrdem;
    clickOrdem=[];

    for ( let i in ordem) {
        let elementColor = criarCorElemento(ordem[i]);
        luzCor(elementColor, Number(i)+1);
    }
}

//acende a proxima cor
let luzCor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected')
    }, number-250);
    setTimeout(() => {
        element.classList.remove('selected')
    });
}

//checagem de botão
let checkarOrdem = () => {
    for (let i in clickOrdem){
        if (clickOrdem[i]!=ordem[i]) {
            perder();
            break;
        }        
    }
    if (clickOrdem.length == ordem.length ){
        alert(`Pontuação ${pontos}\n voce acertou! Iniciar proximo nivel!`);
        nextLevel();
    }
}

//função click jogo
let click = (color) => {
    clickOrdem[clickOrdem.length] = color;
    criarCorElemento(color).classList.add('selected');

    setTimeout(() => {
        criarCorElemento(color).classList.remove('selected')
        checkarOrdem();
    }, 250); 
}

//criar função que retorna a cor
let criarCorElemento = (color) => {
    if (color == 0){
        return green;
    } else if (color==1){
        return red;
    } else if (color==2){
        return yellow;
    } else if (color==3){
        return blue;
    }
}

//proximo nivel
let nextLevel = () => {
    pontos++;
    shuffleOrdem();
}

//perdeu o jogo
let perder = () => {
    alert(`pontuação: ${pontos}!\n voce perdeu o jogo. \n click em OK para iniciar um novo jogo`)
    ordem=[];
    clickOrdem=[];

    iniciarGame();    
}

//iniciar game
let iniciarGame = () => {
    alert ("Bem vindo ao jogo");
    pontos = 0;

    nextLevel();
}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);


iniciarGame();