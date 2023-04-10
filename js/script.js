// step 1 find the element
var addTaskButton = document.getElementById("add-task");
var newTaskInput = document.getElementById("task-input");
var todoListContainer = document.getElementById("todo-list");
var templateContainer = document.getElementById("list-item-template");
var template = templateContainer.innerHTML

//step 2 write the behaviour
function onAddTaskClicked(event) {
    var taskName = newTaskInput.value;
    newTaskInput.value = "";
    var taskHTML = template.replace("<!-- Task_Name -->", taskName);
    todoListContainer.insertAdjacentHTML('afterbegin', taskHTML);
}


//step 3 link to the event handler
addTaskButton.addEventListener('click', onAddTaskClicked);