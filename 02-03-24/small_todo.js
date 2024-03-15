let button = document.getElementById('add');

let todolist = document.getElementById('todolist');

let input = document.getElementById('input');

todos = [];

button.addEventListener('click',()=>{
    todos.push(input.value);
    display(input.value);
    input.value = ''

})

function display(todo){
    let par = document.createElement('p')
    par.innerText = todo
    todolist.appendChild(par)
    par.addEventListener('click',()=>{
        par.style.textDecoration = 'line-through'
        remove(todo)
    })
    par.addEventListener('dblclick',()=>{
        todolist.removeChild(par)
        remove(todo)
    })
}

function remove(){
    let index = todos.indexof(todo)
    if (index>-1)
        todos.splice(index,1)
}