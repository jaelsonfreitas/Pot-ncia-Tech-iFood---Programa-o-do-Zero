function levelCalculator (victories, defeats) {

}
// primeiro criei a função com dois parâmetros ja estabelecidos.

let winBalance = victories - defeats;

// neste trecho a variável winBalance irá armazenar a diferença entre a vitoria e derrota do jogador.

let level;
if (winBalance < 10){
	level = "Ferro";
 } else if (winBalance >= 10 && winBalance <= 20 ){
    level = "Bronze";
 } else if (winBalance >= 21 && winBalance <= 50){
    level = "Prata";
 } else if (winBalance >= 51 && winBalance <= 80){
    level = "Ouro";
 } else if (winBalance >= 81 && winBalance <= 90){
    level = "Diamante";
 } else if (winBalance >= 91 && winBalance <= 100){
    level = "Lendário")
 } else {
    level = "Imortal"
 }

 // Aqui acima utilizei uma serie de estruturas de repeticao if else , para conseguir descobrir em qual faixa o jogador se encaixa e conseguir verificar seu nivel. 

 return `O Herói tem saldo de ${winBalance} e está no nível de ${level}`;
}

// aqui vamos criar a mensagem que contém o saldo de vitórias do jogador.
