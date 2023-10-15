let ehLigado = false

if(ehLigado) {
	console.log("Executou comando")
}

//permite se o código tome um caminho se algo for verdade.

// else

let possuiOvos = false
let itensComprados = ""
if(possuiOvos){
	itensComprados = "Leite"
}
else{
	console.log("passou na sessão congelados")
    itensComprados = "Lasanha Congelada"
}

console.log("itens comprado:" + itensComprados)

//if - else 
let nivelDeFome = 10

if(nivelDeFome === 1) {
	console.log("Você esta com pouca fome.")
} else if(nivelDeFome ===2){
	console.log("muita fome")
}else{
	console.log("Você esta com tanta fome que comeria um Leão.")
}

//if ecandeado quando fazemos um if junto de outro.