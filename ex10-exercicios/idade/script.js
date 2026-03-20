function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('#res')
    
    if (fano.value.length == 0 /*para ver se está vazio*/ || Number(fano.value) > ano) {
        window.alert('[ERRO]Ferifique e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex') //agora tem 2 opções com mesmo nome [0] masc e [1] fem
        var idade = ano - Number(fano.value)
        var gênero = '' // vazio pois exite 2 opções "masc[0]" ou "fem[1]" 

        var img = document.createElement('img') // cria uma tag <img>
        img.setAttribute('id', 'foto') // coloca um id="foto" na tag <img> criada 
        
        if (fsex[0].checked) {
            gênero = 'Homem' //vai checar se é masc[0]
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src','masc-bebe.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'masc-jovem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'masc-adulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'masc-idoso.png')
            }

        } else if (fsex[1].checked) {
            gênero = 'Mulher'// vai checar se é fem[1]
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'fem-bebe.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'fem-jovem.png')
            } else if (idade < 50) {
                //adulta
                img.setAttribute('src', 'fem-adulta.png')
            } else {
                //idosa
                img.setAttribute('src', 'fem-idosa.png')
            }
        }
        res.style.textAlign = 'center'// centralizando texto da resposta usando JS
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img) // adiciona um elemento, no caso o 'img'
    }
}