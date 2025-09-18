let tiposSanguineos = []

for (let i = 0; i < 10; i++) {
    let tipo = prompt("Digite o tipo sanguíneo da pessoa:")
    tiposSanguineos.push(tipo)
}

console.log("Lista de tipos sanguíneos cadastrados:")

for (let tipo of tiposSanguineos) {
    console.log("Tipo sanguíneo: " + tipo)
}
