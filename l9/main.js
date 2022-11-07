//while, do_while, for
//Цикл з передумовою
// Цикл з післяумовою
// Цикл з лічильником

for(let i = 0; i < 10; i++){
    console.log('for', i);
}

let j = 0;

while(j < 10){
    console.log('while', j);
    j++;
}

let k = 10;
for(;k--;) console.log('for(;;)', k);

/*
forEach
map
filter
reduce
find
every
some
*/
let tt = 10;
if(tt > 0){

}

if(tt < 0){

}

if(tt == 0){

}


if (tt > 0) {
    //  block of code to be executed if condition1 is true
} else {
    if (tt < 19) {
        //  block of code to be executed if the condition1 is false and condition2 is true
    } else {
        //  block of code to be executed if the condition1 is false and condition2 is false
    }
} 

//switch

switch(tt){
    case 1 : {
        //
        break;
    }
    case 2 : {
        //
        break;
    }
    case 1000 : {
        //
        break;
    }
    default:{
        //
        console.log('Unknown user!')
    }
}

const userTypes = {
    1 : 'user',
    2 : 'admin',
    1000 : 'superhero'
}

const user = userTypes[tt] ?? 'Unknown';