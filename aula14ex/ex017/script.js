//alert('Ola!');

function tabuada() {
    let num = document.getElementById('num');
    let tab = document.getElementById('seltab')

    if (num.value.lenght == 0) {
        window.alert("Digite um numero! ")
    } else {
        tab.innerHTML = '';
        let n = Number(num.value)
        for (let index = 0; index < 10; index++) {

            let item = document.createElement('option');
            item.text = `${n} X ${index} = ${n*index}`;
            item.value = `tab${index}`;

            tab.appendChild(item);

        }
    }


}