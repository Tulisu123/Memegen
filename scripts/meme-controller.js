'use strict'

let gCanvas = document.querySelector('canvas')
let gCtx = gCanvas.getContext('2d')

function renderMeme(imgSource){
    const img = new Image()
    img.src = `${imgSource}`

    img.onload = ()=>{
        gCtx.drawImage(img,0,0,gCanvas.width, gCanvas.height)
    }
}