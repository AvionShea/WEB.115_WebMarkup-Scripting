// store all tasks
let tasks = [];
let idCounter = 1;

// runs when the user clicks "Add Task"
function addTask() {

    // get values from the form
    let name = document.getElementById("taskName").value;
    let priority = document.getElementById("taskPriority").value;
    let isImportant = document.getElementById("taskImportant").checked;
    let isCompleted = false;

    // if name is empty, don't add
    if (name === "") {
        alert("Please enter a task name.");
        return;
    }

    // get today's date
    let today = new Date();
    let date = today.toLocaleDateString();

    // create task object
    let newTask = {
        id: idCounter,
        name: name,
        priority: priority,
        isImportant: isImportant,
        isCompleted: isCompleted,
        date: date
    };

    // add the task to the array and add +1 to id counter
    tasks.push(newTask);
    idCounter++;

    // clear form inputs
    document.getElementById("taskName").value = "";
    document.getElementById("taskImportant").checked = false;
    document.getElementById("taskPriority").value = "Medium";

    // re-render the task list and log to console
    renderTasks();
    console.log(JSON.stringify(tasks));

}

// removes a task 
function deleteTask(id) {

    // filters out task
    tasks = tasks.filter(function (task) {
        return task.id !== id;
    });

    renderTasks();
    console.log(JSON.stringify(tasks));

}

// flips the isCompleted value for task
function toggleComplete(id) {

    // loop through tasks and find the one wanted
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            tasks[i].isCompleted = !tasks[i].isCompleted;
        }
    }

    renderTasks();
    console.log(JSON.stringify(tasks));

}

// creates and displays all the task
function renderTasks() {

    let container = document.getElementById("taskmanager");

    // If no tasks, show a message
    if (tasks.length === 0) {
        container.innerHTML = "<p>No tasks yet. Add one above!</p>";
        return;
    }

    // create HTML for each task
    let html = "";

    for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];

        html += `<div class='task-card' id='task-${task.id}'>`;
        html += `<p><strong>${task.name}</strong></p>`;
        html += `<p>Priority: ${task.priority}</p>`;
        html += `<p>Important: ${task.isImportant}</p>`;
        html += `<p>Completed: ${task.isCompleted}</p>`;
        html += `<p>Date Added: ${task.date}</p>`;
        html += "<input type='checkbox' " + (task.isCompleted ? "checked" : "") + " onchange='toggleComplete(" + task.id + ")' /> Mark Complete";
        html += "<br><button onclick='deleteTask(" + task.id + ")'>Delete</button>";
        html += "</div>";

    }

    container.innerHTML = html;

    // apply styles
    for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];
        let card = document.getElementById("task-" + task.id);
        let nameEl = card.querySelector("strong");

        // important tasks get highlighted in red
        if (task.isImportant) {
            nameEl.style.color = "red";
        }

        // completed tasks get a strikethrough
        if (task.isCompleted) {
            nameEl.style.textDecoration = "line-through";
        }

    }

}