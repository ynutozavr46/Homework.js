// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]

// function Tag(titleOfTag, action, attrs, attrs1, attrs2, div, h1, span, input, form, option, select) {
//     this.titleOfTag = titleOfTag
//     this.action = action
//     this.attrs = attrs
//     this.div = div
//     this.h1 = h1
//     this.span = span
//     this.input = input
//     this.form = form
//     this.option = option
//     this.select = select
//     this.attrs1 = attrs1
//     this.attrs2 = attrs2
// }
//
// let title = '<a>'
// let action = 'Каждый элемент <area> определяет активные области изображения, которые являются ссылками...'
// let attrs1 = [{titleOfAttr: 'accesskey'}]
// let attrs2 = [{actionOfAttr: 'Переход к области с помощью комбинации клавиш'}]
// let div = ['Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.']
// let h1 = ['HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным. По умолчанию, заголовок первого уровня отображается самым крупным шрифтом жирного начертания, заголовки последующего уровня по размеру меньше. Теги <h1>,...,<h6> относятся к блочным элементам, они всегда начинаются с новой строки, а после них другие элементы отображаются на следующей строке. Кроме того, перед заголовком и после него добавляется пустое пространство.']
// let span = ['Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.']
// let input = ['Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков. Хотя элемент <input> не требуется помещать внутрь контейнера <form>, определяющего форму, но если введенные пользователем данные должны быть отправлены на сервер, где их обрабатывает серверная программа, то указывать <form> обязательно. То же самое обстоит и в случае обработки данных с помощью клиентских приложений, например, скриптов на языке JavaScript.']
// let form = ['Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков. Хотя элемент <input> не требуется помещать внутрь контейнера <form>, определяющего форму, но если введенные пользователем данные должны быть отправлены на сервер, где их обрабатывает серверная программа, то указывать <form> обязательно. То же самое обстоит и в случае обработки данных с помощью клиентских приложений, например, скриптов на языке JavaScript.']
// let option = ['Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.']
// let select = ['Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. Конечный вид зависит от использования атрибута size тега <select>, который устанавливает высоту списка. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Каждый пункт создается с помощью тега <option>, который должен быть вложен в контейнер <select>. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.']
// let all = new Tag(title, action, attrs1, attrs2, div, h1, span, input, form, option, select)
// console.log(all)
//
// -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// ==============================================

// class Tag{
//     constructor(tag,inner,mass,div,h1,span,input,form,option,select,massn,massin) {
//         this.tag = tag
//         this.inner = inner
//         this.mass = mass
//         this.div = div
//         this.h1 = h1
//         this.span = span
//         this.input = input
//         this.form = form
//         this.option = option
//         this.select = select
//         this.massn = massn
//         this.massin = massin
//     }
// }
// let tag=['<a>']
// let inner = ['Каждый элемент <area> определяет активные области изображения, которые являются ссылками...']
// let massn = [{titleOfAttr: 'accesskey'}]
// let massin = [{actionOfAttr: 'Переход к области с помощью комбинации клавиш'}]
// let div = ['Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.']
// let h1 = ['HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным. По умолчанию, заголовок первого уровня отображается самым крупным шрифтом жирного начертания, заголовки последующего уровня по размеру меньше. Теги <h1>,...,<h6> относятся к блочным элементам, они всегда начинаются с новой строки, а после них другие элементы отображаются на следующей строке. Кроме того, перед заголовком и после него добавляется пустое пространство.']
// let span = ['Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.']
// let input = ['Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков. Хотя элемент <input> не требуется помещать внутрь контейнера <form>, определяющего форму, но если введенные пользователем данные должны быть отправлены на сервер, где их обрабатывает серверная программа, то указывать <form> обязательно. То же самое обстоит и в случае обработки данных с помощью клиентских приложений, например, скриптов на языке JavaScript.']
// let form = ['Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков. Хотя элемент <input> не требуется помещать внутрь контейнера <form>, определяющего форму, но если введенные пользователем данные должны быть отправлены на сервер, где их обрабатывает серверная программа, то указывать <form> обязательно. То же самое обстоит и в случае обработки данных с помощью клиентских приложений, например, скриптов на языке JavaScript.']
// let option = ['Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.']
// let select = ['Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. Конечный вид зависит от использования атрибута size тега <select>, который устанавливает высоту списка. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Каждый пункт создается с помощью тега <option>, который должен быть вложен в контейнер <select>. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.']
// let all = new Tag(tag, inner, massn,massin, div, h1, span, input, form, option, select)
// console.log(all)

