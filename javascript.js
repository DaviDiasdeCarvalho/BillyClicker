/**** variaveis principais ****/
let botaoCounter = document.querySelector('#botao_principal');
let quantosCliques = document.querySelector('#contador');

/**** variavel principal ****/
let PontosOuCliquesTotal = 0;

/**** variaveis de conquista ****/
let conquista50 = document.querySelector('#conquista50');
/**** variaveis para evitar repetiçao de conquistas ****/
/* */
/**** clique no botao ****/
botaoCounter.addEventListener('click', function(){
    /**** Atualizacao dos cliques(ainda nao inclui update de mais pontos/clique)****/
    PontosOuCliquesTotal++;
    quantosCliques.textContent = PontosOuCliquesTotal;

    /**** Conquistas ****/
    if(PontosOuCliquesTotal === 10){
        conquista50.classList.add('aparecido');
        setTimeout(function() {
            conquista50.classList.remove('aparecido');
        }, 2000)
    }
    


});