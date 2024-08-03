'use strict'

let gCanvas = document.querySelector('canvas')
let gCtx = gCanvas.getContext('2d')
let gCenter

function renderImage(imgSource) {
    const img = new Image()
    img.src = `${imgSource}`
    gCanvas.height = (img.naturalHeight / img.naturalWidth) * gCanvas.width
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
}

function renderMeme(removeMark = false) {
    let meme = getMeme()
    gCenter = { x: gCanvas.width / 2, y: gCanvas.height / 2 }

    let { url: imageUrl } = getImageById(meme.selectedImgId)
    let selectedLine = meme.lines[meme.selectedLineIdx]
    renderImage(imageUrl)

    console.log('selected line:', meme.selectedLineIdx)
    meme.lines.forEach((line) => {
        drawText(line)
    })
    if (!removeMark){
        markSelectedLine(selectedLine)
    }
}



function drawText(line) {
    document.querySelector('.row-one-container input').value = line.txt
    const fontSize = line.size
    const txt = line.txt
    const lineColor = line.lineColor
    const fillColor = line.fillColor


    gCtx.beginPath()

    const pos = {}
    pos.x = gCenter.x
    pos.y = line.pos.y

    gCtx.lineWidth = 1.5
    gCtx.textBaseline = 'middle'
    gCtx.textAlign = 'center'
    gCtx.font = `${fontSize}px Arial`

    gCtx.strokeStyle = lineColor
    gCtx.fillStyle = fillColor

    gCtx.fillText(txt, pos.x, pos.y)
    gCtx.strokeText(txt, pos.x, pos.y)
    gCtx.closePath();
}


function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gCanvas.width = elContainer.clientWidth
}

function onChangeSelectedLine() {
    let meme = getMeme()
    if (meme.lines.length < 2) return

    meme.selectedLineIdx++
    if (meme.selectedLineIdx === meme.lines.length) meme.selectedLineIdx = 0

    let selectedLine = meme.lines[meme.selectedLineIdx]

    markSelectedLine(selectedLine)
    renderMeme()
}

function markSelectedLine(line) {
    const fontSize = line.size;
    const txt = line.txt;
    const pos = { x: gCenter.x, y: line.pos.y };

    const textWidth = gCtx.measureText(txt).width;
    const paddingX = 10;
    const paddingY = 10;

    const rectX = pos.x - textWidth / 2 - paddingX;
    const rectY = pos.y - fontSize / 2 - paddingY / 2;
    const rectWidth = textWidth + paddingX * 2;
    const rectHeight = fontSize + paddingY;

    gCtx.beginPath();
    gCtx.fillStyle = 'black';
    gCtx.strokeStyle = 'black';
    gCtx.strokeRect(rectX, rectY, rectWidth, rectHeight);
    gCtx.closePath();
}

function onTextInput(txt) {
    updateGmemeText(txt)
    renderMeme()
}

function onDeleteLine() {
    let meme = getMeme()
    let selectedLineIdx = meme.selectedLineIdx

    meme.lines.splice(selectedLineIdx, 1)
    meme.selectedLineIdx = 0

    renderMeme()
}

function onAddLine() {
    let meme = getMeme()
    meme.selectedLineIdx = meme.lines.length - 1

    const posX = gCanvas.width / 2
    const posY = getPosY()
    addLine(posX, posY)
    renderMeme()
}

function onChangeLineColor(color) {
    updateGmemeLineColor(color)
    renderMeme()
}

function onChangeFillColor(color) {
    updateGmemeFillColor(color);
    renderMeme()
}

function onIncreaseFont() {
    increaseFontSize()
    renderMeme()
}

function onDecreaseFont() {
    decreaseFontSize()
    renderMeme()
}

function getPosY() {
    let meme = getMeme()
    let positionY

    if (meme.lines.length === 0) {
        positionY = 50
    } else {
        const lastLine = meme.lines[meme.lines.length - 1]
        positionY = lastLine.pos.y + 50
    }
    return positionY
}

function moveToGallery() {
    document.querySelector('.gallery-container').classList.remove('display-none');
    document.querySelector('.edit-view').classList.remove('display-block');
    document.querySelector('.edit-view').classList.add('display-none');
}

function clearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
}

gCanvas.addEventListener('click', function() {
    renderMeme(true) 

})
