torrar("Pão de forma.")
torrar("Pão Integral.")
​
function torrar(pao) {
    //escopo da nossa funcão.
    console.log("Torrada feita com: " + pao)
}
​
// geralmente passamos parametros quando queremos que uma função tenha resultados diferente.

// escopo de variáves sempre complica os dev.


// não conseguimos chamar uma variável que só existe dentro do escopo. Se usar var antes de uma variável ela ira existir de maneira Global, porém não é recomendado.

torrar("Pão de Forma", "Jaélson")

function torrar(pao, nome){
	console.log("Torrada feita com: " + pao)
    console.log("Ela é um pedido de:" + nome)
}

// Podemos usar parâmetros Genéricos.
torrar("Pão de Forma", "Jaélson", 15.99)

function torrar(pao, nome = "Consumidor Final", valor){
	console.log("Torrada feita com: " + pao)
    console.log("Ela é um pedido de:" + nome)
    console.log("Com valor total de R$:" + valor)
}

// Interpolação
createStringConnection("db_products", "Jaélson", "1112211")

function createStringConnection (databaseName, user, pass){
	console.log(`connect:DBCONNECT;user=${user};pass=${pass};initial_database=${databaseName}`)
    }