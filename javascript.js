/**** variaveis principais ****/
let botaoCounter = document.querySelector('#botao_principal');
let quantosCliques = document.querySelector('#contador');
const imgBilly = document.querySelector('#billy')
/**** variavel principal ****/
let PontosOuCliquesTotal = 0;

/**** variaveis de conquista ****/
let conquista50 = document.querySelector('#conquista50');
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
        quantosCliques.textContent = PontosOuCliquesTotal;
        if(quantiUpClick1 === 2){
        precoClickVar1 = 18;
        }
        else{
            precoClickVar1 = (15 + 3 * quantiUpClick1 * quantiUpClick1 + 4 * quantiUpClick1);
        }
        precoClick1.textContent = precoClickVar1;
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
        quantosCliques.textContent = PontosOuCliquesTotal;
        precoClickVar10 = Math.floor(2300 * Math.pow(1.15, quantiUpClick10));
        precoClick10.textContent = precoClickVar10;
    }
});


























/**** clique no botao ****/
botaoCounter.addEventListener('click', function(){

    /**** Atualizacao dos cliques(ainda nao inclui update de mais pontos/clique)****/
    if(quantiUpClick === 0){
        PontosOuCliquesTotal += 1;
    }
    else{
    PontosOuCliquesTotal += quantiUpClick;
    }
    quantosCliques.textContent = PontosOuCliquesTotal;

    /**** Conquistas ****/
    if(PontosOuCliquesTotal === 10){
        conquista50.classList.add('aparecido');
        setTimeout(function() {
            conquista50.classList.remove('aparecido');
        }, 2000)
    }
    


});
