// AND (&&)
let idade = 18
let vistoVerificado = true
console.log((idade >= 18) && (vistoVerificado === true))

// OR (||) nosso boneco so pode sair se estiver sem chuva OU com guarda chuva.
let tempo = "Sol"
let item = "Chinelo"
let podeSair = (tempo !== "Chuva") || (item === "Guarda-Chuva")
console.log("Nosso personagem pode sair? " + podeSair)

// NOT (!) - nega uma afirmação 
let tempo = "Chuva"
let resultado = tempo !== "Chuva"
console.log(resultado)

let tempo = "Chuva"
let horario = 8
let resultado = (tempo !== "Chuva") && (horario > 6)
console.log(resultado)