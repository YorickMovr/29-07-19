<<<<<<< HEAD
const TODO_ITEM_TEPLATE = document.getElementById('todoItemTemplate').innerHTML;


const listElement = document.getElementById('list');
const newTodoFormElement = document.getElementById('newTodoForm')
const newTodoFormTitle = document.getElementById('newTodoTitle')
init()

function init(){
    todoList = getTodosList();
    todoList = to

    renderTodosList(data);
}


function getTodosList(){
    return localStorage.getItem('todos')
}

function renderTodosList(data){
    listElement.innerHTML = data.map(todo => {
        return TODO_ITEM_TEPLATE
                        .replace('{{id}}', todo.id)
                        .replace('{{title}}', todo.title)
    });
}

function createTodo(todo){
    todo.id = Date.now();

    todoList.push
=======
const TODO_ITEM_TEPLATE = document.getElementById('todoItemTemplate').innerHTML;


const listElement = document.getElementById('list');
const newTodoFormElement = document.getElementById('newTodoForm')
const newTodoFormTitle = document.getElementById('newTodoTitle')
init()

function init(){
    todoList = getTodosList();
    todoList = to

    renderTodosList(data);
}


function getTodosList(){
    return localStorage.getItem('todos')
}

function renderTodosList(data){
    listElement.innerHTML = data.map(todo => {
        return TODO_ITEM_TEPLATE
                        .replace('{{id}}', todo.id)
                        .replace('{{title}}', todo.title)
    });
}

function createTodo(todo){
    todo.id = Date.now();

    todoList.push
>>>>>>> 95e4ca9c42b18f457266f4eaa9f0e1ec8383d855
}