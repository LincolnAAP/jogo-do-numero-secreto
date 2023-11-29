let numerosSorteados = [];
let numeroLimite = 1000;
let numeroSecreto = geradorDeNumero();
let tentativas = 1;

// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do Número Secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'escolha um número de 1 a 10';

function alterarTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function textoInicial() {

    alterarTextoNaTela('h1','Jogo do Número Secreto');
    alterarTextoNaTela('p','escolha um número de 1 a 1000');
    
}

textoInicial()

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        alterarTextoNaTela('h1','Acertou!!!');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}!`;
        alterarTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute < numeroSecreto){
            alterarTextoNaTela('p','O número secreto é maior');
        
        } else {
            alterarTextoNaTela('p','o número secreto é menor');
        }
        tentativas++;
        limparCampo();
    }
}

function geradorDeNumero() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let litaNumerosSorteados = numerosSorteados.length

   if(litaNumerosSorteados == numeroLimite){
        numerosSorteados =[];
   }

   if(numerosSorteados.includes(numeroEscolhido)){
        return geradorDeNumero();
   } else {
        numerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
   }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
    
}

function clicarReniciar(){
    let numeroSecreto = geradorDeNumero();
    let tentativas = 1;
    limparCampo()
    textoInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true);
}