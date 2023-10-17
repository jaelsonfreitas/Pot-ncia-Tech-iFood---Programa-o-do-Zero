let nomeDoHeroi = "Macaco Loko"; // essa variável criei para guardar o nome do meu Jogador.
let experienciaDoHeroi = 1001; // nessta variável colocaremos a experiência do nosso jogador (Herói)

// Usaremos uma estrutura de decisão para determinar o nível do herói neste caso vou usar if...else if.
let nivelDoHeroi;

if (experienciaDoHeroi < 1000) {
  nivelDoHeroi = "Ferro";
} else if (experienciaDoHeroi >= 1001 && experienciaDoHeroi <= 2000) {
  nivelDoHeroi = "Bronze";
} else if (experienciaDoHeroi >= 2001 && experienciaDoHeroi <= 5000) {
  nivelDoHeroi = "Prata";
} else if (experienciaDoHeroi >= 6001 && experienciaDoHeroi <= 7000) {
  nivelDoHeroi = "Ouro";
} else if (experienciaDoHeroi >= 7001 && experienciaDoHeroi <= 8000) {
  nivelDoHeroi = "Platina";
} else if (experienciaDoHeroi >= 8001 && experienciaDoHeroi <= 9000) {
  nivelDoHeroi = "Ascendente";
} else if (experienciaDoHeroi >= 9001 && experienciaDoHeroi <= 10000) {
  nivelDoHeroi = "Imortal";
} else {
  nivelDoHeroi = "Radiante";
}

// Aqui vamos exibir o nome e o nível do herói
console.log(`O Herói de nome ${nomeDoHeroi} está no nível de ${nivelDoHeroi}`);