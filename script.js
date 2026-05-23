let count = 0;

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

function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskList = document.getElementById("taskList");

  if (taskInput.value === "") {
    alert("Please type a task first!");
    return;
  }

  let li = document.createElement("li");
  li.innerText = taskInput.value;

  // Create the DONE button ✅
  let doneBtn = document.createElement("button");
  doneBtn.innerText = "✅";
  doneBtn.onclick = function() {
    li.style.textDecoration = "line-through";
  };

  // Create the DELETE button ❌
  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "❌";
  deleteBtn.onclick = function() {
    taskList.removeChild(li);
    count--;
    updateCounter();
  };

  li.appendChild(doneBtn);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);
  taskInput.value = "";

  count++;
  updateCounter();
}