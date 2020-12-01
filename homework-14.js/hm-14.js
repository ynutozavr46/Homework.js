// - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.

// let textarea=document.createElement('textarea')
// document.body.appendChild(textarea)
// textarea.value=localStorage.getItem('name')
// textarea.oninput=(ev)=>{
//     localStorage.setItem('Name',ev.target.value)
// }

// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.

// let form=document.createElement('form')
// document.body.appendChild(form)
// let textarea=document.createElement('textarea')
// form.appendChild(textarea)
// let checkbox=document.createElement('input')
// form.appendChild(checkbox)
// checkbox.type='checkbox'
// let radiobuttons=document.createElement('input')
// radiobuttons.type='radio'
// form.appendChild(radiobuttons)
// let select=document.createElement('select')
// form.appendChild(select)
// let option=document.createElement('option')
// let option2=document.createElement('option')
// select.appendChild(option)
// select.appendChild(option2)
// option.innerText='1 variant'
// option2.innerText='2 variant'
// textarea.value=localStorage.getItem('textarea')
// textarea.oninput=(ev =>{
//     localStorage.setItem('textarea',ev.target.value)
// } )
// checkbox.checked=(ev =>{
//     localStorage.setItem('checkbox',ev.value)
// } )
// checkbox.value=localStorage.getItem('checkbox')
// radiobuttons.checked=(ev=>{
//     localStorage.setItem('radiobuttons',ev.value)
// })
// select.onchange=(ev =>{
//     localStorage.setItem('select',ev.target.value)
// } )
// select.value=localStorage.getItem('select')

// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

// let div=document.createElement('div')
// document.body.appendChild(div)
// let left=document.createElement('input')
// // localStorage.clear()
// div.appendChild(left)
// left.value='Left'
// left.setAttribute('type','button')
// let right=document.createElement('input')
// div.appendChild(right)
// right.setAttribute('type','button')
// right.value='Right'
// let textarea=document.createElement('textarea')
// document.body.appendChild(textarea)
// let button=document.createElement('input')
// button.setAttribute('type','button')
// document.body.appendChild(button)
// button.value='Save'
// button.onclick=()=>{
//     localStorage.setItem(localStorage.length+1,textarea.value)
// }
// left.onclick=()=>{
// left.style.visibility='visible'
//     let index
//     for (let key in localStorage){
//         if (localStorage.hasOwnProperty(key)){
// if(localStorage.getItem(key) === textarea.value){
//     index=key
// }
//         }
//
//     }
//     if (index==='1'){
//         left.style.visibility='hidden'
//         return
//     }
// textarea.value=localStorage.getItem(index-1)
// }
// right.onclick=()=>{
//     right.style.visibility='visible'
//     let index
//     for (let key in localStorage){
//         if (localStorage.hasOwnProperty(key)){
//             if(localStorage.getItem(key) === textarea.value){
//                 index=key
//             }
//         }
// }if (index===localStorage.length.toString()){
//         right.style.visibility='hidden'
//         return
//     }
//     textarea.value=localStorage.getItem(+index+1)
//     }

// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта

// let fieldset = document.createElement('fieldset')
// document.body.appendChild(fieldset)
// let legend = document.createElement('legend')
// fieldset.appendChild(legend)
// legend.innerText = 'Register'
// let form = document.createElement('form')
// fieldset.appendChild(form)
// let label = document.createElement('label')
// form.appendChild(label)
// label.innerText = ' Surname, Name, Middle Name :'
// let br = document.createElement('br')
// form.appendChild(br)
// let input = document.createElement('input')
// form.appendChild(input)
// input.setAttribute('type', 'string')
//
//
// let br2=document.createElement('br')
// form.appendChild(br2)
// let label2=document.createElement('label')
// label2.innerText='Phone'
// form.appendChild(label2)
// let br3=document.createElement('br')
// form.appendChild(br3)
// let input2=document.createElement('input')
// form.appendChild(input2)
// input2.setAttribute('type','number')
//
// let br4=document.createElement('br')
// form.appendChild(br4)
// let label3=document.createElement('label')
// label3.innerText='Mail'
// form.appendChild(label3)
// let br5=document.createElement('br')
// form.appendChild(br5)
// let input3=document.createElement('input')
// form.appendChild(input3)
// input3.setAttribute('type','string')
//
// let br6=document.createElement('br')
// form.appendChild(br6)
// let label4=document.createElement('label')
// label4.innerText='Brand'
// form.appendChild(label4)
// let br7=document.createElement('br')
// form.appendChild(br7)
// let input4=document.createElement('input')
// form.appendChild(input4)
// input4.setAttribute('type','string')
//
// let br8=document.createElement('br')
// form.appendChild(br8)
// let label5=document.createElement('label')
// label5.innerText='Department'
// form.appendChild(label5)
// let br9=document.createElement('br')
// form.appendChild(br9)
// let input5=document.createElement('input')
// form.appendChild(input5)
// input5.setAttribute('type','string')
//
// let br10=document.createElement('br')
// form.appendChild(br10)
// let label6=document.createElement('label')
// label6.innerText='Birthday'
// form.appendChild(label6)
// let br11=document.createElement('br')
// form.appendChild(br11)
// let input6=document.createElement('input')
// form.appendChild(input6)
// input6.setAttribute('type','number')
//
// let br12=document.createElement('br')
// form.appendChild(br12)
// let button=document.createElement('input')
// form.appendChild(button)
// button.value='Login'
// button.setAttribute('type','button')
//
// let remove =document.createElement('input')
// form.appendChild(remove)
// remove.setAttribute('type','button')
// remove.value='Unlogin'
//
// remove.onclick=()=>{
//     localStorage.removeItem('User')
//     localStorage.removeItem('Phone')
//     localStorage.removeItem('Mail')
//     localStorage.removeItem('Brand')
//     localStorage.removeItem('Department')
//     localStorage.removeItem('Birthday')
// }
//
// button.onclick=( )=>{
//     localStorage.setItem('User',input.value)
//     localStorage.setItem('Phone',input2.value)
//     localStorage.setItem('Mail',input3.value)
//     localStorage.setItem('Brand',input4.value)
//     localStorage.setItem('Department',input5.value)
//     localStorage.setItem('Birthday',input6.value)
// }





