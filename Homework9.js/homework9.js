//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let arraynum=[3,4,5,6];
// let arraystrings=['Me','I','you','we','they'];
// let arraydiferent=[3,4,'Me','I',true,false];
// console.log(arraynum);
// console.log(arraystrings);
// console.log(arraydiferent);
// let array=[''];
// console.log(array0=['We are venom']);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for(let start=0; start<10;start++){
//     document.write('<div>Im you father Luke!<div>');
// }
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// let num=[5,3,4]
// for(let start=0; start<10;start++){
//     document.write('<div>Im you father Luke!'+num+'<div>');

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let start=0;
// while (start<10){
//     document.write('<h1>Come and get me!</h1>')
//     start++;
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let num=[5,3,4];
// let start=0;
// while (start<3){
//     document.write('<h1>Im you father Luke!'+num+'</h1>');
//     start++;
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let arraynum=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for(let i of arraynum){
//     console.log(i);

// } Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let arraystrings=['me','you','we','they','i','he','she','it','her','his',];
// for(let i of arraystrings){
//     console.log(i);
//     }

// Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі

// let arraystrings=['me',2,'we',3,'i',true,'she',false,'her',4,];
// for(let i of arraystrings){
//     console.log(i);
//     }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let arraystrings=['me',2,'we',3,'i',true,'she',false,'her',4,];
//
// for (start=0;start<arraystrings.length;start++){
// if (typeof arraystrings[start]==='boolean'){
// console.log(start)}
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let arraydif=[1,3,'i','we','they',true,false,4,5,6];
// for (start=0;start<arraydif.length;start++){
//     if (typeof arraydif[start]==='boolean'){
//         console.log(start);
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let array=[2,3,4,'you','we','they',true,false,5,6]
// for (start=0;start<array.length;start++){
//     if (typeof array[start]==='string'){
//         console.log(start);
//     }
// }

// -Створити
// порожній
// масив.Наповнити
// його
// 10
// елементами(різними
// за
// типами
// )
// через
// звернення
// до
// конкретних
// індексів.Вивести
// в
// консоль
// всі
// його
// елементи
// в циклі.

// let array=[ ,'','','', , ,]
// for (start=0;start<10;start++){
//     console.log(array1=['We are Venom'],array0=[2],array3=['Yes you are']);
//
// }
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for ( start=1;start<10;start++){
//         console.log(start);
//         document.write(start);
// }
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (start=1;start<100;start++){
//     console.log(start);
//     document.write(start,'<br> </br>');
// }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (start=2;start<100;start++){
//     console.log(start)
//     document.write(start,'<br> </br>')
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (start=1;start<100;start++){
//     if (start%2===0){
//         console.log(start);
//         document.write(start);
//     }
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (start=3;start<=100;start++){
//     if (start %3===0){
//         console.log(start);
//         document.write(start);
//     }
// }

// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)

// for (m=0;m<=2;m++) {
//     for (s=0;s<60;s++){
//         document.write(m+'minutes'+s+'seconds')
//     }
//         }
// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

// for (h=0;h<=2;h++) {
//     for (m=0;m<20;m++){
//     for (s=0;s<60;s++){
//         document.write(h+'hours'+m+'minutes'+s+'seconds')
//     }
//         }
//         }

// Додатково
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let array=['a','b','c'];
// let strings=[''];
// for (start=0;start<array.length;start++){
//     strings=(strings+array[start])
// }
// document.write(strings)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
//
// let array=[ 'a', 'b', 'c'];
// let strings=[''];
// let start=0;
// while (start<array.length){
//
//     strings=(strings+array[start])
//     start++;
// }
// document.write(strings)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let array=[ 'a', 'b', 'c'];
// let strings='';
// for (let start of array){
//     strings=strings+start;
//
// }
// document.write(strings);

// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
// let array=['a', 'b', 'c']
// let num=[1,2,3]
// for (start=0;start<1;start++){
//     num=array+num;
// }
// document.write(num)
// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// let array=[1, 2, 3];
// let newarray=array.reverse()
// document.write(newarray)

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// let array=[1, 2, 3];
// document.write(array+[,4,5,6]) or
// let array=[1, 2, 3];
// for (start=4;start<7;start++){
//     array.push(start)
// }
// document.write(array)

// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
// let array=[1, 2, 3];
// for (start=0;start<1;start++){
//     array.unshift(4,5,6)
// }
// or
// let array=[1, 2, 3];
// for ( start=6;start>=4;start--){
//     array.unshift(start)
// }
// document.write(array);
// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
// let array=['js', 'css', 'jq'];
// for (start=0;start<1;start++){
//     array=array.shift()
// }
// document.write(array)
// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
// let array=['js', 'css', 'jq'];
// for (start=0;start<1;start++){
//     array=array.pop()
// }
// document.write(array)

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
// let num=[1, 2, 3, 4, 5]
// num=num.slice(3);
// document.write(num);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
// let num=[1, 2, 3, 4, 5]
// num.splice(1,2);
// document.write(num);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// let num = [1, 2, 3, 4, 5]
// num.splice(3,0,'a','b', 'c');
// document.write(num)


// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

// let num = [1, 2, 3, 4, 5]
// num.splice(1,0,'a','b');
// num.splice(6,0,'c');
// num.splice(8,0,'e');
// document.write(num)
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// let num = [1, 2, 3, 4, 5,6,7,8,9,10];
// for (start=0;start<num.length;start++){
//     if (num[start]%2===0){
//         console.log(num[start]);
//         }
//     }
//- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
// let num = [1, 2, 3, 4, 5,6,7,8,9,10];
// let arr=[];
// for (start=0;start<num.length;start++){
//     arr.push(num[start]);
//
// }
// console.log(arr);

// Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// let num = [1, 2, 3, 4, 5,6,7,8,9,10];
// let arr=[];
// for (start=0;start<num.length;start++){
//     arr[start]=(num[start]);
//
// }
// console.log(arr);
// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while

// let mass=[2,17,13,6,22,31,45,66,100,-18];
// let i=1;
// while(i<=1){
//     document.write(mass)
//     i++;
// }


//
// let mass=[2,17,13,6,22,31,45,66,100,-18];
// for(let i=0; i<mass.length; i++){
//     document.write(mass[i]," ");


// let mass=[2,17,13,6,22,31,45,66,100,-18];
// let i=0;
// while(i<=mass.length) {
//     if (i % 2) {
//         document.write(i, "<br>");
//         console.log(i);
//     }
//     i++
// }

// let mass=[2,17,13,6,22,31,45,66,100,-18];
// for(let i=0; i<=mass.length; i++){
//     if(i%2){
//         document.write(i, "<br>");
//     }
// }



// let mass=[2,17,13,6,22,31,45,66,100,-18];
// let i=0;
// while(i<=mass.length){
//     if(i%2===0){
//         document.write(i);
//     }
//     i++;
// }



// let mass=[2,17,13,6,22,31,45,66,100,-18];
// for(let i=0;i<=mass.length; i++){
//     if (i%2===0){
//         document.write(i, "<br>");
//     }
// }



// let mass=[2, 17,13,6,22,31,45,66,100,-18];
// for(let i=0; i<=mass.length; i++){
//     if (mass[i] % 3 === 0){
//         mass[i]='okten';
//         document.write(mass[i], "<br>");
//     }
//     else if(mass[i] % 3 !== 0) {
//         document.write(mass[i], "<br>");
//     }
// }


// let mass=[2,17,13,6,22,31,45,66,100,-18];
// for(let i = mass.length; i>-1; i--){
//     console.log(mass[i]);
// }
//
//
// let mass=[2, 17,13,6,22,31,45,66,100,-18];
//     for(let i=mass.length; i>-1; i--) {
//         if (mass[i] % 3 === 0) {
//             mass[i] = 'okten';
//             document.write(mass[i], "<br>");
//         } else if (mass[i] % 3 !== 0) {
//             document.write(mass[i], "<br>");
//         }
//     }
//
//
// let mass=[2,17,13,6,22,31,45,66,100,-18];
// for(let i=mass.length;i>-1; i--){
//     if (i%2===0){
//         document.write(i, "<br>");
//     }
// }
//
//
// let mass=[2,17,13,6,22,31,45,66,100,-18];
// let i=mass.length;
// while(i>-1){
//     if(i%2===0){
//         document.write(i, "<br>");
//     }
//     i--;
// }
//
//
// let mass=[2,17,13,6,22,31,45,66,100,-18];
// for(let i=mass.length; i>-1; i--){
//     if(i%2){
//         document.write(i, "<br>");
//     }
// }
//
//
// let mass=[2,17,13,6,22,31,45,66,100,-18];
// let i=mass.length;
// while(i>-1) {
//     if (i % 2) {
//         document.write(i, "<br>");
//         console.log(i);
//     }
//     i--
// }
//
//
// let mass=[2,17,13,6,22,31,45,66,100,-18];
// for(let i=mass.length-1; i>-1; i--){
//     document.write(mass[i]," ");
// }
//
//
// let mass=[2,17,13,6,22,31,45,66,100,-18];
// let i=mass.length-1;
// while(i>-1){
//     document.write(mass[i], " ")
//     i--;
// }
//
//
//
// let mass=[];
// for(let i=0; i<=100; i++){
//     mass[i]=[mass.length];
//     if(mass[i]%2===0){
//         document.write(mass[i], " ");
//     }
// }
//
//
// let mass=[];
// for(let i=0; i<=100; i++){
//     mass[i]=[mass.length];
//     if(mass[i]%2!==0){
//         document.write(mass[i], " ");
//     }
// }