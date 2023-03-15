let vteriny = prompt('Napis za kolik vteřin má uplynout než minutka začne zvonit')

const PridejClassZvuk =() =>{
    let budik = document.querySelector('.alarm')
    budik.classList.add = 'alarm--ring'
    let audio = document.querySelector(audio)
    audio.src = 'alarm.mp3' 
    audio.play()
}
const ZastavBudik=()=>{
    audio.stop()
}
setTimeout =(
    PridejClassZvuk,
    vteriny)

const btnElm = document.querySelector('.tlacitko1')
btnElm.addEventListener('click', setTimeout)
const btnElm2 = document.querySelector('.tlacitko2')
btnElm2.addEventListener('click', ZastavBudik)

