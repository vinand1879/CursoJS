let num = [5, 8, 2, 9, 3]
num.push(1);
num.sort();

console.log(num);
console.log(`O vetor tem ${num.length} elementos.`)
console.log(`O primeiro valor do vetor é ${num[0]}.`)


for (const pos in num) {
    console.log(`Posição ${pos} valor: ${num[pos]}`)
}