// ==============================================
//     - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

// let car = {
//     model: 'veyron',
//     brand: 'bugatti',
//     year: 2006,
//     maxspeed: 400,
//     motor: 16.4,
//     driver:[],
//     drive: function () {
//         console.log('їдемо зі швидкістю' + ' ' + this.maxspeed+'km/hour')
//     },
//     info: function () {
//         console.log(`
//         model:${this.model}
//         brand:${this.brand}
//         year:${this.year}
//         maxspeed:${this.maxspeed}
//         motor:${this.motor}
//         driver:${this.driver}
//                     `)
//     },
//     increaseMaxSpeed:function (newSpeed) {
//         newSpeed = +prompt('Increase your car speed:')
//         // if (typeof newSpeed === 'number') {
//         this.maxspeed += newSpeed
//         console.log(this.maxspeed+'km/hour')
//         // } else {
//         //     console.log('Not a number try again!')
//         // }
//     },
//     changeyear:function (newValue) {
//         newValue = +prompt('Change year:')
//         this.year = newValue
//         console.log('Year:'+this.year)
//     },
//     addDriver:function (driver){
//         this.driver=driver
//         console.log(this.driver)
//     }
// }
// let drivers={name:'Andy',age:18,wife:true,experience:'none'}
//
//
// car.drive()
// car.info()
// car.increaseMaxSpeed()
// car.changeyear()
// car.addDriver(drivers)

// ==============================================
//     - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================


// class Car{
//     constructor(model,factory,year,maxspeed,motor) {
//         this.model=model
//         this.factory=factory
//         this.year=year
//         this.maxspeed=maxspeed
//         this.motor=motor
//
//     }
//     drive(){
//         console.log('їдемо зі швидкістю' + ' ' + this.maxspeed+'km/hour')
//     }
//     info () {
//         console.log('model:'+this.model,'factory:'+this.factory,'year:'+this.year,'maxspeed:'+this.maxspeed,'motor:'+this.motor)
//     }
//     increaseMaxSpeed(newSpeed){
//         newSpeed = +prompt('Increase your car speed:')
//         this.maxspeed += newSpeed
//         console.log(this.maxspeed+'km/hour')
//     }
//     changeyear(newValue){
//         newValue = +prompt('Change year:')
//         this.year = newValue
//         console.log('year:'+this.year)
//     }
//     addDriver(driver){
//         this.driver=driver
//         console.log(this.driver)
//     }
// }
// let drivers={name:'Andy',age:18,wife:true,experience:'none'}
// let car=new Car('veyron','bugatti',2006,400,16.4)
// console.log(car.drive())
// console.log(car.info())
// console.log(car.increaseMaxSpeed())
// console.log(car.changeyear())
// console.log(car.addDriver(drivers))

//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

