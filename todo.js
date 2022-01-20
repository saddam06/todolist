
//****************selectors** */
const todoinput = document.querySelector(".todo-input");
const todobutton = document.querySelector(".todo-button");
const todolist = document.querySelector(".todo-list");

/***********************EVENT 
 * LISTENERS*************************** */

todobutton.addEventListener("click", addTodo);
todolist.addEventListener("click", deletefunction);

/***********FUNCTIONS STARTS HERE ******** */

function addTodo(event) {
  event.preventDefault();

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  const newTodo = document.createElement("li");
  newTodo.innerText = todoinput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  /*************CREATE COMPLETE BUTTON***************/
  const completeButton = document.createElement("button");
  completeButton.innerHTML = "btn";
  completeButton.classList.add("complete-btn");
  todoDiv.appendChild(completeButton);

  /*************CREATE DELETE BUTTON*****************8 */
  const trashButton = document.createElement("button");
  trashButton.innerHTML = "trs";
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  todolist.appendChild(todoDiv);
  todoinput.value = "";
}
/****************DELETE FUNCTION STARTS HERE****************************/
function deletefunction(e) {
  const item = e.target;

  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.remove();
  }

  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement.children[0];
    todo.classList.toggle("completed");
  }
}
