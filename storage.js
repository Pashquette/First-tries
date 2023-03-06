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


// КОНВЕРТЕР ВАЛЮТЫ.

const usdCurr = 60.37;

let amountOfCurrency = prompt("Введите количество валюты:", " ");

function convert(amount, curr)
 {
    if (amount == null || isNaN(amount) || amount == ' ') {
        alert ("ОШИБКА: введите числовое значение!");
        console.log(amount);
        
    }
    else {
        alert("У вас будет: " + amount * curr + " долларов");
        console.log(amount);
    }
   
}

convert(amountOfCurrency, usdCurr);

// 037 Действия с элементами на странице

"use strict";

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

      console.dir(box);

      // box.style.backgroundColor = 'blue';
      // box.style.width = '500px';

      box.style.cssText = `background-color: blue; width: 500px`;

      btns[1].style.borderRadius = '100%';

      circles[0].style.backgroundColor = 'red';

      // for (let i = 0; i < hearts.length; i++) {
      //   hearts[i].style.backgroundColor = 'blue';
      // }

      hearts.forEach(item => {
        item.style.backgroundColor = 'blue';
      });

      const div = document.createElement('div');

      // const text = document.createTextNode('Тут может быть Ваша реклама');

      div.classList.add('black');

      wrapper.append(div);
      // wrapper.appendChild(div);

      // wrapper.prepend(div);

      // hearts[0].before(div);

      // hearts[0].after(div);

      // wrapper.insertBefore(div, hearts[1]);

      // circles[0].remove();

      // hearts[0].replaceWith(circles[0]);

      div.innerHTML = "<h1>Hello World</h1>";

      // div.textContent = 'hello';

      div.insertAdjacentHTML('afterend', "<h2>Hello</h2>");


    //   039 События и их обработчики


      const btns = document.querySelectorAll('button');
      const overlay = document.querySelector('.overlay');
      
      // btn.onclick = function() {
      //     alert('cliiiick');
      // };
      
      // btn.onclick = function() {
      //     alert('cliiiick????');
      // };
      
      // btn.addEventListener('click', () => {
      //     alert('Click');
      // });
      
      
      // btn.addEventListener('click', () => {
      //     alert(' Second Click');
      // });
      // let i = 0;
      const deleteElement = (e) => {
          console.log(e.target);
          console.log(e.type);
          // i++;
          // if (i == 1) {
          //     btn.removeEventListener('click', deleteElement);
          // }
          
      };
      
      // btn.addEventListener('click', deleteElement);
      // overlay.addEventListener('click', deleteElement);
      
      btns.forEach(btn => {
          btn.addEventListener('click', deleteElement, {once: true});
      });
      
      
      const link = document.querySelector('a');
      
      link.addEventListener('click', function(event){
          event.preventDefault();
          console.log(event.target);
      });


      // ------------------------ 41. РЕКУРСИЯ -----------------------------------------------------------------

      // function pow (x, n) {
//     let result = 1;

//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }

//     return result;
// }


// function pow (x, n) {
//     if (n === 1) {
//         return x;
//     } else {
//         return x * pow(x, n - 1); 
//     }
// }

// console.log(pow(2, 4));


let students = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],

    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        }, {
            name: 'Ann',
            progress: 18
        }],
        pro: [{
            name: 'Sam',
            progress: 10
        }],
        
        semi: {
            students: [{
                name: 'test',
                progress: 100
            }]
        }
    }
};

function getTotalProgressByIteration(data) {
    let total = 0;
    let students = 0;

    for (let course of Object.values(data)) {
        if (Array.isArray(course)) {
            students += course.length;

            for (let i = 0; i < course.length; i++) {
                total += course[i].progress;
            }
        } else {
            for (let subCourse of Object.values(course))  {
                students += subCourse.length;
                for (let i = 0; i < subCourse.length; i++) {
                    total += subCourse[i].progress;
                }
            }
        }
    }

    return total / students;
}

// console.log(getTotalProgressByIteration(students));

function getTotalProgressByRecursion(data) {
    if (Array.isArray(data)) {
        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }

        return [total, data.length];
    } else {
        let total = [0, 0];

        for (let subData of Object.values (data)) {
            const subDataArr = getTotalProgressByRecursion(subData);
            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
        }
        return total;
    }
}

const result = getTotalProgressByRecursion(students);

console.log(result[0]/result[1]);


const input = document.getElementById('input');
const blockTime = document.querySelector('.time');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
let interval;


blockTime.innerHTML = 0;
input.value = 0;

function substractTime() {
    if (blockTime.innerHTML > 0) {
        blockTime.innerHTML--;
    }
}

start.addEventListener('click', () => {
    blockTime.innerHTML = input.value;
    input.value = '';
    clearInterval(interval);
    interval = setInterval(substractTime, 1000);
});

stop.addEventListener('click', () =>  {
    clearInterval(interval);
    input.value = blockTime.innerHTML;
});

reset.addEventListener('click', () => {
    blockTime.innerHTML = 0;
    input.value = 0;
});

// ------------------------------------------------------------