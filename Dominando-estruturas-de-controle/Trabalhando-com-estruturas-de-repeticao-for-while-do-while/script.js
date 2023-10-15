//for

for (let contador = 0; contador < 4; contador++){
    console.log(contador)
    console.log("Aumentar contador em mais um.")
    }

    // for 
//neste caso tenho um personagem que a cada vez que ele toma um ponto de vida a sua vida aumenta.

let pontosDeVida = 0
for (let i = 0; i < 10; i++){
	pontosDeVida += 1
    console.log("Tomou poção magina " + i)
}

console.log(pontosDeVida + " Totais")

// while é uma alternativa ao for. passamos uam regra apenas.
// devemos sempre incrementar a variável.

let contador = 0
while(contador < 3){
	console.log("Olá")
    contador++
}