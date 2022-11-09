const userTicket = "123006";

const ticketNumber = userTicket.split(``);

let firstPart = 0;
let secondPart = 0;

for (let i = 0, j = 3; i < 3; i++, j++) {
  firstPart += Number(ticketNumber[i]);
  secondPart += +ticketNumber[j];
}

console.log(firstPart, secondPart);

if (firstPart === secondPart) {
  console.log(`Вітаємо! Ваш квиток щасливий :)`);
} else {
  console.log(`Упс... Ваш квиток нещасливий :( Купіть інший квиток!`);
}

// console.log('America'.length < 'USA'.length);
// const stringArray = "bitcoin take over the world maybe who knows perhaps".split(' ');
const stringArray =
  "turns out random test cases are easier than writing out basic ones".split(
    " "
  );
let lettersNumber = stringArray[0].length;
const shortestWords = [stringArray[0]];

for (i = 1; i < stringArray.length; i++) {
  const curLen = stringArray[i].length;

  if (curLen <= lettersNumber) {
    if (curLen < lettersNumber) shortestWords.length = 0;
    lettersNumber = curLen;
    if (!shortestWords.includes(stringArray[i])) {
      shortestWords.push(stringArray[i]);
    }
  }
}
console.log(`Кількість літер у найкоротшому слові: ${lettersNumber}.`);
console.log(shortestWords);

const userDna = "TATAGGCACAeeee";

let result = ``;

// for (let i = 0; i < userDna.length; i++) {
//     if (userDna[i] === 'A') {
//         result = result + 'T';
//     }
//     if (userDna[i] === 'T') {
//         result = result + 'A';
//     }
//     if (userDna[i] === 'C') {
//         result = result + 'G';
//     }
//     if (userDna[i] === 'G') {
//         result = result + 'C';
//     }
// }
// for (let i = 0; i < userDna.length; i++) {
//     switch(userDna[i]){
//         case 'a':
//         case 'A':{
//             result = result + 'T';
//             break;
//         }
//         case 't':
//         case 'T':{
//             result = result + 'A';
//             break;
//         }
//         case 'c':
//         case 'C':{
//             result = result + 'G';
//             break;
//         }
//         case 'g':
//         case 'G':{
//             result = result + 'C';
//             break;
//         }
//     }
// }
const dict = {
  A: "T",
  T: "A",
  C: "G",
  G: "C",
};
for (let i = 0; i < userDna.length; i++) {
  result += dict[userDna[i]] ?? "";
}

console.log(`Пара до вашої ДНК: ${result}.`);

const yourPlace = +prompt(`Введіть номер свого місця (від 1 до 54).`);
let compartmentNumber = Math.floor((yourPlace - 1) / 4 + 1);
let upDown = "верхнє";
let sideUnside = "не бокове";

if (yourPlace % 2) {
  upDown = "нижнє";
}

if (yourPlace > 36) {
  compartmentNumber = Math.floor((54 - yourPlace) / 2 + 1);
  sideUnside = "бокове";
}

const answer = `У вас ${upDown} ${sideUnside} місце у купе №${compartmentNumber}.`;

// if (yourPlace % 2 && yourPlace <= 36) {
//     compartmentNumber = Math.floor((yourPlace - 1) / 4 + 1);
//     document.querySelector("#yourPlace").innerHTML = `У вас нижнє не бокове місце у купе №${compartmentNumber}.`
// } else if (yourPlace % 2 && yourPlace > 36) {
//     compartmentNumber = Math.floor((54 - yourPlace) / 2 + 1);
//     document.querySelector("#yourPlace").innerHTML = `У вас нижнє бокове місце у купе №${compartmentNumber}.`
// } else if (yourPlace % 2 === 0 && yourPlace <= 36) {
//     compartmentNumber = Math.floor((yourPlace - 1) / 4 + 1);
//     document.querySelector("#yourPlace").innerHTML = `У вас верхнє не бокове місце у купе №${compartmentNumber}.`
// } else {
//     compartmentNumber = Math.floor((54 - yourPlace) / 2 + 1);
//     document.querySelector("#yourPlace").innerHTML = `У вас верхнє бокове місце у купе №${compartmentNumber}.`
// }

function sumSymbols(str) {
  return str.split("").reduce((sum, i) => sum + parseInt(i), 0);
}

const number = prompt("enter number");

const sum1 = sumSymbols(number.slice(0, 3));
const sum2 = sumSymbols(number.slice(3));

const luckyOrNot = sum1 === sum2 ? "you are lucky" : "try again";

alert(luckyOrNot);

const shortestLen = str1
  .split(" ")
  .sort((a, b) => a.length - b.length)[0].length;
console.log(shortestLen);


function isLucky(ticket) {
  let result = ticket.toString().split("").map(Number); //спочатку строка, потім розділ ", потім масив
  console.log(result);

  const halfLen = result.length / 2;
  let arr1 = result.slice(0, halfLen);
  console.log(arr1);

  let arr2 = result.slice(halfLen);
  console.log(arr2);

  let sum1 = arr1.reduce(function (sum, current) {
    return sum + current;
  }, 0);
  console.log(sum1);

  let sum2 = arr2.reduce(function (sum, current) {
    return sum + current;
  }, 0);
  console.log(sum2);

  if (sum1 === sum2) {
    return `Your ticket has a lucky number`;
  } else {
    return `We will wait you next time and maybe your next ticket will have a lucky number`;
  }
}
// isLucky(111111);
// //isLucky(234567);


function findShorter(string){

    let str = string.split(' ');
    let shrt = str[0]; //Array
    let result = str[i].length;

    for (let i = 1; i < str.length; ++i){
        shrt = str[i];//String
        if ( shrt.length < result){
            result = shrt.length;
        }  
    }
  return result;
}
findShorter("bitcoin take over the world maybe who knows perhaps")

function findDNA(dna){
  let objectDNA = {
    "A": "T",
    "T": "A",
    "G": "C",
    "C": "G"
  }
  return dna.replace(/[ATGC]/gi, mtch => objectDNA[mtch]);
};
// findDNA ("ATTGC")