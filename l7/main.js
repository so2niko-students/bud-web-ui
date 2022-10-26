//? Типи даних
/**
 *! Примітивні
    - Рядок - String - 'Text example', "Text 2", `Text 3`
    - Число - Number - 123, -14, 34.3, .33, NaN, Infinity, -Infinity
    - Логічний(булевий) - Boolean - true, false
    - null - явне нічого
    - undefined - неочікуване нічого
    - Big Int - дуже велике ціле число - 23n
    - Symbol - унікальний ідентифікатор у пам`яті
 *! Складний
    - Object - об`єкт
*/

const myName = 'Микола';
const greeting = `Привіт, ${ myName }




dsfdsf
sd
f
dsf
ds

fds
f
`;


console.log(greeting);

// var --> let, const
// hoisting - підняття змінних
// block scope - блочна видимість

a = 44;

var a = 3;

// b = 33;

// let b = 3;
// const e = 10;

// b++;
// e++;

if(true){
    let d = 'Bye';
    var c = 'hello';
}

console.log(c);
// console.log(b);

//! Рядки
console.log(myName[-1]);
console.log(myName.slice(0, 3));
console.log(myName.slice(3));//з цьго символа до кінця
console.log(myName.slice(1));
console.log(myName.slice(-2));
console.log(myName.slice(-3));
console.log(myName.slice());

//! toLower + toUpper
const nameLow = 'микола';
const nameUp = nameLow.toUpperCase();
console.log(nameUp);
const comp = 'SoftServe';
const compLow = comp.toLowerCase();
console.log(compLow);

// Методи
console.log('method', 23, 444, 'text 2', 44);
console.error('method', 23, 444, 'text 2', 44);
console.info('method', 23, 444, 'text 2', 44);

// ! alert
// alert('Не красивий текст');

// ! confirm
// const isSure = confirm('Are you sure?');
// console.log('isSure', isSure);

//! prompt
// const userText = prompt('How old are you?', '100');
// console.log('userText', userText);
// console.log(typeof userText);
// console.log(userText + 2);
// console.log(userText * 2);


// Введення даних
const red = prompt('Введіть насиченість червоного кольору [16, 255]', 100);
const green = prompt('Введіть насиченість зеленого кольору [16, 255]', 100);
const blue = prompt('Введіть насиченість синього кольору [16, 255]', 100);

// Операції над даними
const r = Number(red).toString(16);
const g = Number(green).toString(16);
const b = Number(blue).toString(16);

const color = `#${ r }${ g }${ b }`;

// Вивід даних
console.log(color);

document.body.style.backgroundColor = color;