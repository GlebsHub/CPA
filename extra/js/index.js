// Добавьте в документ не менее 10 разных ссылок, внутри ссылки добавьте некоторый текст,
//  при этом у некоторых ссылок этот текст должен повторяться.

















// Создайте динамически таблицу, в которой в первой колонке будет уникальный текст ссылки, 
// во второй колонке количество ссылок, в третьей колонке куда ведут эти ссылки (аттрибут href) через запятую

// function createTable(){
//     let newTable = document.createElement('table')
//     for (let y = 0; y<=10; y++){
//         let newRow = newTable.insertRow(y)
//         for( let x = 0; x <=2; x++){
//             let newCell = newRow.insertCell(x);

//             if(y === 0 && x ===0){
//                 newCell.width = 50;
//             } 
//             else if (y === 0 && x>0){
//                 newCell.className='yellow';
//                 newCell.innerHTML = x;
//                 newCell.width = 50
//             }
//             else if (y > 0 && x===0){
//                 newCell.className='yellow';
//                 newCell.innerHTML = y;
//                 newCell.width = 50
//             } 
//         }
       
//     }
   
// }
// document.body.appendChild(newTable)