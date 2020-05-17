//alert('Ola!');
function contar() {
    var inicio = window.document.getElementById('cInicio');
    var fim = window.document.getElementById('cFim');
    var intervalo = window.document.getElementById('inter');
    var res = window.document.getElementById('res');

    var i = Number(inicio.value);
    var f = Number(fim.value);
    var inter = Number(intervalo.value);

    if (inicio.value.length == 0 || fim.value.length == 0 || intervalo.value.length == 0 || inicio.value > fim.value || intervalo.value == 0) {
        res.style.textAlign = 'center';
        var aviso = "Valores incoerente.\n";

        if (inicio.value.length == 0) {
            inicio.style.border = '2px solid red';
            aviso += "- Valor de inicio vazio. \n"
        }
        if (fim.value.length == 0) {
            fim.style.border = '2px solid red';
            aviso += "- Valor de fim vazio. \n"
        }
        if (intervalo.value.length == 0 || intervalo.value == 0) {
            intervalo.style.border = '2px solid red';
            aviso += "- Valor de intervalo vazio. \n"
        }
        if (inicio.value.length != 0 && fim.value.length != 0 && inicio.value > fim.value) {
            fim.style.border = '2px solid red';
            aviso += "- Valor de Inicio incompativel com o valor Fim. \n"
        }
        alert(aviso);

    } else {
        res.style.textAlign = 'center';
        res.innerHTML = "";

        inicio.style.border = '2px solid green';
        fim.style.border = '2px solid green';
        intervalo.style.border = '2px solid green';

        for (var c = i; c <= f; c += inter) {
            res.innerHTML += `&#128527; ${c} }`;
        }

    }


}