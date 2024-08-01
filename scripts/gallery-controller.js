'use strict'

function renderImages(){
    const imagesUrls = getImages()
    let elGalleryContainer = document.querySelector('.gallery-container')
    var strHtml = imagesUrls.map(url =>
         `<img onclick="onSelectImage(); renderMeme('${url}')" src="${url}">`
        )
         .join('')

    elGalleryContainer.innerHTML = strHtml
}