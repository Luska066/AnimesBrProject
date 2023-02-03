let itemLuffy = document.querySelector('#item1');
let itemZoro = document.querySelector('#item2');
let itemNami = document.querySelector('#item3')
let itemUsopp = document.querySelector('#item4')
let clipOn = document.querySelector('#apresentationImage')
let imgLuffy = document.querySelector('.lufti')
let imgZoro = document.querySelector('.zoro')
let imgNami = document.querySelector('.nami')
let imgUsopp= document.querySelector('.usopp')



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


/*--------------------------------------------------*/
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


/*--------------------------------------------------*/

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


/*--------------------------------------------------*/




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


