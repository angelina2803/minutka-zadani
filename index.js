// const vteriny = prompt('Napis za kolik vteřin má uplynout než minutka začne zvonit')

// const PridejClassZvuk =() =>{
//     let budik = document.querySelector('.alarm')
//     budik.classList.add('alarm--ring')
//     let audio = document.querySelector('audio')
//     audio.src = 'alarm.mp3' 
//     audio.play()
// }
// const ZastavBudik=()=>{
//     const audio = document.querySelector("#audio");
//     audio.pause();
//     audio.currentTime = 0;
// }
// setTimeout(PridejClassZvuk,vteriny)

// const btnElm = document.querySelector('.tlacitko1')
// btnElm.addEventListener('click', setTimeout)
// const btnElm2 = document.querySelector('.tlacitko2')
// btnElm2.addEventListener('click', ZastavBudik)
let userDelay;

const PridejClassZvuk = () => {
  let budik = document.querySelector('.alarm');
  budik.classList.add('alarm--ring');
};

const PlaySound = () => {
  let audio = document.querySelector('audio');
  audio.src = 'alarm.mp3';
  audio.play();
};

const ZastavBudik = () => {
  const audio = document.querySelector("#audio");
  audio.pause();
  audio.currentTime = 0;
  let budik = document.querySelector('.alarm');
  budik.classList.remove('alarm--ring');
};

let timeoutId;

const ZacitBudik = () => {
  clearTimeout(timeoutId);
  userDelay = parseInt(prompt('Napis za kolik vteřin má uplynout než minutka začne zvonit'), 10) * 1000;
  timeoutId = setTimeout(() => {
    PridejClassZvuk();
    PlaySound();
  }, userDelay);
};

const btnElm = document.querySelector('.tlacitko1');
btnElm.addEventListener('click', ZacitBudik);

const btnElm2 = document.querySelector('.tlacitko2');
btnElm2.addEventListener('click', () => {
  clearTimeout(timeoutId);
  ZastavBudik();
});