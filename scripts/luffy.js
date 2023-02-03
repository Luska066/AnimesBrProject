const itemLuffy = document.querySelector('#item1');
const itemZoro = document.querySelector('#item2');
const itemNami = document.querySelector('#item3')
const itemUsopp = document.querySelector('#item4')
const clipOn = document.querySelector('#apresentationImage')
const imgLuffy = document.querySelector('.lufti')
const imgZoro = document.querySelector('.zoro')
const imgNami = document.querySelector('.nami')
const imgUsopp= document.querySelector('.usopp')


function imprimirLuffy(){


    AnimationFunctionImageLuffyAbrindo();

    itemLuffy.addEventListener('dblclick',(event) => {
     
        AnimationFunctionImageLuffyFechando()
        
      
    })
}

function AnimationFunctionImageLuffyAbrindo(){
    imgLuffy.style.animation = 'AnimationPersonInitial 1s linear'
    imgLuffy.style.display = 'block'
    imgLuffy.style.left = '65%'
    imgZoro.style.display = 'none'
    imgUsopp.style.display='none'
    AnimationFunctionLuffyObjectCircle();
    
}

function AnimationFunctionLuffyObjectCircle(){
    const h2 = document.querySelector('h2');
    const nomePerson = 'luffy selecinado'

    clipOn.style.animation = 'circleObject 1s linear'
    clipOn.style.clipPath = 'circle(60.0% at 80% 90%)'
    clipOn.setAttribute('class','clipOff');
    document.querySelector('#apresentationImage').style.backgroundColor = "#f0850a"
    clipOn.querySelector('p').style.display = 'none'
    clipOn.querySelector('p').style.animation = 'displayONOFF 1s linear'
}

function AnimationFunctionImageLuffyFechando(){
   
    clipOn.querySelector('p').style.display = 'block'
    clipOn.style.animation = 'circleObjectTwo .4s linear' 
    clipOn.style.clipPath = 'circle(60.0% at 100% 110%)'

    clipOn.querySelector('p').style.opacity = '1'
    imgLuffy.style.animation = 'AnimationPersonFinal .4s linear'
    imgLuffy.style.left = '100%'
}