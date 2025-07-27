let todoArr =[];

function addTodo(){
    let inputElement = document.querySelector('#todo-input')
    let todoItem = inputElement.value;
    todoArr.push(todoItem);
    inputElement.value = '';

}