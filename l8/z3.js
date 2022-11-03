const textEnter = `Введіть, будь ласка, довжину сторони квадрата у см`;
const figureSidesCount = 4;

const sideLength = +prompt(textEnter); 

const perimeter = sideLength * figureSidesCount;
const textAnswer = `Периметр вашого квадрата — ${ perimeter } см.`;

alert(textAnswer);