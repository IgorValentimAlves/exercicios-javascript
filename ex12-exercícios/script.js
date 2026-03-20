function contar() {
    var inicio = document.querySelector('#inicio')
    var fim = document.querySelector('#fim')
    var passo = document.querySelector('#passo')

    var contando = document.querySelector('#contando')

    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)

    if (p <= 0) {
        p = 1
    }

    contando.innerHTML =''

    for (var c = i; c <= f; c += p ) {
        contando.innerHTML += `${c}`
    } 
}