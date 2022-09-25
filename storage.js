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
