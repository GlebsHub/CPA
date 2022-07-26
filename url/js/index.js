// ## Работа с URL

// - Показать полный адрес URL документа. Выделите имя протокола
//  (должно работать как для локальных файлов, так и для опубликованных в сети Интернет).
//   Выделите имя файла и его расширение отдельно.

// - Выделите подстроку параметров из адресной строки.
//  Создайте из них объект, в котором есть имена и значения параметров.

let regex = new RegExp(`^([^:]+):`);

const elems = document.querySelectorAll('a')
for (const item of elems){
    console.log(item.href)
    console.log(regex.exec(item.href))
}






// const bodyElement = document.body;
// console.log(bodyElement)
// const childNodes = bodyElement.childNodes
// console.log(childNodes)
// console.log(bodyElement.hasChildNodes())
// for (let node of childNodes) {
//     console.log(node)
// }

// const previousSiblingNode = bodyElement.previousSiblingNode;
// const nextSiblingNode = bodyElement.nextSiblingNode;
// const parentNode = bodyElement.parentNode;

// console.log(previousSiblingNode);
// console.log(nextSiblingNode)
// console.log(parentNode)

// const childNodes = bodyElement.childNodes;
// console.log(childNodes)

// const lastChild = bodyElement.lastElementChild;
// console.log(lastChild)


// методы поиска
/* querySelectorAll возвращает все эль-ты внутри elem, 
удовлет-щие данному CSS-селектору. Этот метод дествительно мощный,
потому что может юзать любой css-селектор
метод возвращает коллекцию
*/

// поиск по селектору класс
// const elemsOne = document.querySelectorAll('.link')
// console.log(elemsOne) 

// поиск по селектору тега
// const elemsTwo = document.querySelectorAll('a')
// console.log(elemsTwo)

// поиск пос мешанному селектору тега и класса
// const elemsThree = document.querySelectorAll('a.link')
// console.log(elemsThree)

//  поиск по тегу первого уровня вложенности
// const elemsFour = document.querySelectorAll('.link>li')
// console.log(elemsFour)

//поиск с несколькими классами
// const elemsFive = document.querySelectorAll('.firstClass, second.Classs')


// поиск по вложенным классам
// const elemSix = document.querySelectorAll('lesson__list . lesson text')

// поиск по ID
// const elemsSeven = document.querySelectorAll('#listItem')

// поиск по атрибуту
// const elementEight = document.querySelectorAll('[data-item]');

// поиск по атрибуту со значением
// const elemsEight = document.querySelectorAll('[data-item ="85"]')


//  поулчения кокретного эль-та коллекции
// const elems = document.querySelectorAll('li');


// for (const items of elems) { 
//     console.log(items)
// }

// elems.forEach(item => {
//     console.log(item)
// })

// искать можно не только в document

// const subList = document.querySelectorAll('.lesson__sub-list');
// const subItems = subList[0].querySelectorAll('li');
// console.log(subItems);


// по ID getElementById  
// const getEL = document.getElementById('1Link')
// console.log(getEL)


// getElementsBy
/*
elem.getElementsByTagName(tag)
ищет элементы с данным тегом и возвращает их
в коллекуцию.
пЕРЕДАВ "*" вместо тега, можно получить всех потомковю
*/
// const elems = document.getElementsByTagName('li')
// console.log(elems)
 
// const elems = document.getElementsByClassName('link')
// console.log(elems) 






/*decr
получение параметов из запроса
ф-я получаает  строчку со всеми параметрами,
но параметр содержит в себе '?' - для этого substring(1) отрезает у строки первый символ - он же '?'
получаем все переменные - сплитим строчку по '&'
в цикле
на каждой итеррации
 */

// 1 вариант
// function getQueryVarialbe(variable){
//     const query = window.location.search.substring(1);
//     const vars = query.split('&');

   

//     for (let i=0; i< vars.lengthl; i++) {
//         let pair = vars[i].split('=');
//         if (pair[0] === variable){ return pair[1]}
//     }
//     return(false)
// }
// console.log(getQueryVarialbe('v'))
// console.log(getQueryVarialbe('view'))


// 2 вариант
/* принцип- наполнение объекта данными ключ-значение
далее - обращение к объекту для получения конкретного параметра
реаклизация:
- создается пустой объект queryDict
- обращаемся в location.search
-.substring(1) для удаления '?' вначале
-.split('&') превращаем в массив 
.forEach((item) о массиву
для каждого эль-та создаем переменную param кото-я будет массивом из двух эль-тов
0 эль-т это название нашего параметра
1 значение этого параметра


*/
// function getQueryVarialbe(variable) {
//     let queryDict = {};
//     location.search
//     .substring(1)
//     .split('&')
//     .forEach((item) => {
//         let param = item.split('=');
//         queryDict[variable];
//     });
//     return queryDict[variable];
// }

// console.log(getQueryVarialbe('editors'));
// console.log(getQueryVarialbe('hx'));

// 3*
// function getQuerys() {
//     let queryDict = {};
//     location.search
//     .substring(1)
//     .split('&')
//     .forEach((item) => {
//         let param = item.split('=');
//     });
//     return queryDict
// }

// console.log(getQuerys())


// 4
/* добавили if 
 если param сущ-т в queryDict, то мы будем пушить в этот массив значения.
 иначе создаем массив с одним значением
*/
// function getQuerys() {
//     let queryDict = {};
//     location.search
//     .substring(1)
//     .split('&')
//     .forEach((item) => {
//         let param = item.split('=');

//         if(param[0] in queryDict){
//             queryDict[param[0]].push(param[1]);
//         } else {
//             queryDict[param[0]] = [param[1]];
//         }
//     });
// }


// 5 url, где есть get - параметр, rjnjhsq cjlth;bn d ct,t url

// function getQuerys() {
//         let queryDict = {};
//         location.search
//         .substring(1)
//         .split('&')
//         .forEach((item) => {
//             let param = item.split('=');
    
//             if(param[0] in queryDict) {
//                 queryDict[param[0]].push(decodeURIComponent(param[1]));
//             } else {
//                 queryDict[param[0]] = [decodeURIComponent(param[1])];
//             }
//         });
//         return queryDict;
//     }

// const urlParams = new URLSearchParams(window.location.search);
// const myParam = urlParams.get('editors');

// console.log(myParam);