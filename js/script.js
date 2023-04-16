// step 1 find the element
var addTaskButton = document.getElementById("add-task");
var newTaskInput = document.getElementById("task-input");
var todoListContainer = document.getElementById("todo-list");

var showActiveButton = document.getElementById("show-active")


var templateContainer = document.getElementById("list-item-template");
var template = templateContainer.innerHTML

//step 2 write the behaviour (behaviour)
function onAddTaskClicked(event) {
    var taskName = newTaskInput.value;
    newTaskInput.value = "";
    var taskHTML = template.replace("<!-- Task_Name -->", taskName);
    todoListContainer.insertAdjacentHTML('afterbegin', taskHTML);
}

function showActiveTasks( ) {
    var tasks = document.getElementsByClassName('task')
    for (let i = 0; i < tasks.length; i++){
        if (tasks[i].classList.contains("completed")){

            tasks[i].style.display = "none";
        } else {
            tasks[i].style.display = "block";
        }
    }
}

function onTodoListClicked(event){
    while (!targetElement.classList.contains("task")){
     targetElement = targetElement.parentElement;
    }
    var checkbox = targetElement.querySelector(".checkbox");
    if (checkbox.checked){
        targetElement.classList.add("completed")
    } else{
        targetElement.checkList.remove("completed")
    }
}



//step 3 link to the event handler
addTaskButton.addEventListener('click', onAddTaskClicked);
todoListContainer.addEventListener('click', onTodoListContainerClicked);
showActiveButton.addEventListener('click', showActiveTasks)