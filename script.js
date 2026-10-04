// ==============================
// GET HTML ELEMENTS
// ==============================

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");


// ==============================
// ADD TASK
// ==============================

addTaskBtn.addEventListener("click", function () {

    const taskText = taskInput.value.trim();

    // Don't add an empty task
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create a new list item
    const taskItem = document.createElement("li");

    taskItem.classList.add("task-item");

    // Create task text
    const taskTextElement = document.createElement("span");

    taskTextElement.classList.add("task-text");

    taskTextElement.textContent = taskText;


    // ==============================
    // COMPLETE TASK
    // ==============================

    taskTextElement.addEventListener("click", function () {

        taskItem.classList.toggle("completed");

        updateTaskCount();

    });


    // ==============================
    // DELETE BUTTON
    // ==============================

    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";

    deleteButton.classList.add("delete-btn");


    deleteButton.addEventListener("click", function () {

        taskItem.remove();

        updateTaskCount();

    });


    // Add elements to task item
    taskItem.appendChild(taskTextElement);

    taskItem.appendChild(deleteButton);


    // Add task to list
    taskList.appendChild(taskItem);


    // Clear input
    taskInput.value = "";

    // Update task count
    updateTaskCount();

    // Put cursor back in input
    taskInput.focus();

});


// ==============================
// UPDATE TASK COUNT
// ==============================

function updateTaskCount() {

    const allTasks = document.querySelectorAll(".task-item");

    const completed = document.querySelectorAll(
        ".task-item.completed"
    );

    totalTasks.textContent = allTasks.length;

    completedTasks.textContent = completed.length;

    showEmptyMessage();
}
function showEmptyMessage() {

    if (taskList.children.length === 0) {

        const emptyMessage = document.createElement("li");

        emptyMessage.classList.add("empty-message");

        emptyMessage.textContent =
            "No tasks yet. Add a task above to get started.";

        taskList.appendChild(emptyMessage);

    }
}