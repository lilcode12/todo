// step 1 find the element
var addTaskButton = document.getElementById("add-task");
var newTaskInput = document.getElementById("task-input");
var todoListContainer = document.getElementById("todo-list");

var showActiveButton = document.getElementById("show-active")
var showAllButton = document.getElementById("show-all")
var showCompletedButton = document.getElementById("show-completed")

var templateContainer = document.getElementById("list-item-template");
var template = templateContainer.innerHTML

function saveTasks(name, isCompleted){
    localStorage.setItem(name, isCompleted);
}

//step 2 write the behaviour (behaviour)
function onAddTaskClicked(event) {
    var taskName = newTaskInput.value;
    newTaskInput.value = "";
    var taskHTML = template.replace("<!-- Task_Name -->", taskName);
    todoListContainer.insertAdjacentHTML('afterbegin', taskHTML);

    saveTasks(taskName,false)
}

function showAllTasks(){
    var tasks = document.getElementsByClassName('task')
    for (let i = 0; i < tasks.length; i++){
        tasks[i].style.display = "block";
    }
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

function showCompletedTasks( ) {
    var tasks = document.getElementsByClassName('task')
    for (let i = 0; i < tasks.length; i++){
        if (tasks[i].classList.contains("completed")){

            tasks[i].style.display = "block";
        } else {
            tasks[i].style.display = "none";
        }
    }
}

function onTodoListContainerClicked(event){
    while (!targetElement.classList.contains("task")){
     targetElement = targetElement.parentElement;
    }
    var checkbox = targetElement.querySelector(".checkbox");
    if (checkbox.checked){
        targetElement.classList.add("completed")
    } else{
        targetElement.checkList.remove("completed")
    }

    var taskNameElement = targetElement.querySelector(".task-name")
    var taskName = taskNameElement.innterText;

    saveTasks(taskName, checkbox.checked)
}


function renderTasks(){
    for (i = 0; i < localStorage.length; i++){
        var taskName = localStorage.key(i)
        var isCompleted = localStorage.getItem(taskName) == "true";
        var taskHTML = template.replace("<--Task_Name -->", taskName)
        if(!isCompleted){
            todoListContainer.insertAdjacentHTML('afterbegin', taskHTML);
        }
    }
}
//step 3 link to the event handler
addTaskButton.addEventListener('click', onAddTaskClicked);
todoListContainer.addEventListener('click', onTodoListContainerClicked);
showActiveButton.addEventListener('click', showActiveTasks);
showAllButton.addEventListener('click', showAllTasks);
showCompletedButton.addEventListener('click', showCompletedTasks);







renderTasks()