let count = 0;
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function greetMe() {
  document.getElementById("message").innerText = "You've got this Baby girl!";
}

function changeColor() {
  document.body.style.backgroundColor = "#502c3e";
  document.body.style.color = "#f5f5f5";
}

function resetColor() {
  document.body.style.backgroundColor = "#f5f5f5";
  document.body.style.color = "#333333";
}

function updateCounter() {
  document.getElementById("counter").innerText = count;
}

function addTaskToPage(taskText) {
  let taskList = document.getElementById("taskList");

  let li = document.createElement("li");
  li.innerText = taskText;

  let doneBtn = document.createElement("button");
  doneBtn.innerText = "✅";
  doneBtn.onclick = function() {
    li.style.textDecoration = "line-through";
  };

  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "❌";
  deleteBtn.onclick = function() {
    taskList.removeChild(li);
    tasks = tasks.filter(t => t !== taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    count--;
    document.getElementById("counter").innerText = count;
  };

  li.appendChild(doneBtn);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}

function addTask() {
  let taskInput = document.getElementById("taskInput");

  if (taskInput.value === "") {
    alert("Please type a task first!");
    return;
  }

  tasks.push(taskInput.value);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  addTaskToPage(taskInput.value);
  count++;
  document.getElementById("counter").innerText = count;
  taskInput.value = "";
}

function loadTasks() {
  tasks.forEach(function(taskText) {
    addTaskToPage(taskText);
  });
  document.getElementById("counter").innerText = tasks.length;
  count = tasks.length;
}

loadTasks();

 function showHobbies() {
  let hobbies = ["Coding", "Traveling", "Cooking", "Reading"];
  let list = document.getElementById("hobbyList");
  list.innerHTML = "";

  hobbies.forEach(function(hobby) {
    let li = document.createElement("li");
    li.innerText = hobby;
    list.appendChild(li);
  });
}