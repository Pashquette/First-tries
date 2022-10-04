"use strict";

const dom = {
    new: document.getElementById('new'),
    add: document.getElementById('add'),
    tasks: document.getElementById('tasks')
};
const tasks = [];

// Отслеживаем клик по кнопке добавить задачу

dom.add.onclick = () => {
    const newTaskText = dom.new.value;
    if(newTaskText && isNotHaveTask(newTaskText, tasks)) {
        addTask(newTaskText);
        dom.new.value = '';
    }
};

// функция добавления задачи

function addTask(text) {
    const timestamp = Date.now();
    const task = {
        id: timestamp,
        text,
        isComplete: false
    };
    tasks.push(task);
    console.log(tasks);
}

// функция проверки существования задачи в массиве задач

function isNotHaveTask (text, list) {
    let isNotHave = true;


    list.forEach((task) => {
        if(task.text == text) {
            alert("Задача уже существует");
            isNotHave = false;
        }
    });

    return isNotHave;
}