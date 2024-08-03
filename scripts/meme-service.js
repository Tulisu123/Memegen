'use strict'
let gImgs = [
    {id: getRandomId(), url: 'images/1.jpg', keywords: ['funny', 'politics']},
    {id: getRandomId(), url: 'images/2.jpg', keywords: ['animal', 'cute']},
    {id: getRandomId(), url: 'images/3.jpg', keywords: ['cute', 'animal']},
    {id: getRandomId(), url: 'images/4.jpg', keywords: ['animal', 'cute']},
    {id: getRandomId(), url: 'images/5.jpg', keywords: ['cute', 'funny']},
    {id: getRandomId(), url: 'images/6.jpg', keywords: ['funny']},
    {id: getRandomId(), url: 'images/7.jpg', keywords: ['cute', 'funny']},
    {id: getRandomId(), url: 'images/8.jpg', keywords: ['funny']},
    {id: getRandomId(), url: 'images/9.jpg', keywords: ['funny', 'cute']},
    {id: getRandomId(), url: 'images/10.jpg', keywords: ['politics', 'funny']},
    {id: getRandomId(), url: 'images/11.jpg', keywords: ['sport']},
    {id: getRandomId(), url: 'images/12.jpg', keywords: ['funny']},
    {id: getRandomId(), url: 'images/13.jpg', keywords: ['funny', 'movies']},
    {id: getRandomId(), url: 'images/14.jpg', keywords: ['funny', 'movies']},
    {id: getRandomId(), url: 'images/15.jpg', keywords: ['funny', 'movies']},
    {id: getRandomId(), url: 'images/16.jpg', keywords: ['funny', 'movies']},
    {id: getRandomId(), url: 'images/17.jpg', keywords: ['funny', 'politics']},
    {id: getRandomId(), url: 'images/18.jpg', keywords: ['funny', 'movies']}
]

let gMeme = {
    selectedImgId: 1,
    selectedLineIdx:0,
    lines: [
        {
            txt:'Your text',
            size:30,
            lineColor:'black',
            fillColor:'black',
            pos:{
                y:50,
                x:0
            }
        }
    ]
}

let gKeywordSearchCountMap = {'funny': 0, 'cat':16, 'baby':12}


function getMeme(){
    return gMeme
}

function getImages(){
    return gImgs
}

function getImageById(ImgId){
    return gImgs.find(img => img.id === ImgId)
}

function updateGmemeText(text){
    gMeme.lines[gMeme.selectedLineIdx].txt = text
}

function updateGmemeLineColor(lineColor){
    gMeme.lines[gMeme.selectedLineIdx].lineColor = `${lineColor}`
}

function updateGmemeFillColor(fillColor){
    gMeme.lines[gMeme.selectedLineIdx].fillColor = `${fillColor}`
}

function increaseFontSize(){
    gMeme.lines[gMeme.selectedLineIdx].size += 5
}

function decreaseFontSize(){
    gMeme.lines[gMeme.selectedLineIdx].size -= 5
}

function addLine(posX,posY,txt = 'Enter text'){
    gMeme.selectedLineIdx++
    gMeme.lines.push({
        txt,
        size:30,
        lineColor:'black',
        fillColor:'black',
        pos:{
            x: posX,
            y: posY
        }
    })
}