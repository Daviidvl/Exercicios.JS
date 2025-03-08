function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText === "") return;
    
    const li = document.createElement("li");
    li.innerHTML = `<span onclick="toggleComplete(this)">${taskText}</span> <button onclick="removeTask(this)">❌</button>`;
    document.getElementById("taskList").appendChild(li);
    
    taskInput.value = "";
}

function toggleComplete(task) {
    task.classList.toggle("completed");
}

function removeTask(button) {
    button.parentElement.remove();
}