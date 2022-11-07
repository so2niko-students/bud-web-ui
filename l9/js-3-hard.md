# ВПРАВИ

Щоб зміцнити знання, отримані в цьому розділі, виконайте ці вправи.

## Секретний вагон

Створіть веб-додаток для визначення купе в плацкартному вагоні за номером квитка. Користувач вводить номер місця, вивести йому номер купе, тип місця - бічне чи ні, верхнє чи нижнє.
**Ускладнення,** *якщо завдання здалося занадто легким:*
Виконайте без оператора множинного вибору і з мінімальною кількістю операторів умови.

## Калькулятор

Написати функцію – калькулятор. Функція приймає рядок з прикладом, визначає, яка дія необхідна виконати (+ - * /), переводить операнди у числа, вирішує приклад та повертає результат.

    calc(12, 4, '+') //16
    calc(1, 4, '-') //-3
    calc(12, 5, '/') //2.4
    calc(1.2, 3, '*') //3.6

## Tic-Tac-Toe Checker

If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

    [[0, 0, 1],
    [0, 1, 2],
    [2, 1, 0]]

We want our function to return:

> -   -1 if the board is not yet finished (there are empty spots and no winners),
> -   1 if "X" won,
> -   2 if "O" won,
> -   0 if it's a cat's game (i.e. a draw, all spots are filled).

You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.