// function Car(
// model,
// factory,
// year,
// maxspeed,
// motor,
// driver
// ){
//     this.model=model;
//     this.factory=factory;
//     this.year=year;
//     this.maxspeed=maxspeed;
//     this.motor=motor;
//     this.driver=driver
//
//     this.drive=function () {
//         console.log('їдемо зі швидкістю' + ' ' + this.maxspeed+'km/hour')
//     }
//    this.info=function () {
//         console.log(`
//         model:${this.model}
//         brand:${this.brand}
//         year:${this.year}
//         maxspeed:${this.maxspeed}
//         motor:${this.motor}
//         driver:${this.driver}
//                     `)
//     }
//     this.increaseMaxSpeed=function (newSpeed) {
//         newSpeed = +prompt('Increase your car speed:')
//         // if (typeof newSpeed === 'number') {
//         this.maxspeed += newSpeed
//         console.log(this.maxspeed+'km/hour')
//         // } else {
//         //     console.log('Not a number try again!')
//         // }
//     }
//     this.changeyear=function (newValue) {
//         newValue = +prompt('Change year:')
//         this.year = newValue
//         console.log('Year:'+this.year)
//     }
//     this.addDriver=function (driver){
//         this.driver=driver
//         console.log(this.driver)
//     }
//     }
// let drivers={name:'Andy',age:18,wife:true,experience:'none'}
// let car=new Car('veyron','bugatti',2006,400,16.4)
// car.drive()
// car.increaseMaxSpeed()
// car.changeyear()
// car.addDriver(drivers)

// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================

// class popelushka{
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
//
// let popelushka1 =  new popelushka('Margarita', 17, 36);
// let popelushka2 =  new popelushka('Vika', 16, 38);
// let popelushka3 =  new popelushka('Katya', 17, 37);
// let popelushka4 =  new popelushka('Nastya', 15, 35);
// let popelushka5=  new popelushka('Ira', 3, 15);
// let popelushka6 =  new popelushka('Sofia', 24, 37);
// let popelushka7 =  new popelushka('Triss', 19, 33);
// let popelushka8 =  new popelushka('Yenifer', 13, 32);
// let popelushka9 =  new popelushka('Ciri', 18, 35);
// let popelushka10 =  new popelushka('Veronika', 20, 37);
//
// let arrpopeluskas = [popelushka1, popelushka2, popelushka3, popelushka4, popelushka5, popelushka6, popelushka7,
//     popelushka8, popelushka9, popelushka10];
//
// class  Prince extends popelushka{
//     constructor(name,age,shoes) {
//         super();
//         this.shoe =shoes;
//     }
//
//     searchPopeluska(){
//         let search = null;
//         for (const arrpopeluska of arrpopeluskas) {
//             if (arrpopeluska.footSize ===this.shoe)
//                 search =arrpopeluska;
//         }
//         console.log(`Popelushka name : ${search.name} `);
//         console.log(search);
//     }
//
// }
// let prince = new Prince('Andi', 16,35);
//
// prince.searchPopeluska(arrpopeluskas);

// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// // --Створити 10 попелюшок , покласти їх в масив
// // --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// // -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// // // ==============================================
//
// class popelushka{
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
//
// let popelushka1 =  new popelushka('Margarita', 17, 36);
// let popelushka2 =  new popelushka('Vika', 16, 38);
// let popelushka3 =  new popelushka('Katya', 17, 37);
// let popelushka4 =  new popelushka('Nastya', 15, 35);
// let popelushka5=  new popelushka('Ira', 3, 15);
// let popelushka6 =  new popelushka('Sofia', 24, 37);
// let popelushka7 =  new popelushka('Triss', 19, 33);
// let popelushka8 =  new popelushka('Yenifer', 13, 32);
// let popelushka9 =  new popelushka('Ciri', 18, 35);
// let popelushka10 =  new popelushka('Veronika', 20, 37);
//
// let arrpopeluskas = [popelushka1, popelushka2, popelushka3, popelushka4, popelushka5, popelushka6, popelushka7,
//     popelushka8, popelushka9, popelushka10];
//
// class  Prince extends popelushka{
//     constructor(name,age,shoes) {
//         super();
//         this.shoe =shoes;
//     }
//
//     searchPopeluska(){
//         let search = null;
//         for (const arrpopeluska of arrpopeluskas) {
//             if (arrpopeluska.footSize ===this.shoe)
//                 search =arrpopeluska;
//         }
//         console.log(`Popelushka name : ${search.name} `);
//         console.log(search);
//     }
//
// }
// let prince = new Prince('Andi', 16,35);
//
// prince.searchPopeluska(arrpopeluskas);