let todolist =['hello', 'world'];
displayItem()

function addTodo(){
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
    todolist.push(todoItem);
    inputElement.value = '';
    displayItem();

}
function displayItem(){
let containerElement = document.querySelector('.todo-container');
let newHtml = '';
for(let i = 0; i < todolist.length; i++){
    newHtml += `
    <div>
    <span>${todolist[i]}</span>
    <button onclick="todolist.splice(${i},1);
    displayItem();
    ">Delete</button>
    </div>
    `
}
containerElement.innerHTML = newHtml;
}