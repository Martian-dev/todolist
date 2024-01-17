const addTaskButton = document.getElementById("addTask");
const newTask = document.getElementById("newTask");
const taskList = document.getElementById("tasks");
const taskDone = document.getElementById("taskDone");

addTaskButton.addEventListener("click", () => {
  taskList.innerHTML += `<li>${newTask.value}</li>`;
  newTask.value = "";
});

if (taskDone.checked == true) {
  taskList.style.display = none;
}