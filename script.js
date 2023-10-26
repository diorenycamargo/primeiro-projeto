function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    //pegar a tag img

    //substituir a imagem
    if(html.classList.contains('light')) {
        //se tiver light mode, adicionar a imagem light
        img.setAttribute('src', './assets/avatar-light1.jpg')
    } else {
        // se tiver sem light mode, manter a imagem normal
        img.setAttribute('src', './assets/avatar1.jpeg')
    }



}