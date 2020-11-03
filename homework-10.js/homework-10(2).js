// Взяти файл template_2.html та працювати в ньому
// - Напишіть код, який :
// -- змінює колір тексту елемнту з ід main_header на будь-який інший
// -- робить шириниу елементу ul 400 пікселів
// -- робить шириниу всіх елементів з класом linkList шириною 50%
// -- отримує текст який зберігається в елементі з класом listElement2
// -- отримує всі елементи li та змінює ім колір фону на сірий
// -- отримує всі елементи 'a' та додає їм клас anchor
// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// -- отримати елементи p та змінити їм paddin на довільне значення
// -- отримати елементи з класом text2 та змінити їм текст на довільне значення


// let mainheader=document.getElementById('main_header').style.color='red'

// let element=document.getElementsByTagName('ul')
// for (let i of element){
//     i.style.width='400px';
//
// }
// console.log(element)

// let element=document.getElementsByClassName('linkList')
// for (let elements of element){
//     elements.style.width='45%'
// }
// console.log(element)

// let element=document.getElementsByClassName('listElement2')
// for (let elements of element){
//     elements.innerText
// }
// console.log(element)

// let li=document.getElementsByTagName('li')
// for (let i of li){
//     i.style.backgroundColor='gray'
//     }
//     console.log(li)

// let a=document.getElementsByTagName('a')
// for (let as of a){
//     as.classList.add('anchor')
//     }
// console.log(a)

// let a=document.getElementsByTagName('a')
// for (let i of a){
// if (i.innerText==='link3'){
//    i.style.fontSize='40px'
//     }
// }
// console.log(a)

// let a=document.getElementsByTagName('a')
// for (let i of a){
//     switch (i){
//         case 'XXX':a.textContent
//     }
// i.classList.add('element_XXX')
//     }
// console.log(a)

// let text=prompt('Your color?')
// let sub=document.getElementsByClassName('sub-header')
// for (let i of sub){
//     i.style.backgroundColor=text
// }

// let text=prompt('Your color?')
// let sub=document.getElementsByClassName('sub-header')
// for (let i of sub){
//     if ('text_segment text2'==='content2 segment'){
//         i.style.color=text
//
//     }
//
// }

// let text=prompt('Your Text:')
// let clas=document.getElementsByClassName('content_1')
// for (let i of clas){
// clas=i.innerText=text
// }
// console.log(text)

// let text=prompt('Write random padding:','px')
// let p=document.getElementsByTagName('p')
// for (let i of p){
//     i.style.padding=text+'px'
// }
// console.log(p)

// let text2 =prompt('Your text:')
// let text =document.getElementsByClassName('text2')
// for (let i of text){
//     i.innerText=text2
// }
// console.log(text)