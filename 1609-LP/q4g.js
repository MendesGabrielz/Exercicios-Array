let disciplinas = []

for (let i = 0; i < 8; i++) {
    let nome = prompt("Digite o nome da matéria " + (i + 1) + ":")
    let nota = parseFloat(prompt("Digite a nota da matéria " + (i + 1) + ":"))
    let frequencia = parseFloat(prompt("Digite a frequência (%) da matéria " + (i + 1) + ":"))
    
    disciplinas.push({ nome: nome, nota: nota, frequencia: frequencia })
}

let somaFrequencia = 0
let notasAcimaDaMedia = 0
let mediaNota = 60

for (let disciplina of disciplinas) {
    somaFrequencia += disciplina.frequencia
    if (disciplina.nota > mediaNota) {
        notasAcimaDaMedia++
    }
}

let mediaFrequencia = somaFrequencia / disciplinas.length
console.log("Média de frequência de todas as disciplinas: " + mediaFrequencia.toFixed(2) + "%")
console.log("Quantidade de notas acima de 60%: " + notasAcimaDaMedia)
