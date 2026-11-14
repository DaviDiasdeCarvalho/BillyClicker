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
        quantiUpClick += 1;
        quantiUpClick1++;
        PontosOuCliquesTotal -= precoClickVar1;
        quantosCliques.textContent = formatarNumero(Math.floor(PontosOuCliquesTotal));
        precoClickVar1 = (15 + 3 * quantiUpClick1 * quantiUpClick1 + 4 * quantiUpClick1);
        precoClick1.textContent = formatarNumero(precoClickVar1);
        producaoAutoClick.textContent = formatarNumero(quantiAutoClick * quantiUpClick);
        document.title = `${formatarNumero(Math.floor(PontosOuCliquesTotal))} Cliques | Billy Clicker`;
    }
});

/* variaveis do segundo upgrade */
let upgradeClick10 = document.querySelector('#upgradeClick10');
let precoClick10 = document.querySelector('#precoClick10');
let precoClickVar10 = 2500;
let quantiUpClick10 = 0;

/*** Botao para upgrade do click ***/

upgradeClick10.addEventListener('click', function(){
    if(PontosOuCliquesTotal >= precoClickVar10){
        quantiUpClick += 10;
        quantiUpClick10 += 10;
        PontosOuCliquesTotal -= precoClickVar10;
        quantosCliques.textContent = formatarNumero(Math.floor(PontosOuCliquesTotal));
        precoClickVar10 = Math.floor(2300 * Math.pow(1.15, quantiUpClick10));
        precoClick10.textContent = formatarNumero(precoClickVar10);
        producaoAutoClick.textContent = formatarNumero(quantiAutoClick * quantiUpClick);
        document.title = `${formatarNumero(Math.floor(PontosOuCliquesTotal))} Cliques | Billy Clicker`;
    }
});




















/****variaveis para verificar se a conquista ja foi conquistada****/
let conquista50VouF = 0; //0 para nao atingido e 1 para atingido
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

    quantosCliques.textContent = formatarNumero(Math.floor(PontosOuCliquesTotal));


    /** billy 30 150 **/
    mostrarNumero(quantiUpClick);
    /**** Conquistas ****/

    if(PontosOuCliquesTotal >= 50 && conquista50VouF === 0){
        conquista.classList.add('aparecido');
        setTimeout(function() {
            conquista.classList.remove('aparecido');
        }, 3000);
        conquista50VouF = 1;
    }

    if(PontosOuCliquesTotal >= 1000 && conquista1000VouF === 0){
        conquista.innerHTML = '<h1>Parabéns pelos 1K cliques 👍</h1>';
        conquista.classList.add('aparecido');
        setTimeout(function() {
            conquista.classList.remove('aparecido');
        }, 3000);
        conquista1000VouF = 1;
    }

    if(PontosOuCliquesTotal >= 10000 && conquista10000VouF === 0){
        conquista.innerHTML = '<h1>Parabéns pelos 10K cliques 👍 -- Recompensa: +60K Cliques</h1>';
        PontosOuCliquesTotal += 60000;
        quantosCliques.textContent = formatarNumero(Math.floor(PontosOuCliquesTotal));
        conquista.classList.add('aparecido');
        setTimeout(function() {
            conquista.classList.remove('aparecido');
        }, 3000);
        conquista10000VouF = 1;
    }

     if(PontosOuCliquesTotal >= 100000 && conquista100kVouF === 0){
        conquista.innerHTML = '<h1>Parabéns pelos 100K cliques 👍 -- Recompensa: +1M cliques</h1>';
        PontosOuCliquesTotal += 1000000;
        quantosCliques.textContent = formatarNumero(Math.floor(PontosOuCliquesTotal));
        conquista.classList.add('aparecido');
        setTimeout(function() {
            conquista.classList.remove('aparecido');
        }, 3000);
        conquista100kVouF = 1;
    }
    

    document.title = `${formatarNumero(Math.floor(PontosOuCliquesTotal))} Cliques | Billy Clicker`;
});





















let comprarAutoClick1 = document.querySelector('#comprarAutoClick1');
let comprarAutoClick10 = document.querySelector('#comprarAutoClick10');
let comprarAutoClick100 = document.querySelector('#comprarAutoClick100');

let precoAutoClick1 = document.querySelector('#precoAutoClick1');
let precoAutoClick10 = document.querySelector('#precoAutoClick10');
let precoAutoClick100 = document.querySelector('#precoAutoClick100');

let precoAutoClick1VAR = 500;
let precoAutoClick10VAR = 4000;
let precoAutoClick100VAR = 30000;

