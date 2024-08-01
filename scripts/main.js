'use strict'

function onInit(){
    renderImages()
}
function onSelectImage() {
    document.querySelector('.gallery-container').classList.add('display-none');
    document.querySelector('.edit-view').classList.remove('display-none');
}

function moveToGallery() {
    document.querySelector('.gallery-container').classList.remove('display-none');
    document.querySelector('.edit-view').classList.remove('display-block');
    document.querySelector('.edit-view').classList.add('display-none');
}