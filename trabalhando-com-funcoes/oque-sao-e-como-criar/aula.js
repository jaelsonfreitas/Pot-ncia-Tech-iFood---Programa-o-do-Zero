// para chamar um função digito o nome dela seguido de ()
torrar()

function torrar(){
//tudo que estiver dentro da chaves é o escopo da função.
	console.log("Torrando o pão. em 3. 2. 1.")
    egetarPao()
}

function egetarPao(){
	console.log("Egetando pão pronto")
    console.log("Pronto.")
    }

    // funções nao devem iniciar com números.
// Evite nome com espaço, use padrao camelCase
// Funçoes são ações, coloque o nome claro do que esta mesma faz.
// Sempre que abrir uma chave coloque um novo nivel de identacão.
mainSaveData()

function mainSaveData(){
	getData()
    checkValues()
    sendToDataBase()
}

function enviarEmail(){}
function salvarNoBancoDeDado(){}



//Função que recebe todos os dados.
function getData(){
// lógica implentada aqui
	console.log("Pegando dados de usuários")
}

function checkValues(){
	console.log("Validando dados")
}

function sendToDataBase(){
	console.log("Cadastrando Dados")
}

// Pela boa prática cada função deve fazer uma única coisa.