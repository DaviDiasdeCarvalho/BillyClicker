/**** variaveis principais ****/
let botaoCounter = document.querySelector('#botao_principal');
let quantosCliques = document.querySelector('#contador');
const imgBilly = document.querySelector('#billy')
/**** variavel principal ****/
let PontosOuCliquesTotal = 0;

/**** variaveis de conquista ****/
let conquista = document.querySelector('#conquista');
/**** variaveis para evitar repetiçao de conquistas ****/
/* */
/*variaveis de upgrade*/
let quantiUpClick = 1;
/* variaveis do primeiro upgrade */
let upgradeClick1 = document.querySelector('#upgradeClick1');
let precoClick1 = document.querySelector('#precoClick1');
let precoClickVar1 = 15;
let quantiUpClick1 = 0;

/*** Botao para upgrade do click ***/
upgradeClick1.addEventListener('click', function(){
    if(PontosOuCliquesTotal >= precoClickVar1){
        quantiUpClick1++;
        quantiUpClick++;
        PontosOuCliquesTotal -= precoClickVar1;
        quantosCliques.textContent = formatarNumero(PontosOuCliquesTotal);
        if(quantiUpClick1 === 2){
        precoClickVar1 = 18;
        }
        else{
            precoClickVar1 = (15 + 3 * quantiUpClick1 * quantiUpClick1 + 4 * quantiUpClick1);
        }
        precoClick1.textContent = formatarNumero(precoClickVar1);
    }
});




let upgradeClick10 = document.querySelector('#upgradeClick10');
let precoClick10 = document.querySelector('#precoClick10');
let precoClickVar10 = 2500;
let quantiUpClick10 = 0;
/*** Botao para upgrade do click ***/
upgradeClick10.addEventListener('click', function(){
    if(PontosOuCliquesTotal >= precoClickVar10){
        quantiUpClick10 += 10;
        quantiUpClick += 10;
        PontosOuCliquesTotal -= precoClickVar10;
        quantosCliques.textContent = formatarNumero(PontosOuCliquesTotal);
        precoClickVar10 = Math.floor(2300 * Math.pow(1.15, quantiUpClick10));
        precoClick10.textContent = formatarNumero(precoClickVar10);
    }
});





















/****variaveis para verificar se a conquista ja foi conquistada****/
let conquista50VouF = 0; //0 para nao atingido e 1 para atingido
let conquista500VouF = 0; //0 para nao atingido e 1 para atingido
let conquista1000VouF = 0; //0 para nao atingido e 1 para atingido
let conquista10000VouF = 0; //0 para nao atingido e 1 para atingido
let conquista100kVouF = 0; //0 para nao atingido e 1 para atingido




/**** clique no botao ****/
botaoCounter.addEventListener('click', function(){

    /**** Atualizacao dos cliques(ainda nao inclui update de mais pontos/clique)****/
    if(quantiUpClick === 0){
        PontosOuCliquesTotal += 1;
    }
    else{
    PontosOuCliquesTotal += quantiUpClick;
    }
    quantosCliques.textContent = formatarNumero(PontosOuCliquesTotal);

    /**** Conquistas ****/

    if(PontosOuCliquesTotal >= 50 && conquista50VouF === 0){
        conquista.classList.add('aparecido');
        setTimeout(function() {
            conquista.classList.remove('aparecido');
        }, 2000);
        conquista50VouF = 1;
    }

    if(PontosOuCliquesTotal >= 500 && conquista500VouF === 0){
        conquista.innerHTML = '<h1>Parabéns pelos 500 cliques 👍</h1>';
        conquista.classList.add('aparecido');
        setTimeout(function() {
            conquista.classList.remove('aparecido');
        }, 2000);
        conquista500VouF = 1;
    }

    if(PontosOuCliquesTotal >= 1000 && conquista1000VouF === 0){
        conquista.innerHTML = '<h1>Parabéns pelos 1K cliques 👍</h1>';
        conquista.classList.add('aparecido');
        setTimeout(function() {
            conquista.classList.remove('aparecido');
        }, 2000);
        conquista1000VouF = 1;
    }

    if(PontosOuCliquesTotal >= 10000 && conquista10000VouF === 0){
        conquista.innerHTML = '<h1>Parabéns pelos 10K cliques 👍</h1>';
        conquista.classList.add('aparecido');
        setTimeout(function() {
            conquista.classList.remove('aparecido');
        }, 2000);
        conquista10000VouF = 1;
    }

     if(PontosOuCliquesTotal >= 100000 && conquista100kVouF === 0){
        conquista.innerHTML = '<h1>Parabéns pelos 100K cliques 👍</h1>';
        conquista.classList.add('aparecido');
        setTimeout(function() {
            conquista.classList.remove('aparecido');
        }, 2000);
        conquista100kVouF = 1;
    }
    


});





















let comprarAutoClick1 = document.querySelector('#comprarAutoClick1');
let comprarAutoClick10 = document.querySelector('#comprarAutoClick10');
let comprarAutoClick100 = document.querySelector('#comprarAutoClick100');

let precoAutoClick1 = document.querySelector('#precoAutoClick1');
let precoAutoClick10 = document.querySelector('#precoAutoClick10');
let precoAutoClick100 = document.querySelector('#precoAutoClick100');

let quantosAutoClick = document.querySelector('#quantosAutoClick');
let producaoAutoClick = document.querySelector('#producaoAutoClick');

let quantiAutoClick = 0;

function calcularPrecoAutoClick(quantidade){
    let precoTotal = 0;

    for (let i = 0; i < quantidade; i++){
        precoTotal += Math.floor(500 * Math.pow(1.08, quantiAutoClick + i));
    }

    return precoTotal;
}

function atualizarPrecoAutoClick(){
    precoAutoClick1.textContent = formatarNumero(calcularPrecoAutoClick(1));
    precoAutoClick10.textContent = formatarNumero(calcularPrecoAutoClick(10));
    precoAutoClick100.textContent = formatarNumero(calcularPrecoAutoClick(100));

    quantosAutoClick.textContent = formatarNumero(quantiAutoClick);
    producaoAutoClick.textContent = formatarNumero(quantiAutoClick * quantiUpClick);
}

function comprarAutoClick(quantidade){
    let preco = calcularPrecoAutoClick(quantidade);

    if (PontosOuCliquesTotal >= preco){
        PontosOuCliquesTotal -= preco;
        quantiAutoClick += quantidade;

        quantosCliques.textContent = formatarNumero(PontosOuCliquesTotal);

        atualizarPrecoAutoClick();
    }
}

comprarAutoClick1.addEventListener('click', function(){
    comprarAutoClick(1);
});

comprarAutoClick10.addEventListener('click', function(){
    comprarAutoClick(10);
});

comprarAutoClick100.addEventListener('click', function(){
    comprarAutoClick(100);
});

setInterval(function(){
    PontosOuCliquesTotal += quantiAutoClick * quantiUpClick;
    quantosCliques.textContent = formatarNumero(PontosOuCliquesTotal);
    atualizarPrecoAutoClick();
}, 1000);

atualizarPrecoAutoClick();



function formatarNumero(numero){
    if (numero >= 1e9){
        return (numero / 1e9).toFixed(1).replace(/\.0$/, '') + 'B';
    }
    if (numero >= 1e6){
        return (numero / 1e6).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (numero >= 1e3){
        return (numero / 1e3).toFixed(1).replace(/\.0$/, '') + 'K';
    }

    return numero.toString();
}
