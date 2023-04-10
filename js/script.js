// step 1 find the element
var addTaskButton = document.getElementById("add-task");
var newTaskInput = document.getElementById("task-input");
var todoListContainer = document.getElementById("todo-list");

//step 2 write the behaviour
function onAddTaskClicked(event) {
    var taskNamne = newTaskInput.value;
    newTaskInput.value = "";
    todoListContainer.insertAdjacentHTML('afterbegin', taskNamne);
}


//step 3 link to the event handler
addTaskButton.addEventListener('click', onAddTaskClicked);