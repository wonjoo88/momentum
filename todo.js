const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("#todo-form input")
const todoList = document.getElementById("todo-list");

const paintTodo = (newTodo) =>{
    console.log("i will paint", newTodo);
    const li = document.createElement("li");
    const span = document.createElement("span")
    li.appendChild(span);
    span.innerText=newTodo;
    console.log(li);
    todoList.appendChild(li)
}

const handleTodoSubmit = (e) =>{
    e.preventDefault();
    const newTodo = todoInput.value
    todoInput.value = ''
    paintTodo(newTodo);
}

todoForm.addEventListener("submit", handleTodoSubmit)