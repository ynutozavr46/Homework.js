// Task1:(присвоить
// каждому
// из
// следующих
// значений
// свою
// переменную: 'hello', 'owu', 'com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вывести
// каждую
// при
// помощи
// console.log , alert, document.write)

// let message = 'hello';
// let name = 'owu';
// let domen = 'com';
// let country = 'ua';
// let num1 = 1;
// let num2 = 10;
// let num3 = -999;
// let num4 = 123;
// let num5 = 3.14;
// let num6 = 2.7;
// let num7 = 16;
// let agree = true;
// let disagree = false;
// alert(message);
// alert(name);
// alert(domen);
// alert(country);
// document.write(num1);
// document.write(num2);
// document.write(num3);
// document.write(num4);
// document.write(num5);
// document.write(num6);
// document.write(num7);
// console.log(agree);
// console.log(disagree);

// Task2:(переопределить
// каждую
// переменную
// из
// задания
// 1
// дав
// им
// произвольные
// значения.
// Вывести
// каждую
// при
// помощи
// console.log , alert, document.write
//
// let message='Hello';
// alert(message);
// let message2=confirm('...Hello?');
// console.log(true);
// let meeting='Nice to  meet you';
// document.write(meeting);
//
// Task3: Создать 3 числовых и 3 стринговых константы.Вывести каждую при помощи console.log , alert, document.write.

// const name='rostyslav';
// const name1='serkis';
// const name2='oleksandrovich';
// const years=16;
// const years2=32;
// const years3=64;
// alert(name);
// alert(name1);
// alert(name2);
// document.write(years);
// console.log(years2);
// console.log(years3);
//
// Task4:при
// помощи
// 3
// х
// разных
// prompt()
// получить
// 3
// слова
// которые
// являются
// вашими
// ФИО.Для
// фамилии
// имени
// и
// отчества
// создать
// разные
// переменные.Вывести
// каждую
// при
// помощи
// console.log , alert, document.write.

// const name=prompt('What is your name?');
// const name2=prompt('..second name?');
// const name3=prompt(' Who is your Dad?');
// alert(name);
// document.write(name2);
// console.log(name3);
// task4:Взять переменные из задания 4 и сконкатенировать их в одной переменной person.
// const name=prompt('What is your name?');
// const name2=prompt('..second name?');
// const name3=prompt(' Who is your Dad?');
// const person=(name+' '+name2+' '+name3);
// document.write(person);
//
// task5-6:Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи.

// let name=prompt('Mothers Name?');
// let name2=prompt('Mothers Name2?');
// let name3=prompt('Mothers Name3?');
// let person =  {
//     Name:name,
//     Lastname:name2,
//     Surname:name3
// }
//
// let name4=prompt('Fathers Name?');
// let name5=prompt('Fathers Name2?');
// let name6=prompt('Fathers Name3?');
// let person2 =  {
//     Name:name4,
//     Lastname:name5,
//     Surname:name6
// }
//
// let name7=prompt('Your Name?');
// let name8=prompt('Your Name2?');
// let name9=prompt('Your Name3?');
// let person3 =  {
//     Name:name7,
//     Lastname:name8,
//     Surname:name9
// }
// console.log(person);
// console.log(person2);
// console.log(person3);

// task7:при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.

// let age=+prompt('Your Age?');
// console.log(age);
// let age2=+prompt('Your Mother Age?');
// console.log(age2);
// let age3=+prompt('Your Fathers Age?');
// console.log(age3);

// task8: при
// помощи
// prompt()
// получить
// 4
// числа.Привести
// их
// к
// числовому
// типу
// при
// помощи
// parseInt.Сложить
// их
// между
// собой
// записав
// результат
// в
// переменную
// result
// и
// вывести
// в
// консоль
// браузера

// let age=parseInt(prompt('Your Age?'));
// let age2=parseInt(prompt('Your Mother Age?'));
// let age3=parseInt(prompt('Your Fathers Age?'));
// let age4=parseInt(prompt('Your  Brothers  Age?'));
// let result=(age+' '+age2+' '+age3+' '+age4);
// console.log(result);

// task9:при
// помощи
// prompt()
// получить
// 3
// числа
// с
// плавающей
// точекой.при
// помощи
// parseFloat
// привести
// их
// к
// соответсвующему
// типу.Сложить
// их
// между
// собой
// записав
// результат
// в
// переменную
// result
// и
// вывести
// в
// консоль
// браузера

// let num1=parseFloat(prompt('write your num'));
// let num2=parseFloat(prompt('write your num'));
// let num3=parseFloat(prompt('write your num'));
// let result=(num1+' '+num2+' '+num3);
// console.log(result);

// task10:при
// помощи
// prompt()
// получить
// 3
// числа
// с
// плавающей
// точекой.Округлить
// их
// при
// помощи
// Math.round
// Сложить
// их
// между
// собой
// записав
// результат
// в
// переменную
// и
// вывести
// в
// консоль
// браузера

// let num=Math.round(prompt('Write your num'));
// let num2=Math.round(prompt('Write your num'));
// let num3=Math.round(prompt('Write your num'));
// let result=(num+' '+num2+' '+num3);
// console.log(result);

// task11:при
// помощи
// prompt()
// получить
// 2
// целых
// числа.Привести
// их
// к
// целочисленному
// типу.Первое
// число - это
// число
// которое
// будут
// возводить
// в
// степень.Второе
// число - это
// число
// которое
// является
// степенью.При
// помощи
// Math.pow
// возвести
// первое
// число
// в
// степень
// второго
// числа.

// let num=(+prompt('Write your number?'));
// let num2=(+prompt('Write your number?'));
// let  result=(Math.pow(num)+' '+(num2));
// console.log(result);

// task12:При
// помощи
// оператора
// опредеоения
// типа
// typeof определить
// типы
// следующих
// переменных
// и
// вывести
// их
// в
// консоль
// let a = 100;
// let b = '100';
// let c = true;
// let d = undefined;

// let a=100;
// let b='100';
// let c=true;
// let d=undefined;
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);

// task14: Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат.
//     В одинаковых выражениях в задании не использовать два одинаковых оператора.
//     Каждое выражение вложить в свою переменную
// 5 < 6 -> true
// 5 > 6 -> false
// 5 >= 6 -> false
// 5 > 6 -> false
// 10 <= 10 -> true
// 10 === 10 -> true
// 10 != 10 -> false
// 10 !== 10 -> false
// 10 > 10 -> false
// 123 === '123' -> false
// 123 == '123' -> true