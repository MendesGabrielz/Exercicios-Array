let fitaRNA = []

for (let i = 0; i < 10; i++) {
    let elemento = prompt("Digite o " + (i+1) + "º elemento da fita de RNA (A, U, C, G):")
    fitaRNA.push(elemento)
}

let complemento = []

for (let i = 0; i < fitaRNA.length; i++) {
    if (fitaRNA[i] === 'A') complemento.push('U')
    else if (fitaRNA[i] === 'U') complemento.push('A')
    else if (fitaRNA[i] === 'C') complemento.push('G')
    else if (fitaRNA[i] === 'G') complemento.push('C')
}

console.log("Complemento da fita de RNA: " + complemento.join(''))
