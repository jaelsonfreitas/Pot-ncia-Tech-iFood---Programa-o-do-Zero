class formaDeBolo {
    constructor(saborDaMassa, recheio){
        this.saborDaMassa = saborDaMassa
        this.recheio = recheio
    }
    // para declarar um funcao dentro de uma classe nao preciso usar a palavra function.
    escrever(){
        console.log(`Um delicioso bolo de: ${this.saborDaMassa} com recheio de ${this.recheio}`);
    }
}

let boloFesta = new formaDeBolo ("Chocolate", " Nutella")
boloFesta.escrever()