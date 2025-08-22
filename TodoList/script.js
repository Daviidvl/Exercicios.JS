
const input = document.getElementById("task-input");
const addBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

addBtn.addEventListener("click", () => {
  const taskText = input.value.trim(); 


  if (taskText === "") {
    alert("Por favor, escreva uma tarefa!");
    return;
  }

 
  const li = document.createElement("li");
  li.textContent = taskText;


  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remover";
  removeBtn.style.marginLeft = "10px";

 
  removeBtn.addEventListener("click", () => {
    taskList.removeChild(li);
  });

  
  li.addEventListener("click", () => {
    li.classList.toggle("done"); 
  });

  
  li.appendChild(removeBtn);

  
  taskList.appendChild(li);

  
  input.value = "";
});
