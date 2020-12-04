// - створити функцію яка виводить масив

// let text=[1,2,3,4,5,6,7,8,9,10]
// function mytext(){
// console.log('My text here:'+text)
// }
// mytext()

// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
// let text=[]
// function mytext(){
//     for (start=0;start<10;start++){
//     text=Math.floor(Math.random()*10)
//     console.log(text)
//     }
//
// }
// mytext()

// - створити функцію яка приймає три числа та виводить та повертає найменьше.
//
// function mynum() {
//     for (start=0;start<3;start++){
//         let num=prompt('Input your number:')
//     }
// }
// mynum()
// document.write(Math.min(num))

// - створити функцію яка приймає три числа та виводить та повертає найбільше.
// function mynum() {
//     for (start=0;start<3;start++){
//       let  num=prompt('Input your number:')
//     }
// }
// mynum()
// document.write(Math.max(num))
// створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// function numbers(){
//    let min=arguments[0];
//     let max=arguments[0];
//     for (let i of arguments){
//         if (i>max) max=i
//             if (i<min) min=i
//
//
//     }
//     console.log('max',max);
// return min;
//     }
//
// let min=numbers(1,2,3,4,5,6,7,8,9,10)
// console.log('___________')
// console.log('min',min)

// / - створити функцію яка виводить масив
//
// function mytext(){
//     let text=[1,2,3,4,5,6,7,8,9,10]
// console.log(text)
// }
// mytext()

// - створити функцію яка повертає найбільше число з масиву

// let mass=[1,2,3,4,5,6,7,8,9,10]
// const findMax = function (array) {
//     let maxValue = array[0];
//     for(let i=0; i< array.length; i++) {
//         if(maxValue < array[i]) {
//             maxValue = array[i];
//         }
//     }
//     console.log(maxValue);
// }
//
// findMax(mass);

// - створити функцію яка повертає найменьше число з масиву
//
// let mass=[1,2,3,4,5,6,7,8,9,10]
// const findMin = function (array) {
//     let minValue = array[0];
//     for(let i=0; i< array.length; i++) {
//         if(minValue > array[i]) {
//             minValue = array[i];
//         }
//     }
//     console.log(minValue);
// }
//
// findMin(mass);

// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
// let num=[1,2,3,4]
// function my(array){
//     let sum=0;
//     for (i=0;i<num.length;i++){
//         sum+=num[i];
//     }console.log(sum)
//     return sum
// }
// my()

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let num=[2,2,2,2]
// function average (array) {
//     let sum=0;
// for (let i of num){
// sum+=i
// }
// return sum/array.length
//     }
// let averagevalue=average(num)
//     console.log(averagevalue)

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
// let users=[
// //     user={
// //     name:'andy',
// //         age:18,
// //         family:true
// // },
// //   user2=  {
// //         name: 'andy',
// //       age: 18,
// //       family:false
// //     }
// //
// // ]
// //
// // function my(array){
// //     let i=0;
// //     for (let i of users){
// //         if (typeof i ==="object"){
// // i++
// //         }
// //     }console.log(array)
// //     return i
// //     }
// //     let value=my(users)
// // my()
//

// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них

// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];
//
// function my(arrayobj){
//     let i=0;
//     for (let i of arrayobj){
//         if (typeof i ==='object'){
//             for (let key in i){
//                 i++;
//             }
//             }
//     }
//     return i
//     }
// let numbers=my(users)
// console.log(numbers)
// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
// let num=[1,2,3,4];
// let num2=[2,3,4,5];
// function my(array,array2){
//     let result=[]
//
//
//         for ( let i=0;i<num2.length;i++){
//             result.push(num[i]+num2[i]);
//         }
//
// return result
// }
// result1=my([1,2,3,4],[2,3,4,5])
// console.log(result1)

// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// let numbers=[1,2,3,4,5,6]
// function func(array, index) {
//     let arrayNew=[];
//     for (let i = 0; i < array.length; i++) {
//         if (index === i) {   // перевіряє чи вказаний масив === індексу масиву
//             arrayNew.push(array[i] + 1); // якщо та, то добавляє 1 і пушить в кінець
//         }
//         else arrayNew.push(array[i]); // якщо не, просто пустишт в кінець
//     }
//     return arrayNew;
// }
// console.log(func([4,2,1,3], 0)); // виводим новий масив + вносим його та індекс*/

// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// let numbers=[1,0,6,0,3]
// let number=[]
// let zero=[]
// function my(array){
//     for (let i of array){
// if (i===0) {
// zero.push(0)
// }else{
//     number.push(i)
// }
//     }return number.concat(zero)
// }
// console.log(my(numbers))

// створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// function func(array){
//     let clearMass=[];
//     let num=[]
//     for (let i of array) {
//         if (i === 0) {
//             num.push(0)
//         } else clearMass.push(i);
//     }
//     return clearMass.concat(num)
// }
// console.log(func([1,0,6,0,3]));
// - Додає в боді блок з текстом "Hello owu"

// function add(array){
//     let block=document.createElement('div')
//     document.body.appendChild(block)
// block.innerText='Hello owu';
// }
// add()

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// function arg(type,text){
//     let element=document.createElement('div')
//     document.body.appendChild(element)
//     element.innerText=text
//
// }
// arg('number','1,2,3,4,5')

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// let cars = [
//     americancars = {
//         name: 'ford',
//         model: 'gt',
//         year: 2005
//     },
//     asiancars = {
//         name: 'Toyota',
//         model: 'trueno ae 86 gt apex',
//         year: 'very old but gold!'
//
//     },
//     europeancars={
//     name:'bugatti',
//         model:'veyron',
//         year:2006
//     }
// ]
// function addsomecars(array,id){
//    let idtag=document.getElementById(id)
//    let ul=document.createElement('ul')
//     for (let i = 0; i < array.length; i++) {
// let cars=array[i];
// let li=document.createElement('li')
//         li.innerHTML=cars.name
//         ul.appendChild(li)
//     }
//     idtag.appendChild(ul)
// }
// addsomecars(cars,'cars list1')

// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
let cars = [
    car = {
        name: 'ford',
        model: 'gt',
        year: 2005
    },
    car = {
        name: 'Toyota',
        model: 'trueno ae 86 gt apex',
        year: 'very old but gold!'

    },
    car={
    name:'bugatti',
        model:'veyron',
        year:2006
    }
]
// function addblock(array,element){
//     let block=document.createElement('div')
//     document.body.appendChild(block)
//     for (let i of array){
//         let element1=document.createElement(element)
//         block.appendChild(element1)
// for (k=0;k<array.length;k++){
//     element1.innerHTML=(array[k])
// }
//     }
// }
// addblock(cars,'div','p')

// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// //     Для кожної властивості створити всередені блока автомоблія свій блок

// let  block=document.createElement('div')
// function addblock(array,id){
//     let idTag=document.getElementById(id)
//     for (i=0;i<array.length;i++){
//         let car=cars[i]
//    let element=document.createElement('li')
//         block.appendChild(element)
//         element.innerHTML=`${i}-${car.name}`
//         idTag.appendChild(block)
//         }
//
//         for (j=0;j<array.length;j++){
//             let car=cars[j]
//          let insideblock1=document.createElement('div')
//             let insideblock2=document.createElement('div')
//             document.body.appendChild(insideblock1)
//             document.body.appendChild(insideblock2)
//             idTag.appendChild(insideblock1)
//             idTag.appendChild(insideblock2)
//         let element2=document.createElement('li')
//         let element3=document.createElement('li')
//         insideblock1.appendChild(element2)
//         insideblock2.appendChild(element3)
//         element2.innerHTML=`${j}-${car.model}`
//         element3.innerHTML=`${j}-${car.year}`
// block.appendChild(insideblock1)
// block.appendChild(insideblock2)
//
//
//
//         }
// }
// addblock(cars,'wrap')
//
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
//     Приклад масивів:

// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// function mass(array,array1){
//     let users=JSON.parse(JSON.stringify(array))
//     let cities=JSON.parse(JSON.stringify(array1))
//
//     for (let city of cities ){
//         for (let user of users){
//             if (user.id=== city.user_id ){
// users.adress=city
//
//             }
//         }
//
//     }
//     return users
// }
// let result =mass(usersWithId,citiesWithId)
// console.log(citiesWithId.user_id)
// console.log('usersWithId',usersWithId)
// console.log('citiesWithId',citiesWithId)

// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];
