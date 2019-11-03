alert(1212)
$(function(){
    const $todoList = $(`#todolist`);
    const $newTodoForm = $('#newTodoForm');
    const todoItemTemplate = $('#todoItemTemplate').html();


    const todoListItems = [
        {
            title: 'Hello',
            isDone: true
        },
        {
            title: 'Another',
            isDone: true
        },
        {
            title: 'third',
            isDone: true
        },
    ].map((el,index) => {
        el.id = index;
        el.title = 'Title ' + index;

        return el;  
    });


    init();
    function init(){
        renderTodoList();
    }


    function renderTodoList(){
        const todoListItemsHtml = todoListItems.map(el => {
            return getTodoItemsHtml(el);
        })

        $todoList.html(todoListItemsHtml)
    }

    function getTodoItemsHtml({id, title, isDone}){
        return todoItemTemplate
                            .replace('{{id}}',id)
                            .replace('{{title}}', title)
                            .replace('{{isDoneClass}}', isDone ? 'done':'')
    }
});
