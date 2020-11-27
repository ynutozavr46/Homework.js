// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let id=document.getElementById('text')
//
// id.onclick=()=>{
// id.style.display='none'
// }

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let id=document.getElementById('button')
// //
// // id.onclick=()=>{
// //     id.style.visibility='hidden'
// // }

// -створити
// інпут
// який
// приймає
// вік
// людини
// та
// кнопку
// яка
// підтверджує
// дію.При
// натисканні
// на
// кнопку
// зчитати
// інформацію
// з
// інпуту
// та
// перевірити
// вік
// чи
// меньше
// він
// ніж
// 18, та
// повідомити
// про
// це
// користувача

// let id=document.getElementById('input')
// let button=document.getElementById('button')
// button.onclick=()=>{
// let value=id.value
//     console.log(value)
//     if (value<18){
//         alert('You are not adult!')
//     }else {
//         alert('Welcome!')
//     }
//     }

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

// let coments=[{title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'}]
// let id=document.getElementById('content')
//
// coments.forEach(item=>{
//     let div=document.createElement('div')
//     let p=document.createElement('p')
//     let button=document.createElement('button')
//     let h1=document.createElement('h1')
//     document.body.appendChild(div)
//     div.appendChild(h1)
//     div.appendChild(p)
//     div.appendChild(button)
//     h1.innerText=item.title
//     p.innerText=item.body
//     button.innerText='hide body'
//     id.appendChild(div)
//     button.onclick=()=>{
//         p.style.display='none'
//     }
// })

// - Создайте меню, которое раскрывается/сворачивается при клике
// function openmenu(){
// let id=document.getElementById('div')
// let menu=document.getElementById('content')
//     id.style.width='100px'
//     id.style.height='200px'
//     id.style.backgroundColor='black'
//     let click=false
//     menu.onclick=()=>{
//     if (click){
//
//         id.style.display='block'
//         click=false
//
//     }else {
//        id.style.display='none'
//         click=true
//     }
//
//     }
// }
// openmenu()
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// function forms(){
//     let div=document.createElement('div')
//     document.body.appendChild(div)
//         let forms=document.createElement('form')
//         let forms2=document.createElement('form')
//         div.appendChild(forms)
//         div.appendChild(forms2)
//     let input=document.createElement('input')
//     let input2=document.createElement('input')
//     let input3=document.createElement('input')
//     let input4=document.createElement('input')
//     forms.appendChild(input)
//     forms2.appendChild(input2)
//     forms.appendChild(input3)
//     forms2.appendChild(input4)
// let button=document.createElement('button')
//     div.appendChild(button)
// button.innerText='log'
// button.onclick=()=>{
//        let log=input.value+=input2.value+=input3.value+input4.value
//
//
//
// console.log(log)
// }
// }
// forms()

// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.

// let id=document.getElementById('content')
// function table(rows,colons,element){
//    let table=document.createElement('table')
//
//     for (i=0;i<rows;i++){
//         let tr=document.createElement('tr')
//         table.appendChild(tr)
//         for (let j = 0; j < colons; j++) {
//             let td=document.createElement('td')
//             tr.appendChild(td)
// td.innerText=i.toString()+j.toString()
//
//
//
//
//         }
//     }
//     element.appendChild(table)
//     element.appendChild(table)
// }
// table(6,6,id)

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

// let input=document.createElement('input')
// let input1=document.createElement('input')
// let input2=document.createElement('input')
// let button=document.createElement('button')
// let id=document.getElementById('content')
// function add(element){
//     element.appendChild(input)
//     element.appendChild(input1)
//     element.appendChild(input2)
//     element.appendChild(button)
// button.innerText='Create'
//     let table=document.createElement('table')
//    element.appendChild(table)
//     button.onclick=()=>{
//         let colons=input1.value
//         let rows=input.value
//         for (i=0;i<rows;i++) {
//             let row = document.createElement('tr')
//             table.appendChild(row)
//             row.innerText = input2.value
//
//         for (j=0;j<colons;j++){
//             let colon=document.createElement('td')
//             row.appendChild(colon)
//             colon.innerText=input2.value
//
//         }
//             }
//     }
//
//
//
// }
// add(id)

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

