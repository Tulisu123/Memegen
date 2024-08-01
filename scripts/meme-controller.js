'use strict'

let gCanvas = document.querySelector('canvas')
let gCtx = gCanvas.getContext('2d')
let gCenter

function renderImage(imgSource){
    const img = new Image()
    img.src = `${imgSource}`
    gCanvas.height = (img.naturalHeight / img.naturalWidth) * gCanvas.width
    gCtx.drawImage(img,0,0,gCanvas.width, gCanvas.height)
}

function renderMeme() {
    let meme = getMeme()
    let {url: imageUrl} = getImageById(meme.selectedImgId)
    gCenter = { x: gCanvas.width / 2, y: gCanvas.height / 2}

    renderImage(imageUrl)
    drawText()
}

function onTextInput(txt){
    updateGmemeText(txt)
    renderMeme()
}

function onChangeLineColor(color){
    updateGmemeLineColor(color)
    renderMeme()
}

function drawText() {
    let meme = getMeme()

    const txt = meme.lines[0].txt
    const color = meme.lines[0].color

    gCtx.beginPath()
    const pos = {}


    pos.x = gCenter.x
    pos.y = gCenter.y

    gCtx.lineWidth = 3
    gCtx.textBaseline = 'middle'
    gCtx.textAlign = 'center'
    gCtx.font = '30px Arial'

    gCtx.strokeStyle = color
    gCtx.fillStyle = 'pink' 

    gCtx.fillText(txt, pos.x, pos.y) 
    gCtx.strokeText(txt, pos.x, pos.y)
}


function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gCanvas.width = elContainer.clientWidth
}


function clearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
}


function moveToGallery() {
    document.querySelector('.gallery-container').classList.remove('display-none');
    document.querySelector('.edit-view').classList.remove('display-block');
    document.querySelector('.edit-view').classList.add('display-none');
}