function parimpar(n) {
    if (n % 2 == 0) {
        return 'par'
    } else {
        return 'impar'
    }
}
var res = parimpar(15);
console.log(res)