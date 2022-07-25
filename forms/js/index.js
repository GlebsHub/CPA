// ## Формы

// - Добавьте в документ несколько форм (не менее 10), каждая форма должна иметь уникальное имя 
// (задать с помощью соответствующего аттрибута).


// - Отобразите на странице имена всех четных форм через запятую.


// - Добавьте в форму не менее 2 полей (разных видов и разное количество).


// - Добавьте в каждую форму кнопку “Показать имя формы”. 
// При клике на кнопку показать в стандартном всплываюдщем окне текст, отображаемый на кнопке


// - Добавьте в каждую форму кнопку “Принадлежность”. При клике на эту кнопку показать в всплывающем окне id формы, 
// которой принадлежит кнопка.


// - Создайте функцию для сброса полей формы. Добавьте к каждой форме кнопку “Сбросить”. 
// Эта кнопка сбрасывает все значения той формы, на которую кликнул пользователь.


// - Добавьте в каждую форму кнопку “Показать количество полей”.
//  При клике на ней показывается высплывающее окно с кол-во полей в форме.

const getElFromDom = document.querySelectorAll('form')
console.log(getElFromDom)

const evenForm = function(arr) {
    let enevArray =[];
    for(let i = 0; i < arr.length; i+=2) {
        arr[i].name
        enevArray.push(arr[i].name)
    }
    // в строку и в див
    console.log(enevArray)
}
evenForm(getElFromDom)

const evenFormName = document.querySelectorAll('input')
console.log(evenFormName)


// обращение к DOM

let popupBg = document.querySelector('.popup__bg');
let popup = document.querySelector('.popup');  
let popup2 = document.querySelector('.popup2');  
let openPopupButtons = document.querySelectorAll('.open-popup');
let closePopupButton = document.querySelector('.close-popup');


// вызов модального окна - 
openPopupButtons.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault();  // Предотвращаем дефолтное поведение браузера
        popupBg.classList.add('active'); // Добавляем класс 'active' для фона
        console.log( e.target.id)
       if(e.target.id =='b1'){
        popup.classList.add('active'); // И для самого окна
       }
       if(e.target.id == 'b2'){
        popup2.classList.add('active');
       }
    })
})

// скрытие попап окна при клике на крестик
closePopupButton.addEventListener('click',() =>{// Вешаем обработчик на крестик
    popupBg.classList.remove('active'); // Убираем активный класс с фона
    popup.classList.remove('active');// И с окна
    popup2.classList.remove('active');// И с окна
})


// прячем попап окно при клике на фон
document.addEventListener('click', (e) => {  // Вешаем обработчик на весь документ
    if(e.target === popupBg) { // Если цель клика - фот, то:
        popupBg.classList.remove('active'); // Убираем активный класс с фона
        popup.classList.remove('active')// И с окна
    }
})