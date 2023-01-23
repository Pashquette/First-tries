'use strict';

// filter

// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemort'];

// const shortNames = names.filter(function(name) {
//     return name.length < 5;
// });

// console.log(shortNames);

// let answers = ['IvAn', 'AnnA', 'Hello'];

// answers = answers.map(item => item.toLowerCase());

// console.log(answers);

// const some = ['4', '5', '543'];

// console.log(some.some(item => typeof(item) === 'number'));

// console.log(some.every(item => typeof(item) === 'string'));

// let result = 0;

// arr.forEach((item) => {
//    result += item;
// });
// console.log(result);

// for (let i = 0; i < arr.length; i++) {
//     result += arr[i];
// }
// console.log(result);

// const arr = ['apple', 'pear', 'plum'];

// const res = arr.reduce((sum, current) => `${sum}, ${current}`);

// console.log(res);

// const obj = {
//     ivan: 'persone',
//     ann: 'persone',
//     dog: 'animal',
//     cat: 'animal'
// };

// const newArr = Object.entries(obj)
// .filter(item => item[1] == 'persone')
// .map(item => item[0]);

// console.log(newArr);


// let data = [5, 10, 'Shopping', 20, 'Homework'];
// let result = [];
// for (let i = 0; i < data.length; i++) {
//     result[i] = data[(data.length - 1) - i];
// }

// console.log(result);


// console.log(data.reverse());


// for (let i = 0; i < data.length; i++) {
//     if (!isNaN(data[i])) {
//         data[i] = data[i] * 2;
        
//      } else if (typeof(data[i]) === 'string') {
//         data[i] = `${data[i]} - done`;
//      }
// }


// ------------------------------

// let newData = [];

// for (let i = 0; i < data.length; i++) {
//     newData[i] = data[i];
// }
 

// console.log(data);
// console.log(newData);

let data = [5, 10, 'Shopping', 20, 'Homework'];

const result = data.map((item) => {
    if (typeof(item) == 'string') {
        return `${item} - done`;
    } else if (typeof (item) == 'number') {
        return item * 2;
    }
});
console.log(data);
console.log(result);