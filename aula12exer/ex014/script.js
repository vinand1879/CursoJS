function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 5) {
        //Boa madrugada 
        img.src = 'madrugada.jpg'
        document.body.style.background = 'darkblue';
    } else
    if (hora >= 5 && hora < 12) {
        // Bom dia
        img.src = 'manha.jpg'
        document.body.style.background = 'rgb(93, 93, 240)';
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde
        img.src = 'tarde.jpg'
        document.body.style.background = 'rgb(133, 107, 167)';
    } else {
        //Boa noite
        img.src = 'noite.jpg'
        document.body.style.background = 'rgb(40, 23, 133)';

    }

}