const TODO_ITEM_DONE_CLASS = 'done';
const TODO_ITEM_CLASS = 'todo-list-item';
const DELETE_BUTTON_CLASS = 'delete-button';


const todoListElement = document.getElementById('todoList');
const newTodoListForm = document.getElementById('newTodoListForm');
const newTodoItemTitleInput = document.getElementById('newTodoItemTitleInput');
const todoListItemTemplate = document.getElementById('todoListItemTemplate').innerHTML;

todoListElement.addEventListener('click', onTodoListElementClick)


let  todoListItems =[
    {
        id: 1,
        title: 'Do smth',
        isDone: false
    },
    {
        id: 2,
        title: 'Have some rest',
        isDone: false
    },
    {
        id: 3,
        title: 'sleep',
        isDone: false
    }
];

init();

function onTodoListElementClick(e){
    const element = e.target;
    switch(true){
        case e.target.classList.contains(DELETE_BUTTON_CLASS):
            deleteTodoItem(element.parentElement.dataset.todoId);
            break;
        case element.classList.contains(TODO_ITEM_CLASS):
            toggleTodoItem(element.dataset.todoId)
            break;
    }
}


function init(){
    renderList(todoListItems)
};


function rerender(){
    renderList(todoListItems);
}

function renderList(list){
    const todoItemsHtml = list.map((todo)=> {
        return todoListItemTemplate
                        .replace('{{id}}', todo.id)
                        .replace('{{title}}', todo.title)
                        .replace('{{class}}', todo.isDone ? TODO_ITEM_DONE_CLASS: ' ')
    })

    todoListElement.innerHTML = todoItemsHtml.join('\n');
}

function deleteTodoItem(todoId){
    todoListItems = todoListItems.filter(el => el.id !=todoId);
    deleteTodoItemElement(todoId);
}

function deleteTodoItemElement(id){
    const element = getTodoItemElement(id);

    element && element.remove();
}
function getTodoItemElement(id){
    return todoListElement.querySelector(`[data-todo-id="${id}"]`)
}

function toggleTodoItem(id){
    const todo = todoListItems.find((el)=>el.id == id);

    todo.isDone = !todo.isDone
    rerender()
}

function setTodoElementClass(todo){
    const element = getTodoItemElement(id);

    if(todo.isDone){
        element.classList.add(TODO_ITEM_DONE_CLASS)
    }else{ 
        element.classList.remove(TODO_ITEM_DONE_CLASS)
    }
}

function submitNewItem(){
    createTodoItem(newTodoItemTitleInput.value)

    newTodoListForm.reset();
}

function createTodoItem(title){
    const newTodo={
        title,
        id: Date.now(),
        isDone:false

    }
    addTodoItem(newTodo)
}

function addTodoItem(todo){
    todoListItems.push(todo);
}
