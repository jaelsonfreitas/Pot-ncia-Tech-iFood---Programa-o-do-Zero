// Definindo a classe Heroi
class Heroi {
    // Construtor da classe para criar objetos Heroi
    constructor(nome, idade, tipo) {
        this.nome = nome;   // Define a propriedade "nome" do objeto Heroi
        this.idade = idade; // Define a propriedade "idade" do objeto Heroi
        this.tipo = tipo;   // Define a propriedade "tipo" do objeto Heroi
    }

    // aqui vamos ver como realizar os ataques, vou usar estrutura de repetição.

    atacar(){
        let ataque; // é a variável para amazenar o tipo de ataque. 
        switch (this.tipo) { // a partir daqui vamos verificar o tipo de heroi.
            case "mago":
                ataque = "usou magia"; // Se for um mago, define o ataque como "usou magia"
                break;
            case "guerreiro":
                ataque = "usou espada"; // Se for um guerreiro, define o ataque como "usou espada"
                break;
            case "monge":
                ataque = "usou artes marciais"; // Se for um monge, define o ataque como "usou artes marciais"
                break;
            case "ninja":
                ataque = "usou shuriken"; // Se for um ninja, define o ataque como "usou shuriken"
                break;
