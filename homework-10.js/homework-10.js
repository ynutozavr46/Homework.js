// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу
// let dog={
//     color:'brown',
//     age:1,
//     family:false,
//     eyes:'blue',
//     name:'Nazar'
// }
//
//
// let man={
//     hair:'brown',
//     age:16,
//     family:true,
//     eyes:'blue',
//     name:'Nazar'
// }
//
// let car={
//     color:'brown',
//     age:8,
//     family:false,
//     eyes:false,
//     name:'Nissan'
// }
//
// let home={
//     color:'white',
//     age:10,
//     family:false,
//     eyes:false,
//     name:'My home'
// }
//
// let book={
//     color:'brown',
//     age:16,
//     family:false,
//     eyes:false,
//     name:'Metro'
// }

//     - Створити масив та вивести його в консоль:
//     - з 5 собак
// - 3 5 людей
// - з 5 автомобілів-
// let arr=['Nissan','Fiat','Ferrari','Bmw','Appolo','Alex','Oleg','Andy','Shyrik','Mimi','Alex','Oleg','Andy','Shyrik','Mimi']
// console.log(arr)

// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка
// let  user={
//     home:true,
//     vodiy:'Andriy',
//     toy:true,
//     table:'Yes',
//     bag:{
//         pen:true,
//         pencil:true,
//         book:3
//     }
//
// }
// console.log(user)

// Дан массив:
    // let users = [
    //     {name: 'vasya', age: 31, status: false},
    //     {name: 'petya', age: 30, status: true},
    //     {name: 'kolya', age: 29, status: true},
    //     {name: 'olya', age: 28, status: false},
    //     {name: 'max', age: 30, status: true},
    //     {name: 'anya', age: 31, status: false},
    //     {name: 'oleg', age: 28, status: false},
    //     {name: 'andrey', age: 29, status: true},
    //     {name: 'masha', age: 30, status: true},
    //     {name: 'olya', age: 31, status: false},
    //     {name: 'max', age: 31, status: true}
    // ];
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія
// - статус Максима
// - ім'я передостаннього об'єкту
// - ім'я третього об'єкта
// - вік Олега
// - вік Олі
// - вік + ім'я 5го об'єкта
// - вік + сатус Анни
// Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!

// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// console.log(users[7].status)
// console.log(users[4].status)
// console.log(users[9].name)
// console.log(users[3].name)
// console.log(users[6].age)
// console.log(users[3].age)
// console.log(users[5].name,users[5].age)
// console.log(users[5].age,users[5].status)

// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"
// - отримує текст з блоку з id "rules"
// - замініть текст параграфа з id 'content' на будь-який інший
// - замініть текст параграфа з id 'rules' на будь-який інший
// - змініть кожному елементу колір фону на червоний
// - змініть кожному елементу колір тексту на синій
// - отримати весь список класів елемента з id=rules і вивести їх в console.log
// - отримати всі елементи з класом fc_rules
// - поміняти колір тексту у всіх елементів fc_rules на червоний
//
// let content=document.getElementById('content');
// console.log(content)

// let rules=document.getElementById('rules');
// console.log(rules)

// let content=document.getElementById('content');
// content.innerText='dasdasdasd';
// console.log(content)

// let rules=document.getElementById('rules');
// rules.innerText='dasdasdasd';
// console.log(rules)

// let rules=document.getElementById('rules').style.color='blue';
// let content=document.getElementById('content').style.backgroundColor='red';

// let rules=document.getElementById('rules').classList
// console.log(rules)

// let fc_rules=document.getElementsByClassName('fc_rules')
// console.log(fc_rules)
// let element=document.getElementsByClassName('fc_rules')
// for (let elements of element) {
//     elements.style.color='red'
// }
// console.log(element)
//