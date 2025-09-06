let i1 = document.getElementById('i1')
let i2 = document.getElementById('i2')
let i3 = document.getElementById('i3')
let desc1 = document.getElementById('descriçao1')
let desc2 = document.getElementById('descriçao2')
let desc3 = document.getElementById('descriçao3')
i1.style.backgroundColor = 'var(--fundo)'

function album(qual) {
    if (qual == 'i1') {
        i1.style.backgroundColor = 'var(--fundo)'
        desc1.style.display = 'grid'
        i2.style.backgroundColor = 'var(--cor2)'
        desc2.style.display = 'none'
        i3.style.backgroundColor = 'var(--cor2)'
        desc3.style.display = 'none'
    }
    if (qual == 'i2') {
        i2.style.backgroundColor = 'var(--fundo)'
        desc2.style.display = 'grid'
        i1.style.backgroundColor = 'var(--cor2)'
        desc1.style.display = 'none'
        i3.style.backgroundColor = 'var(--cor2)'
        desc3.style.display = 'none'
    }
    if (qual == 'i3') {
        i3.style.backgroundColor = 'var(--fundo)'
        desc3.style.display = 'grid'
        i2.style.backgroundColor = 'var(--cor2)'
        desc2.style.display = 'none'
        i1.style.backgroundColor = 'var(--cor2)'
        desc1.style.display = 'none'
    }
}


