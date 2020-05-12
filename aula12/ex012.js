var idade = 22
if (idade < 16) {
    console.log(`Não vota`)
} else {
    if (idade < 18) {
        console.log('Voto não é obrigatorio')
    }
    console.log(`Voto obrigatorio`)
}
var agora = new Date();
hora = agora.getHours();
console.log(`${hora}`)