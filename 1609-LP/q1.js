// Ler 5 preços
// Mostrar o indice do produto mais caro
// Mostrar o preço


let precos = []

for (let i = 0; i < 5; i++) {


    let p = prompt("Digite o valor dos produtos: ")
    precos.push(p)

}

let precoMaiscaro = Math.max(...precos) // Math.max(...nomedoarray) faz com que pegue o maior numero dentro desse mesmo array.
let indiceMaiscaro = precos.indexOf(precoMaiscaro) // nomedoarray.IndexOf(variavel) faz com que ache a posição dessa varivael dentro do array especificado no inicio.


console.log("Sua posição é: ", indiceMaiscaro)