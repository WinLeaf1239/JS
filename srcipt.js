// console.log("Hello World")

// prompt("6767")

// alert("Вы хороший человек")


// let counter = 1;

// а если же тут просто до ++counter или counter++ 2 будет и так и так, т.к лог после

// console.log(counter++) - сначала каунтер- после добавит, т.к в начале идет каунтер 1, а если ++counter, то сначала ++ а после и канутер и будет 2


// let num1 = 1;
// let num2 = 1;

// let num3 = ++num1;
// let num4 = num2++; //-возвращает 1 т.к постфикная

// console.log(num1); //2
// console.log(num2); //2
// console.log(num3); //2
// console.log(num4); //1

// console.log("1" + 1); //11

// console.log("" + 1 + 0);//10 - приходит строка, => 1 становится строкой, и => 1 и 0 складываются в строке и становится 10

// console.log("" - 1 + 0);// только + преобразовывает и оставляет строку, а все остальное становится число, и по итогу "" -1 = -1 как число, и +0 равно -1, а там строка сверху

// console.log(true + false); // 1, т.к true = 1, а false = 0

// console.log(6/ "3"); // все пошло в числа, так же как и в 30 строке
// console.log("6" / "3"); // ВСЕ МАТЕМАТИЧЕСКИЕ ОПЕРАЦИИ КРОМЕ + ПЕРЕВОДЯТ В ЧИСЛОВОЙ ТИП
// console.log("6" / "hi"); //NaN

// console.log("6" * "2") // 12

// console.log(4 + 5 + "px")// 9px - т.к в начале числа

// console.log('ad' + 4 + 5)// ad 45 - т.к первое - строка

// let result = prompt('write your age' , 'age'); // промт вощвращает результат в виде строки, поэтому когда == срабатывает, а === не срабатывает

// == - не строгое равенство, === - строгое равенство.

// и не срабатывает, т.к у нас 1 это число, а нужна строка

// if(Number(result) === 1) {
//     console.log('right')
// } 

// if(result === 1) {
//     console.log('right')
// } else if(result ==1) {
//     console.log('right')
// } else{
//     console.log('wrong')
// }

// if (result <=18 || result > 20) { // && - и, || - или то или то
//     console.log('true')
// }


//<-----------------------------------------------------------------Работка??----------------------------------------------------------------------------------------->>


// console.log("Привет-Медвед Молодежь!");

// let result = prompt();

// if(result < 0) {
//     console.log("Число отрицательное")
// } else {
//     console.log("Число положительное")
// }

// let len = "Хаю Хай";
// console.log(len.length); // 7 - длина

// let newText = len.length

// console.log(newText) - 7

// let text = 'word';

// let newText = text.at(-1); - //начало с нуля, но длина 4 // для последнего элемента -1

// console.log(newText);


// let number = 456;
// let firstDigit = String(number)[0];  //превратили в строку и вывели нулевой
// let lasttDigit = String(number).at(-1);  // вывели ластовый

// console.log(firstDigit);
// console.log(lasttDigit);

// let ssd = Number(firstDigit) + Number(lasttDigit)

// console.log(ssd)

// let result = prompt();

// let result1 = Number(result)

// if ((result1 % 2) == 0) {
//     console.log('Четное')
// } else {
//     console.log('Нечет')
// }

// let fir = "six"

// let sec = "seven"

// if(fir[0] == sec[0]) {
//     console.log("67-Пасхалко")
// } else {
//     console.log("(")
// }

// let fir = prompt('Make a str')
// let lastChar = fir.at(-1)

// if (lastChar == 'ь') {
//     console.log(fir.at(-2))
// } else {
//     console.log(lastChar)
// }

// let str = prompt();

// let lenik = str.length

// if(lenik > 1) {
//     console.log(str.at(-2))
// } else{
//     console.log("6767")
// }

// let res = -1

// res > 0 ? console.log('true isx') : console.log('false.isx'). Спашивает, выполняется ли рес > 0. если true исход, то первое значени, если false исход то второе

// let num = 4;
// switch(num) {
//     case 3:
//         console.log('3')
//         break;
//     case 4:
//         console.log('4')
//         break;
//     case 5:
//         console.log('5')
//         break;
//     default:
//         console.log('No numbers')
// }

//без break будет выполнять все после первого тру, т.е если везде убрать его, будет вывод: 4 5 No numbers



// --------------------------------------ЦИКЛЫ

// let i = 0;
// while (i < 3) {
//     console.log(i)
//     i++;
// }

// for (let j = 0; j < 3; j++) {
//     console.log(j)
// }


// for(let i = 0; i < 100; ++i){

//     if (i%2 == 0){
//         console.log(i)
//     }
// }


// for (let i = 0; i < 100; ++i) {
//     if (i%3 == 0){
//         console.log(i)
//     }
// }

// let summ = 0;
// for(let i = 0; i <100; ++i) {
//     summ += i;
// }

// console.log(summ);

// let abig = 0;
// for(let i = 1; i <= 100; ++i) {
//     if (i%2 != 0) {
//         abig += i
//     }

// console.log(abig)

// let j = 0;

// for( ; j < 3; ){
//     console.log(j)
//     j++
// }

// console.log(j)

// let num1 = 1;
// let num2 = 2;

// function getSum() {
//     let num1 = 5;
//     let num2 = 6;
//     console.log(num1+num2)
// }

// function getMultiply(){
//     let num1 = 3;
//     let num2 = 4;
//     console.log(num1*num2)
// }

// getSum();
// getMultiply();

// let ourstr = prompt('text');

// function getNew() {
//     let first = ourstr.at(0);
//     let sec = ourstr.slice(1); #В слайсе, от какого индекса включая будет далее идти слово, т.е slice(2) - слово без двух первых букв(нулевого и первого)
//     console.log(first.toUpperCase()+sec);
// }

// getNew();

// let date = prompt()

// function getPart() {
//     console.log(Math.trunc(date/3)+1);
// }

// getPart();


// let text = prompt()

// function gewVek(){
//     let norm = Math.trunc(text/100)

//     console.log(norm+1)
// }

// gewVek();


let fruits = ['яблоко', 'клубника', 'яблоко'];

let uniqueFruits = fruits.filter((fruit, index) => {
    return fruits.indexOf(fruit) === index; //проверякм первое вхождение, типо так у яблоко индекс 0, fruits.indexOf(fruit) === index; 0 == 0(true) , далее так же клубника 1 ==1, а после яблоко уже 0 == 2, фалсе, т.к индекс оф смотрит первое включение
});
// Метод fruits.indexOf(fruit) ищет элемент в массиве и возвращает его индекс
console.log(uniqueFruits);


let fruitiki = ['яблоко', 'клубника', 'яблоко'];
let uniki = []; 

for (let i = 0; i < fruitiki.length; i++) {
    if (!uniki.includes(fruitiki[i])) { //Если не включено - включаем//
        uniki.push(fruitiki[i]);
    }
}

console.log(uniqueFruits);



let six = [1,2,3,4,5,6,7,-1,-2]
a = 0
for(let i = 0; i<six.length; i++){
    if (six[i] < 0){
        a +=1
    }
}
if (a > 0){
    console.log('False')
}
else{
    console.log('True')
}


let seven = [1,2,3,4,5,6,7,-1,-2]

let prov = seven.filter(num => num > 0) //if num>0 ретурн

let newgen = prov.length == seven.length;

console.log(newgen)

