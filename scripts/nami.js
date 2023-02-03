const itemLuffy = document.querySelector('#item1');
const itemZoro = document.querySelector('#item2');
const itemNami = document.querySelector('#item3')
const itemUsopp = document.querySelector('#item4')
const clipOn = document.querySelector('#apresentationImage')
const imgLuffy = document.querySelector('.lufti')
const imgZoro = document.querySelector('.zoro')
const imgNami = document.querySelector('.nami')
const imgUsopp= document.querySelector('.usopp') 

function imprimirNami(){
   
   
    AnimationFunctionImageNamiAbrindo()
  
    itemNami.addEventListener('dblclick',() => {
      AnimationFunctionNamiFechando()
    })
    
  
}


function AnimationFunctionImageNamiAbrindo(){
    imgNami.style.animation = 'AnimationPersonInitial 1s linear'
    imgNami.style.display = 'block'
    imgNami.style.left = '64%'
    imgNami.style.width = '30%'

    imgNami.style.display = 'block'
    imgZoro.style.display = 'none'
    imgUsopp.style.display='none'
    imgLuffy.style.display = 'none'


    AnimationFunctionNamiObjectCircle()



}

function AnimationFunctionNamiFechando(){
    clipOn.style.animation = 'circleObjectTwo .5s linear' 
    clipOn.style.clipPath = 'circle(60.0% at 100% 110%)'
    clipOn.querySelector('p').style.animation = 'displayOFFON .4s linear'
    clipOn.querySelector('p').style.opacity = '1'
    clipOn.querySelector('p').style.display = 'block'
  
    imgNami.style.animation = 'AnimationPersonFinal .4s linear'
    imgNami.style.left = '100%'
}

function AnimationFunctionNamiObjectCircle(){
    const h2 = document.querySelector('h2');
    h2.innerText = 'Nami selecinado';

    clipOn.setAttribute('class','clipOff');
    clipOn.style.clipPath = 'circle(60.0% at 80% 90%)';
    clipOn.style.animation = 'circleObject 1s linear';
    clipOn.querySelector('p').style.animation = 'displayONOFF 1s linear';
    clipOn.querySelector('p').style.opacity = '0';

    document.querySelector('#apresentationImage').style.backgroundColor = "#14DCEB"
}