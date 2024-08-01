'use strict'

function onInit(){
    renderImages()
}
function onSelectImage() {
    document.querySelector('.gallery-container').classList.add('display-none');
    document.querySelector('.canvas-container').classList.remove('display-none');
    document.querySelector('.canvas-container').classList.add('display-block');
    document.querySelector('.edit-view').classList.remove('display-none');
    document.querySelector('.edit-view').classList.add('display-block');
    document.querySelector('.actions').classList.remove('display-none');
    document.querySelector('.actions').classList.add('display-block');
}

function moveToGallery() {
    document.querySelector('.gallery-container').classList.remove('display-none');
    document.querySelector('.canvas-container').classList.add('display-none');
    document.querySelector('.canvas-container').classList.remove('display-block');
    document.querySelector('.edit-view').classList.remove('display-block');
    document.querySelector('.edit-view').classList.add('display-none');
    document.querySelector('.actions').classList.add('display-none');
    document.querySelector('.actions').classList.remove('display-block');
}