const answers = [];
answers[0] = prompt("Как ваше имя?", "");
answers[1] = prompt("Как ваша фамилия?", "");
answers[2] = prompt("Сколько вам лет?", "");
document.write(answers);


// ИНТЕРПОЛЯЦИЯ


const category = "toys";
console.log(`https://someurl.com/${category}/5`);

const user = "alex";
alert(`Привет, ${user}`);



//---------------------------------------------------------


const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Один из последних просмотренных фильмов?", "");
const b = prompt("На сколько оцените его?", "");
const c = prompt("Один из последних просмотренных фильмов?", "");
const d = prompt("На сколько оцените его?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);



// КОНСТРУКЦИЯ SWITCH

switch (num) {
    case 49: 
        console.log("Неверно");
        break;
    case 100: 
        console.log("Неверно");
        break;
    case 50: 
        console.log("В точку!");
        break;
    default:
        console.log("Не в этот раз!");
}

//-----------------------------------------------------------------


const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
    console.log("Все довольны!");
} else {
    console.log("Мы уходим!");
}
console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);


// ЦИКЛЫ


let num = 50;

while (num <= 55) {
    console.log(num);
    num++;
};


do {
    console.log(num);
    num++;
}
while (num < 55);



for (let i = 1; i < 10; i++) {
    if (i === 6) {
        continue;
    }
    console.log(i);
}

// ЦИКЛ В ЦИКЛЕ


for (let i = 0; i < 3; i++) {
    console.log(i);
    for (let i = 0; i < 3; i++) {
        console.log(i); 
    } 
}


first: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`); 
        for (let k = 0; k < 3; k++) {
            if (k === 2) continue first;
            console.log(`Third level: ${k}`); 
            
        } 
    } 
}

// ЦИКЛ В ЦИКЛЕ: ПИРАМИДА.

let result = "";
const length = 7;

for (let i = 1; i < length; i++) {
    for (let j = 0; j < i; j++) {
        result += "*";
    }

    result += "\n";
}

console.log(result);

"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let i = 0;
do {
    const a = prompt("Один из последних просмотренных фильмов?", "");
    const b = prompt("На сколько оцените его?", "");
    i++;
    
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("done!");
    } else {
        console.log("Error!");
        i--;
    }
} while (i < 2);

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман!");
} else {
    console.log("Произошла ошибка!");
}

console.log(personalMovieDB);


// ФУНКЦИИ

let num = 20;
function showFirstMessage(text) {
    console.log(text);
    num = 10;
}

showFirstMessage("Hello world!");
console.log(num);

// ---------------------------------------------------

function calc (a, b) {
    return (a + b);
}


// ------------------------------------------------------------

const usdCurr = 57.54;
const euroCurr = 55.48;
let amountOfCurrency = +prompt("Введите количество валюты:", "");


function convert(amount, curr) {
    alert ("У вас будет: " + curr * amount + " евро");
}

convert(amountOfCurrency, euroCurr);


// О ВОЗВРАТЕ ФУНКЦИЕЙ UNDEFINED

function doNothing () {
    
}
console.log(doNothing() === undefined);

// ----------------------------------------------------------------------

const usdCurr = 28;
const discount = 0.9;

function convert(amount, curr) {
    return curr * amount;
}

function promotion (result) {
    console.log(result * discount);
}

const res = convert(500, usdCurr);
promotion (res);


// CALLBACK ФУНКЦИИ, ПОМЕЩЕНИЕ ФУНКЦИИ, КАК АРГУМЕНТ.

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
    }
    
    function done() {
        console.log("Я прошел этот урок!");
    }
    
    learnJS("JavaScript", done);
    
    // ПРИМЕР ДВА:
    
    function learnJS(lang, callback) {
        console.log(`Я учу: ${lang}`);
        callback();
        }
    
    learnJS("JavaScript", function() {
        console.log("Я прошел этот урок!")
    });

    // -----------------------------------------------------


    const options = {
        name: "test",
        width: 1024,
        height: 1024,
        colors: {
            border: "black",
            bg: "Red",
    
        },
        makeTest: function() {
            console.log("test");
        }
    };
    options.makeTest();
    
    const {border, bg} = options.colors;
    console.log(border);
    
    console.log(Object.keys(options).length);
    
    console.log(options["colors"]["border"]);
    let counter = 0;
    for (let key in options) {
        if (typeof(options[key]) === 'object') {
            for (let i in options[key]) {
                console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            }
        } else {
            console.log(`Свойство ${key} имеет значение ${options[key]}`);
            counter++;
        }
        
    }
    
    console.log(counter);

    // ------------------------ VIDEO 27 ------------------------------------------

    const arr = [2, 13, 26, 8, 10];
arr.sort(compareNum); // Сортировка по порядку с помощью типовой функции
console.log(arr);

function compareNum(a, b) {
    return a - b;
}
arr[99] = 0;
console.log(arr.length);
console.log(arr);

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`); // Метод перебора внутри массива
});

arr.pop();
arr.push(10);

console.log(arr);

for (let i = 0; i < arr.length; i++) {
console.log(arr[i]);
}

for (let value of arr) {
    console.log(value);
}

const str = prompt("", "");
const products = str.split(", ");
products.sort();
console.log(products.join("; "));

// 029 Передача по ссылке или по значению, Spread оператор (ES6-ES9)


const obj = {
    a: 5,
    b: 1,
};

const copy = obj; // Ссылка

copy.a = 10;

console.log(copy);
console.log(obj);

function copy(mainObj) {
    let objCopy = {};

    let key;
    for(key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4

    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;
console.log(newNumbers);
console.log(numbers);

const add = {
    d: 17,
    e: 20,
};

const clone = Object.assign({}, add);

clone.d = 20;

console.log(add);
console.log(clone);

const oldArray = ["a", "b", "c"];
const newArray = oldArray.slice();

newArray[1] = "safasf";
console.log(oldArray);
console.log(newArray);

const video = ["youtube", "vimeo", "rutube"];
const blogs = ["wordpress", "livejournal", "blogger"];
const internet = [...video, ...blogs, "vk", "facebook"];

console.log(internet);

function log (a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);

}

const num = [2, 5, 7];

log(...num);

const array = ["a", "b"];

const newAarray = [...array];

const q = {
    one: 1,
    two: 2,
};

const newObj = {...q};

console.log(newObj);


// 030 Основы ООП, прототипно-ориентированное наследование

let str = "some";
let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1, 2, 3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("hello!");
    }
};

// const john = {
//     health: 100
// };
const john = Object.create(soldier) // ПРОТОТИПНОЕ НАСЛЕДОВАНИЕ ОТ ОБЪЕКТА soldier

// john.__proto__ = soldier;

// Object.setPrototypeOf(john, soldier);

john.sayHello();


// 036 Получение элементов со страницы


const box = document.getElementById('box');

console.log(box);

const btns = document.getElementsByTagName('button'); // -------- Запись массива с кнопками

console.log(btns[1]); // ----- Обращение к конкретному элементу массива

const circles = document.getElementsByClassName('circle');

console.log(circles);

const hearts = document.querySelectorAll('.heart');

console.log(hearts);

hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('.heart');

console.log(oneHeart);


//


