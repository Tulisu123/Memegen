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
    gCenter = { x: gCanvas.width / 2, y: gCanvas.height / 2}

    let {url: imageUrl} = getImageById(meme.selectedImgId)
    let selectedLine = meme.lines[meme.selectedLineIdx]
    renderImage(imageUrl)
    
    meme.lines.forEach((line)=>{
         drawText(line)
        if(line === selectedLine) markSelectedLine(line)
    })
}


function drawText(line) {
    document.querySelector('.row-one-container input').value = line.txt
    const fontSize = line.size
    const txt = line.txt
    const color = line.color

    gCtx.beginPath()

    const pos = {}
    pos.x = gCenter.x
    pos.y = line.pos.y
    
    gCtx.lineWidth = 3
    gCtx.textBaseline = 'middle'
    gCtx.textAlign = 'center'
    gCtx.font = `${fontSize}px Arial`

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

function markSelectedLine(line) {
    const fontSize = line.size;
    const txt = line.txt;
    const pos = { x: gCenter.x, y: line.pos.y };

    const textWidth = gCtx.measureText(txt).width;
    const paddingX = 10; // Horizontal padding around the text
    const paddingY = 20; // Vertical padding around the text

    const rectX = pos.x - textWidth / 2 - paddingX;
    const rectY = pos.y - fontSize / 2 - paddingY / 2;
    const rectWidth = textWidth + paddingX * 2;
    const rectHeight = fontSize + paddingY;

    gCtx.beginPath();
    gCtx.fillStyle = 'rgba(0, 0, 0, 0.5)'; // Semi-transparent black
    gCtx.fillRect(rectX, rectY, rectWidth, rectHeight);
    gCtx.closePath();
}

function onTextInput(txt){
    updateGmemeText(txt)
    renderMeme()
}

function onAddLine() {
    const posX = gCanvas.width / 2
    const posY = getPosY()
    addLine(posX, posY)
    renderMeme() 
}

function onChangeLineColor(color){
    updateGmemeLineColor(color)
    renderMeme()
}

function onIncreaseFont(){
    increaseFontSize()
    renderMeme()
}

function onDecreaseFont(){
    decreaseFontSize()
    renderMeme()
}

function getPosY(){
    let meme = getMeme()
    let positionY

    if (meme.lines.length === 0){
        positionY = 50
    }else{
        const lastLine = meme.lines[meme.lines.length -1]
        positionY = lastLine.pos.y + 50
    }
    return positionY
}
