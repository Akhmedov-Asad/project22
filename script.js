// let num = prompt();
// if(num < 16 + prompt){
//     console.log("mk oquvchisi");
// }else if(16 < 22 + prompt){
//     console.log("uylanish kere");
// }
// else if(22 < 25 + prompt){
//     console.log("oyla boqish kere");
// }
// else if(25 < 30 + prompt){
//     console.log("bollani ostirish kere");
// }
// else if(30 < 40 + prompt){
//     console.log("pensiyaga 14");
// }
// else if(25 < 30 + prompt){
//     console.log("bollani ostirish kere");
// }


/* let alish = prompt();
if(alish <= 11.000 + prompt){
    console.log("alish soqqa etarli "  + 11000 + "som");
} else {
    console.log("soqqa etmadi alish " + "yana 1 som");
}
 */


// let sign = prompt("What's your profession?");
// if (sign == "student") {
// alert("Wow! I'm a Student too!");
// }
// sign = window.prompt(); 
// sign = prompt(); 
// sign = window.prompt('Are you feeling lucky');
// sign = window.prompt('Are you feeling lucky', 'sure');



// let result;
// result = '3' + 2;
// console.log(result) // "32"
// result = '3' + true;
// console.log(result); // "3true"
// result = '3' + undefined;
// console.log(result); // "3undefined"
// result = '3' + null;
// console.log(result); // "3null"


// let result2;
// result2 = '4' - '2';
// console.log(result2); // 2
// resul2 = '4' - 2;
// console.log(result2); // 2
// result2 = '4' * 2;
// console.log(result2); // 8
// result2 = '4' / 2;
// console.log(result2); // 2



// let result3;
// result3 = 'hello' - 'world';
// console.log(result3); // NaN
// result3 = '4' - 'hello';



// let result4;
// result4 = '4' - true;
// console.log(result4); // 3
// result4 = 4 + true;
// console.log(result4); // 5



// result = 4 + undefined;
// console.log(result); // NaN
// result = 4 - undefined;
// console.log(result); // NaN
// result = true + undefined;
// console.log(result); // NaN
// result = null + undefined;
// console.log(result); // NaN




// let result;
// // string to number
// result = Number('324');
// console.log(result); // 324
// result = Number('324e-1')
// console.log(result); // 32.4



// let result;
// result = Number("444");
// if(false || 0 || -12 || 0  && 0 || true) {
//     console.log("salom");
// }


// let result2;
// result2 = Number("444");
// if(" ") {
//     console.log("salom2");
// }

// for(let i = 1; i < 100; i++){
//      if (i % 10) {
//         continue;
//     }
//     console.log(i);
// }


// let a = 0;

// for (let i = 1; i <= 20; i++) {
//     a += i;
// }
// console.log(a);


// for(i = 0; i < 100; i++){
//     if(i == 50){
//        break
//     }
//     console.log(i);
// }



// let a = 14;
// if(a == 14){
//     console.log("solekum");
// } else{
//     console.log(typeof "volekum");
// }


// let a = 30;

// for(let i = 0; i < 100; i++){
//     a += i;
//     console.log(a);
// }



"0, ‘’, null, undefined, -0, 0n, false, NaN" == " <= false qiymatla"




// for (let i = 0; i <= 10; i++) {
//     console.log('I love JavaScript');
//     }

// let sum = 0;
// const n = 100
// for (let i = 1; i <= n; i++) {
// sum += i;
// }
// console.log('sum:', sum);


// for(let i = 0; i < 100; i++){
//     console.log(i);
// }

// let result = '';
// let i = 0;

// do {
//   i = i + 1;
//   result = result + i;
// } while (i < 5);

// console.log(result);


// let result = "";
// let i = 0;
// do {
//   i += 1;
//   result += `${i} `;
// } while (i > 0 && i < 5)
// console.log(result);




// let isBoss = confirm("Ты здесь главный?");

// alert( isBoss);



// const kvadrat = (son) => {
//     return son * son;
// }
// console.log(kvadrat(10));



// const kvadrat2 = (son) => {
//     return son = son * son
// } 
// console.log(kvadrat2(10));


// function kvadrat3(son) {
//     return son * son
// }


// const volume = (a, b, c) => a * b * c;
// console.log(volume(2, 3, 6));

// function evenbirbalo(number){
//     if (number % 2 === 0){
//         console.log(`${number} son tog'`);
//     } else{
//         console.log(`${number} son tub  `);
//     }
// }


// evenbirbalo(5)



