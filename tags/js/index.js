// считает ссыслки
function arrayCount(){
    console.log(document.getElementsByTagName('a').length)
}
arrayCount()

// считат картинки 
function imgCount(){
    console.log(document.getElementsByTagName('img').length)
}
imgCount()


// вывод ширины первой картинки

function getFirstImgWidth(){
    console.log(document.getElementById('1').clientWidth)
}
getFirstImgWidth()


// вывод ширины самой широкой картинки

 
function getMaxImgWidth(){
    const lengOne = document.getElementById('1').clientWidth
    const lengTwo = document.getElementById('2').clientWidth
    const lengThree = document.getElementById('3').clientWidth
    let arImgWidth = [lengOne, lengTwo, lengThree];
    let res = Math.max.apply(null, arImgWidth);
    console.log(res)
}

getMaxImgWidth()

// сумма высот картинок

function getSum(){
    
    const lengOne = document.getElementById('1').clientHeight
    const lengTwo = document.getElementById('2').clientHeight
    const lengThree = document.getElementById('3').clientHeight
    let arImgWidth = [lengOne, lengTwo, lengThree];
    let count = arImgWidth.reduce((a,b) => a + b,0)
    console.log(count)
}
getSum()




// сумма длинны картинки
// let img = new Image();
// img.onload = function() {
//    console.log(this.width + 'x' +this.height)
// }

// img.src = 'images/learnJS.png'
// img.src = 'images/freeCodeCamp.png'
// img.src = 'images/codeWars.png'

// ширина и длина картинки
// let img2 = document.getElementById('2')
// let width = img2.clientWidth;
// let height = img2.clientHeight;
// console.log(width) 
// console.log( height)

// const idNum = '1'

// alert (document.getElementById(idNum).id)