let quantiAutoClick1 = 0;
let quantiAutoClick10  = 0;
let quantiAutoClick100 = 0;

let quantosAutoClick = document.querySelector('#quantosAutoClick');
let producaoAutoClick = document.querySelector('#producaoAutoClick');

let quantiAutoClick = 0;


precoAutoClick1.textContent = formatarNumero(precoAutoClick1VAR);
precoAutoClick10.textContent = formatarNumero(precoAutoClick10VAR);
precoAutoClick100.textContent = formatarNumero(precoAutoClick100VAR);

comprarAutoClick1.addEventListener('click', function(){
    if (PontosOuCliquesTotal >= precoAutoClick1VAR){
        PontosOuCliquesTotal -= precoAutoClick1VAR;
        quantiAutoClick += 1;
        quantiAutoClick1 += 1;
        precoAutoClick1VAR = Math.floor(500 * Math.pow(1.25, quantiAutoClick1));

        quantosCliques.textContent = formatarNumero(Math.floor(PontosOuCliquesTotal));
        precoAutoClick1.textContent = formatarNumero(precoAutoClick1VAR);
        quantosAutoClick.textContent = formatarNumero(quantiAutoClick);
        producaoAutoClick.textContent = formatarNumero(quantiAutoClick * quantiUpClick);
        document.title = `${formatarNumero(Math.floor(PontosOuCliquesTotal))} Cliques | Billy Clicker`;
        
    }
});

comprarAutoClick10.addEventListener('click', function(){
    if (PontosOuCliquesTotal >= precoAutoClick10VAR){
        PontosOuCliquesTotal -= precoAutoClick10VAR;
        quantiAutoClick += 10;
        quantiAutoClick10 += 1;
        precoAutoClick10VAR =  Math.floor(precoAutoClick10VAR * 1.8);

        quantosCliques.textContent = formatarNumero(Math.floor(PontosOuCliquesTotal));
        precoAutoClick10.textContent = formatarNumero(precoAutoClick10VAR);
        quantosAutoClick.textContent = formatarNumero(quantiAutoClick);
        producaoAutoClick.textContent = formatarNumero(quantiAutoClick * quantiUpClick);
        document.title = `${formatarNumero(Math.floor(PontosOuCliquesTotal))} Cliques | Billy Clicker`;


    }
});

comprarAutoClick100.addEventListener('click', function(){
    if (PontosOuCliquesTotal >= precoAutoClick100VAR){
        PontosOuCliquesTotal -= precoAutoClick100VAR;
        quantiAutoClick += 100;
        quantiAutoClick100 += 1;
        precoAutoClick100VAR = Math.floor(precoAutoClick100VAR * 2.1);
        quantosCliques.textContent = formatarNumero(Math.floor(PontosOuCliquesTotal));
        precoAutoClick100.textContent = formatarNumero(precoAutoClick100VAR);
        quantosAutoClick.textContent = formatarNumero(quantiAutoClick);
        producaoAutoClick.textContent = formatarNumero(quantiAutoClick * quantiUpClick);
        document.title = `${formatarNumero(Math.floor(PontosOuCliquesTotal))} Cliques | Billy Clicker`;


    }
});



setInterval(function(){
    PontosOuCliquesTotal += (quantiAutoClick * quantiUpClick) / 60;
    quantosCliques.textContent = formatarNumero(Math.floor(PontosOuCliquesTotal));
    document.title = `${formatarNumero(Math.floor(PontosOuCliquesTotal))} Cliques | Billy Clicker`;
}, 1000 / 60);





function formatarNumero(numero){
    if (numero >= 1e15){
        return (numero / 1e15).toFixed(1).replace(/\.0$/, '') + 'Qa';
    }
    if (numero >= 1e12){
        return (numero / 1e12).toFixed(1).replace(/\.0$/, '') + 'T';
    }
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




/* animaçao billy 30 150 */
let elementosTemp = document.querySelector('#elementosTemp');
function mostrarNumero(valor){
    let numero = document.createElement('span');
    numero.classList.add('numeroFlutuante');
    numero.textContent = '+' + formatarNumero(valor);
    let angulo = Math.random() * 120 + 30;
    let distancia = 300;
    let x = Math.cos(angulo * Math.PI / 180) * distancia;
    let y = -Math.sin(angulo * Math.PI / 180) * distancia;
    numero.style.setProperty('--x', x + 'px');
    numero.style.setProperty('--y', y + 'px');
    elementosTemp.appendChild(numero);
    setTimeout(function(){
        numero.remove();
    }, 1200);

}