// let id = document.getElementById('content')
// let images = [{
//     img: 1,
//     inner: 'screen-image-mercenary-49f166ed.jpg'
// }, {
//     img: 2,
//     inner: 'screen_a_mercenary_on_the_rise_en.0.jpg'
// }, {
//     img: 3,
//     inner: 'Обложка_компьютерной_игры_Cyberpunk_2077.jpg'
// }]
// let img = document.createElement('img')
// let button = document.createElement('button')
// let button1 = document.createElement('button')
// id.appendChild(img)
// id.appendChild(button)
// id.appendChild(button1)
// button.innerText = 'left'
// button1.innerText = 'right'
// img.width = 400
// let index = 0
// img.src = images[index].inner
// button.onclick = () => {
//     index - 1 < 0
//         ? index = images.length - 1
//         : index = index - 1
//     img.src=images[index].inner
// }
// button1.onclick = () => {
//     index + 1 > images.length-1
//         ? index = 0
//         : index = index + 1
//     img.src=images[index].inner
// }

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

// let words=['suka','blyat']
// let input=document.createElement('input')
// input.setAttribute('type','string')
// let id=document.getElementById('content')
// id.appendChild(input)
// let button=document.createElement('button')
// id.appendChild(button)
// button.innerText='Check'
// button.onclick=()=>{
// for (let i=0;i<words.length;i++){
//     if (input.value===words[i]){
//         alert('Have invalid words')
//     }else {
//         console.log(input.value)
//     }
//
// }
//
// }

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

// let words=['suka','blyat']
// let input=document.createElement('input')
// input.setAttribute('type','string')
// let id=document.getElementById('content')
// id.appendChild(input)
// let button=document.createElement('button')
// id.appendChild(button)
// button.innerText='Check'
// button.onclick=()=>{
// let text=input.value
//     for (let i=0;i<words.length;i++){
//         if (text.includes(words[i])){
//             alert('Have wrong words')
//         }else  {
//             console.log(input.value)
//         }
//
//     }
//
// }

// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
//     При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
// let id=document.getElementById('content')
// let id2=document.getElementById('wrap')
// let h2=document.getElementsByTagName('h2')
// let ul=document.createElement('ul')
// for (i=0;i<h2.length;i++){
//    let li=document.createElement('li')
//     let a=document.createElement('a')
//     let yakor='yakor'+i
//     a.href='#'+yakor
//     h2[i].setAttribute('id',yakor)
//     a.innerHTML=h2[i].innerText
//     li.appendChild(a)
//     ul.appendChild(li)
// }
// id.appendChild(ul)
// id.style.width='30%'
// id2.style.width='70%'
// id.style.display='flex'
// id2.style.display='flex'

// -- взять массив пользователей
// let usersWithAddress = [
//     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

let usersWithAddress = [
    {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
let id=document.getElementById('content')
let maindiv=document.createElement('div')
maindiv.appendChild(each(usersWithAddress))
id.appendChild(maindiv)
let input=document.createElement('input')
input.setAttribute('type','checkbox')
id.appendChild(input)
let input2=document.createElement('input')
input2.setAttribute('type','checkbox')
id.appendChild(input2)
let input3=document.createElement('input')
input3.setAttribute('type','checkbox')
id.appendChild(input3)
let button=document.createElement('button')
id.appendChild(button)
button.innerText='filter'
function  each(array){
    let inner=document.createElement('div')
    array.forEach(user=>{
        let div=document.createElement('div')
        let h2=document.createElement('h2')
        h2.innerText=`name: ${user.name}`
        div.style.backgroundColor='grey'
        div.innerHTML=JSON.stringify(user)
div.appendChild(h2)
        inner.appendChild(div)

    })
return inner
}

button.onclick= ev=>{
    let array=JSON.parse(JSON.stringify(usersWithAddress))
    if (input.checked)array=array.filter(value =>!value.status )
    if (input2.checked)array=array.filter(value =>value.age>=29 )
    if (input3.checked)array=array.filter(value =>value.address.city==="Kyiv" )
document.write(array)
}

