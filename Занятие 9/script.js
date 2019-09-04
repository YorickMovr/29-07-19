document.getElementById('add').onclick = function(){
    let d = document.getElementById('in').value;

    let temp = [];
    temp.toDo = d;
    temp.check = false;
    let i = toDoList.length
    toDoList[i] = temp;
    console.log(toDoList)
}

