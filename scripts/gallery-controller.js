'use strict'

function renderImages(){
    const imagesUrls = getImages()
    let elGalleryContainer = document.querySelector('.gallery-container')
    var strHtml = imagesUrls.map(img =>
         `<img onclick="onSelectImage('${img.id}'); renderMeme()" src="${img.url}">`
        )
         .join('')

    elGalleryContainer.innerHTML = strHtml
}

function onSelectImage(imgId) {
    document.querySelector('.gallery-container').classList.add('display-none');
    document.querySelector('.edit-view').classList.remove('display-none');

    let meme = getMeme()
    meme.selectedImgId = imgId
}
