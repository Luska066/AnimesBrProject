const itemLuffy = document.querySelector('#item1');
const itemZoro = document.querySelector('#item2');
const itemNami = document.querySelector('#item3')
const itemUsopp = document.querySelector('#item4')
const clipOn = document.querySelector('#apresentationImage')
const imgLuffy = document.querySelector('.lufti')
const imgZoro = document.querySelector('.zoro')
const imgNami = document.querySelector('.nami')
const imgUsopp= document.querySelector('.usopp')





function imprimirZoro(){
    
    AnimationFunctionImageZoroAbrindo()

    itemZoro.addEventListener('dblclick',(event) => {
       
        AnimationFunctionZoroFechando()

    })
    
}

function AnimationFunctionImageZoroAbrindo(){
    imgZoro.style.animation = 'AnimationPersonInitial 1s linear'
    imgUsopp.display='none'
    imgZoro.style.display = 'block'
    imgZoro.style.left = '65%'
    imgLuffy.style.display = 'none'
    imgNami.style.display = 'none'


    AnimationFunctionZoroObjectCircle()



}

function AnimationFunctionZoroFechando(){
    clipOn.style.animation = 'circleObjectTwo .4s linear' 
    clipOn.style.clipPath = 'circle(60.0% at 100% 110%)'
    clipOn.querySelector('p').style.display = 'block'
    clipOn.querySelector('p').style.animation = 'displayOFFON .4s linear'
    clipOn.querySelector('p').style.opacity = '1'

    imgZoro.style.animation = 'AnimationPersonFinal .4s linear'
    imgZoro.style.left = '100%'
}

function AnimationFunctionZoroObjectCircle(){
    const h2 = document.querySelector('h2');
    const nomePerson = 'Zoro selecinado'

    h2.innerText = nomePerson
   
    clipOn.setAttribute('class','clipOff');
    document.querySelector('#apresentationImage').style.animation = 'zoroColorAnimation 1s linear'
    document.querySelector('#apresentationImage').style.backgroundColor = '#18E225'
    clipOn.style.clipPath = 'circle(60.0% at 80% 90%)'
    clipOn.style.animation = 'circleObject 1s linear'
    clipOn.querySelector('p').style.display = 'none'
    clipOn.querySelector('p').style.animation = 'displayONOFF 1s linear'
    clipOn.querySelector('p').style.opacity = '0'
}


