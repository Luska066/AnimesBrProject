let itemLuffy = document.querySelector('#item1');
let itemZoro = document.querySelector('#item2');
let itemNami = document.querySelector('#item3')
let itemUsopp = document.querySelector('#item4')
let clipOn = document.querySelector('#apresentationImage')
let imgLuffy = document.querySelector('.lufti')
let imgZoro = document.querySelector('.zoro')
let imgNami = document.querySelector('.nami')
let imgUsopp= document.querySelector('.usopp')





function imprimirUsopp(){
   

    AnimationFunctionImageUsoppAbrindo();
 
    
    itemUsopp.addEventListener('dblclick',() => {
        AnimationFunctionUsoppFechando()
    })
    
     
     
}

function AnimationFunctionImageUsoppAbrindo(){
    imgZoro.style.display = 'none'
    imgLuffy.style.display = 'none'
    imgNami.style.display = 'none'

    imgUsopp.style.animation = 'AnimationPersonInitial 1s linear'
    imgUsopp.style.display = 'block'
    imgUsopp.style.left = '64%'
    
    AnimationFunctionUsoppObjectCircle()
}


function AnimationFunctionUsoppObjectCircle(){
    const h2 = document.querySelector('h2');
    const nomePerson = 'Usopp selecinado'
    h2.innerText = nomePerson
    clipOn.setAttribute('class','clipOff');
    document.querySelector('#apresentationImage').style.backgroundColor = "#EB141B"
    clipOn.style.clipPath = 'circle(60.0% at 80% 90%)'
    clipOn.style.animation = 'circleObject 1s linear'
    clipOn.querySelector('p').style.display = 'none'
    clipOn.querySelector('p').style.animation = 'displayONOFF 1s linear'
    clipOn.querySelector('p').style.opacity = '0'
}

function AnimationFunctionUsoppFechando() {
    clipOn.style.animation = 'circleObjectTwo .4s linear' 
    clipOn.style.clipPath = 'circle(60.0% at 100% 110%)'
    clipOn.querySelector('p').style.display = 'block'
    clipOn.querySelector('p').style.animation = 'displayOFFON .4s linear'
    clipOn.querySelector('p').style.opacity = '1'
    imgUsopp.style.animation = 'AnimationPersonFinal .4s linear'
    imgUsopp.style.left = '100%';
}