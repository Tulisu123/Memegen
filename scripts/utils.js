'use strict'

function getRandomId(length = 8) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    
    return result;
}

function saveMemeToLocalStorage() {
    let meme = getMeme()
    localStorage.setItem('meme', JSON.stringify(meme))
    loadMemeFromLocalStorage()
}

function loadMemeFromLocalStorage() {
    let meme = JSON.parse(localStorage.getItem('meme'));
    console.log(meme)
}