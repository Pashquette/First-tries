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