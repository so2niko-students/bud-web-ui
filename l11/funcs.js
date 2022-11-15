//Декларативний, функціональний

hello();


function hello(){
    console.log('Hello');
}

//hoisting - всплиття

// bye();

const bye = function(){
    console.log('bye');
}

bye();

//аргументи

function msg(txt, name = ''){
    const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'white', 'black', 'grey'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    console.log(color);
    
    console.log(`%c${ name }: ${ txt }`, `color: ${ color }`);
}

msg('hello 2222', 'Nick');

function sum(){
    let result = 0;
    for(let i = 0; i < arguments.length; i++){
        result += arguments[i];
    }

    return result;
    console.log('do not work');
}

console.log(sum(1,2,3,4,5,6,7,8,9,10));
console.log(sum(1,2,3));
console.log(sum(1,2,38,9,10));

//arrow functions
const multi = (...args) => args.reduce((acc, el) => acc * el, 1);

console.log(multi(1,2,3,4,5,6,7,8,9,10));
console.log(multi(1,2,3));
console.log(multi(1,2,38,9,10));