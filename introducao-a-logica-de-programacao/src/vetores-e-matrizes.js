let pokemon = ["Pikachu", "charmander", "Bulbasaur"]
let timePokemon = [
    ["Pikachu", "M", "level 1"],
    ["charmander", "F", "level2"]
]

console.log(" O Pokemon "+ timePokemon[1][0] + " é do sexo " + timePokemon[1][1] + " e está no nível" + timePokemon[1][2] )

console.log(pokemon[0])

pokemon.shift()
pokemon.pop()
// em quase todas as linguagens de programaçòes as posições começam no 0. 
// para descobrir mais sobre todas as opçoes de vetores consulte a documentação oficial. 
// Quando quisermos guardar coleçoes de coisas parecidas use vetores.