// const evenbirbaloArrow = number => {
//         if (number % 2 === 0){
//         console.log(`${number} son tog'`);
//     } else{
//         console.log(`${number} son tub  `);
//     }
// }
// evenbirbaloArrow(2)



// const getNane = function () {
//     console.log("asad");
// }
// ()



// function f2() {
//     let out = '';
//     for(i = 1; i <= 1000; i++){
//        out += i + " ";
//     }
//     console.log(out);
// }
// f2()


// let arr = ["I", "go", "home"];

// delete arr[1]; // удалить "go"

// alert( arr[1] ); // undefined

// // теперь arr = ["I",  , "home"];
// alert( arr.length ); // 3



// var fruits = ["груши", "бананы", "яблоки"];
// var picked = fruits.pop();
// document.write("Вы сорвали мои " + picked);
// console.log(fruits);




// const fruits = [];
// fruits.push("banana", "apple", "peach");
// console.log(fruits); // 3



// fruits[5] = "mango";
// console.log(fruits[5]); // 'mango'
// console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
// console.log(fruits.length); // 6

// fruits.length = 10;
// console.log(fruits); // ['banana', 'apple', 'peach', empty x 2, 'mango', empty x 4]
// console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
// console.log(fruits.length); // 10
// console.log(fruits[8]); // undefined



// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);

// console.log(array3);



// function greet() {
//     for(i = 0; i < 10; i++){
//         i += 12 % 5;
//         console.log(i);
//     }
//     }
//     greet();

// function greet(name) {
//     console.log("Hello " + name + ":)");
//     }
//     let name = prompt("Enter a name: ");
//     greet(name);



// function greet(name) {
//     console.log("hello " + name + ":)");
// }
// let name = prompt("otihgizni kiriting ")
// greet(name) 



// let x = function (num) { return num * num };
// console.log(x(4));
// let y = x(3);
// console.log(y);




// let a = "hello";
// function greet() {
// a = 3;
// }
// console.log(a);
// greet();
// console.log(a); 



// let a = "hello ";
// function greet() {
// let b = "World"
// console.log(a + b);
// }
// greet();



// function greet() {
//     b = 'hello';
//     console.log(b); // hello
//     var b;
//     }
//     greet(); // hello



// let params = 10;
// function name(params) {
//     if(params = 10){
//         console.log("ilhom");
//     }
// }
// name(params)




// function countDown(number) {
//     console.log(number);
//     const newNumber = number - 1;
//     if (newNumber > 0) {
//         countDown(newNumber);
//     }
// }
// countDown(4);



// function factorial(x) {
//     if (x === 0) {
//     return 1;
// }
// else {
//     return x * factorial(x - 1);
// }
// }



// const student = {
//     firstName: 'ram',
//     class: 10
//     };
// console.log(student);    


// const student = {
//     name: 'John',
//     age: 20,
//     marks: {
//     science: 70,
//     math: 75
//     }
//     }
//     console.log(student.marks); 


// const akhmedov = {
//     name: 'asad',
//     first: 'akhmedov',
//     number: '99 088 60 37',
//     adres: 'meros 40',
//     block: {
//         age: '14',
//         дополнительно: 'A',
//     }
// }
// console.log(akhmedov);


// function f3(){
//     let out = '';
//     for(let i = 1; i <= 1500; i++){
//         out += i + " ";
//     }
//     console.log(out);
// }
// f3();



// let a = "hello ";
// for(let i = 0; i < 10; i++){
//     if(i === 10){
//         a += i + " ";
//     }
//     console.log(a + i);
// }


// function name(a , b) {
//   for(let i = 1; i < 5; i++){
//     if(i == 5){
//        a + b;
//     } else{
//         b - a;
//     }
//   } 
// }
// console.log(10, 20);


/* =========================================================================================================================================== */


/* let, var, const, data type */

// let a;
// a = "N <3";
// console.log(a);



// let bigInt = 19241924124n;
// console.log(bigInt);
// 19241924124n
// console.log(typeof bigInt);



// console.log(null < 0);


// let num = 13;
// const minusEight = x => x - 8;

// num = (num--, num *= 3, num = minusEight(num), num -= 4);
// console.log(num);



// var numbers = [45, 4, 9, 16, 25];
// var over18 = numbers.filter(myFunction);

// function myFunction(value, index, array) {
//     return value > 18;
// }

  

// const info = {
//     [Symbol('a')]: 'b'
// }

// console.log(info);
// console.log(Object.keys(info));




