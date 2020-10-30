// Дополнительно:
//     - Посмотрев на следюующие выражения, скажите, каков будет вывод в консоль
// console.log(132 > 100 && 45 < 12 );=>false
// console.log(34 > 33 && 23 < 90 );=>true
// console.log(99 > 100 && 45 > 12 );=>false
// console.log(132 > 100 || 45 < 12 );=>true
// console.log(111 > 11 || 45 < 111 );=>true
// console.log((111 > 11 || 45 < 111)&& (132 > 100 || 45 < 12) );=>true
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );=>true
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );=>true
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));=>true
// console.log(!!'-1');=>true
// console.log(!!-1);=>true
// console.log(!!'0');=>true
// console.log(!!'null');=>true
// console.log(!!'undefined');=>true
// console.log(!!(3/'owu'));=>false
// console.log((111 > 11 || 45 < 111) ||  !!'0');=>true
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));=>true

// CLASS
//
// 1.Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true».
// При помощи оператора typeof убедитесь, что значения переменных принадлежат типам: string, number и  boolean.

// let word='Привет';
// let num=123;
// let bool=true;
// let word2='true';
// console.log(typeof word);
// console.log(typeof num);
// console.log(typeof bool);
// console.log(typeof word2);

// 2. Создайте переменные a1, a2, a3, a4, a5. При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений:
//     5 + 3,
//     5 - 3,
//     5 * 3,
//     5 / 3,
//     5 % 3
// поместив результат каждого выражения в соответствующую переменную. Например, let a1 = 5 + 3.

// let a1=5+3;
// let a2=5-3;
// let a3=5*3;
// let a4=5/3;
// let a5=5%3;
// console.log(a1);
// console.log(a2);
// console.log(a3);
// console.log(a4);
// console.log(a5);

// 3.  Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:
//    5 % 3,
//     3 % 5,
//     5 + '3',
//     '5' - 3,
//     75 + 'кг'

// let a6=5%3;
// let a7=3%5;
// let a8=5+'3';
// let a9='5'-3;
// let a10=75+'кг';
// console.log(a6);
// console.log(a7);
// console.log(a8);
// console.log(a9);
// console.log(a10);

// 4. Напишите код, который находит площадь прямоугольника высота 23см. ( переменная height),
// шириной 10см (переменная width), значение площади должно хранится в числовой переменной s.

// let height=23;
// let width=10;
// let s=1/2*width*height;
// console.log(s);

// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//     результат поместите в переменную v.

// let heightC=10;
// let dC=4;
// let r=4/2;
// let pi=3.14;
// let v=(pi*Math.pow(r,2)*heightC)
// console.log(Math.round(v));

// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
// Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).

// let n=3;
// let m=4;
// let kmpow=(Math.pow(n,2)+Math.pow(m,2))
// let k=5
// console.log(k);

// 7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log
//
// let world='Hello World';
// alert(world);
// document.write(world);
// console.log(world);

// 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).

// let fio='rostyslav\n serkis\n oleksandrovich\n 16\n programming';
// alert(fio)

// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//     Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//     Вывести в документ содержимое переменной concatenation спомощью document.write
//
// let str1='Кто';
// let str2='ты';
// let str3='такой?';
// let concatenation=(str1+' '+str2+' '+str3);
//     document.write(concatenation)

// 10.
// Какие
// значения
// выведет
// в
// окно
// браузера
// следующий
// фрагмент
// кода ? и почему ?

//     let str = "20";
//     let a = 5;
// document.write(str + a + "<br/>");=>true
// document.write(str - a + "<br/>")=>true
// document.write(str * "2" + "<br/>");=>true
// document.write(str / 2 + "<br/>");=>true

// 11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
//     parseInt("3.14")=>3.14
//     parseInt("-7.875")=>-7.875
//     parseInt("435")=>435
//     parseInt("Вася")=>NaN

// let numstr=parseInt("3.14");
// let numstr2=parseInt("-7.875");
// let numstr3=parseInt("435");
// let numstr4=parseInt("Вася");
//
// console.log(numstr)
// console.log(numstr2)
// console.log(numstr3)
// console.log(numstr4)

// 12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже
// let str = prompt("Enter something", "ho-ho")
// console.log(str);

// let str = prompt("Enter something", "ho-ho")
// console.log(str);

// 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert

// let str = +prompt('Write your number')
// let str2 = +prompt('Write your number')
// let result=str+str2;
// alert(result);


// 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
// Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert

// let put=prompt('Name Surname');
// let put2=prompt('Age?');
// alert('Доброго вечера ' + put + ',мои поздравления что вам ' + put2);

// =====================
// ======ДОП============
// =====================
//
//
//
//
// 1. Три різних числа вводяться через prompt().
//     За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)
// let num = +prompt('Your number');
// let num2 = +prompt('Your number');
// let num3 = +prompt('Your number');
// if (num < num2 && num < num3) {
//     if (num2 < num3) {
//         document.write(num, num2, num3);
//     } else {
//         document.write(num, num3, num2);
//     }
// } else if (num3 < num2 && num3 < num) {
//     if (num2 < num) {
//         document.write(num3, num2, num);
//     } else {
//         document.write(num3, num, num2);
//     }
// } else if (num2 < num3 && num2 < num) {
//     if (num3 < num) {
//         document.write(num2, num3, num);
//
// } else {
//         document.write(num2, num, num3);
//     }
// }else {
//     document.write('Uknown Number');
// }

// 2.
// Все параматры получаем с клавиатуры!!!!
//     Имитируем поведение пешехода на перекстке.
//     Если светофор зеленый - вывести "иди".
//     Если светофор желтый - вывести "подожди".
//     Если светофор красный - вывести "стой".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!
//

// let color=prompt('What color now','green,yellow,red or not working');
// if (color ==='green'){
//     alert('Иди');
// }
// else if (color ==='yellow'){
//     alert('Подожди')
// }
// else if (color ==='red'){
//     alert('Стой')
// }
// else if (color ==='not working'){
//     alert('Делай  что хочешь!')
// }

// 3
// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
//     Улучшаем предыдущее задание.
//     Если светофор зеленый и машин нет - вывести "иди".
//     Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
//     Если светофор желтый и машин нет - вывести "все рано жди".
//     Если светофор красный и машин нет- вывести "стой все рано".
//     Если светофор красный - и машины есть вывести "стой и жди".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!


// let color=prompt('What color now','green,yellow,red or not working');
// let isRoadClear=confirm('Is road Clear?');
// if (color ==='green'&& isRoadClear===true){
//     alert('Иди');
// }
// if (color ==='green'&& isRoadClear===false){
//     alert('Подожди пока нарушители проедут');
// }
// else if (color ==='yellow'&&isRoadClear===false){
//     alert('Жди')
// }
// else if (color ==='yellow'&&isRoadClear===true){
//     alert('Все равно жди')
// }
// else if (color ==='red'&&isRoadClear===true){
//     alert('Стой все равно')
// }
// else if (color ==='red'&&isRoadClear===false){
//     alert('Стой и жди')
// }
// else if (color ==='not working'){
//     alert('Делай  что хочешь!')
// }