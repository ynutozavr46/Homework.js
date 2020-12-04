// - создать массив с 20 числами.
// let numbers = [1, 4, 3, 4, 5, 6, 22, 8, 9, 10, 11, 12, 13, 14, 15, 16, 177, 18, 19, 20]
// -- при помощи метода sort и колбека  отсортировать массив.

// let sort=numbers.sort((a, b)=>{
//
//     return a-b
// })
// console.log(sort)
// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.

// let sort=numbers.sort((a, b)=>{
//     return b-a
// })
// console.log(sort)

// -- при помощи filter получить числа кратные 3
// let filter=numbers.filter((value, index, array) =>{
//   return value%3===0
// } )
// console.log(filter)

// -- при помощи filter получить числа кратные 10

// let filer=numbers.filter((value, index, array) =>{
//     return value %10===0
// } )
// console.log(filer)

// -- перебрать (проитерировать) массив при помощи foreach()

// numbers.forEach(value =>{
//     console.log(value)
// } )

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
// let map=numbers.map((value, index, array) =>{
//     return value*3
// }  )
// console.log(map)

// - создать массив со словами на 15-20 элементов.
let words = ['i', 'we', 'they', 'her', 'his', 'them', 'us', 'our', 'he', 'she', 'it', 'our', 'my']
// -- отсортировать его по алфавиту в восходящем порядке.

// let sort=words.sort((a, b)=>{
//     if (a>b){
//         return 1
//     }else{
//         return -1
//     }
// })
// console.log(sort)
// -- отсортировать его по алфавиту  в нисходящем порядке.

// let sort=words.sort((a, b)=>{
//     if (a>b){
//         return -1
//     }else {
//         return 1
//     }
// })
// console.log(sort)

// - отфильтровать слова длиной менее 4х символов

// let filter=words.filter((value, index, array) =>{
//     return value.length<4
// } )
// console.log(filter)

// // -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце

// let map=words.map((value, index, array) =>{
//     return value+'!'
// } )
// console.log(map)
//
// Все
// робити
// через
// функції
// масивів(foreach, map
// ...
// тд
// )
// Дан
// масив :
let users = [{name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true}, {
        name: 'kolya', age: 29, status: true

    }, {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true}, {
        name: 'anya', age: 31, status: false

    }, {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true}, {
        name: 'masha', age: 30, status: true

    }, {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}]

// - відсортувати його за  віком (зростання , а потім окремо спадання)
// let sort=users.sort((a, b)=>{
//     if (a.age>b.age){
//         return -1
//     }else {
//         return 1
//     }
// })
// console.log(sort)

// let sort=users.sort((a, b)=>{
//     if (a.age>b.age){
//         return 1
//     }else {
//         return -1
//     }
// })
// console.log(sort)


// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// let sort=users.sort((a, b)=>{
//     if (a.name.length>b.name.length){
//         return 1
//     }else {
//         return -1
//     }
// })
// console.log(sort)

// let sort=users.sort((a, b)=>{
//     if (a.name.length>b.name.length){
//         return -1
//     }else {
//         return 1
//     }
// })
// console.log(sort)

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// - відсортувати його за індентифікатором

// let jusers=JSON.parse(JSON.stringify(users))
// let map=jusers.forEach((arr)=>{
// arr.id=Math.round(Math.random()*10)+1
//     return arr
// })
// console.log(map)

    // - відсортувати його за індентифікатором

// let jusers=JSON.parse(JSON.stringify(users))
// let sort=jusers.sort((a, b) =>{
//     a.id-b.id
// } )
// console.log(sort)

