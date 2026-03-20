function carregar() {

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
     
    msg.innerHTML = `<p>Agora são ${hora} horas</p>`

    if(hora >= 0 && hora < 12) {
        msg.innerHTML += '<p>Bom dia!</p>' 
        img.src = 'fotomanha.png'
        document.body.style.background = '#f4cb82'
        
    }

    else if(hora >= 12 && hora < 18) {
        msg.innerHTML += '<p>Boa tarde!</p>'
        img.src = 'fototarde.png'
        document.body.style.background ='#fc9b3e'
    }    

    else {
        msg.innerHTML += '<p>Boa noite!</p>'
        img.src = 'fotonoite.png'
        document.body.style.background ='#305295'
    }

}