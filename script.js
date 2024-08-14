const toDo_input = document.getElementById("toDo_input");
const toDoList = document.getElementById("toDoList");
const addTask = document.getElementById("addTask");

addTask.addEventListener("click", AddToDoList);
function AddToDoList() {
    if (toDo_input.value === "") {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = toDo_input.value;
        toDoList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        toDo_input.value = "";
        saveData();
     
    }
}
toDoList.addEventListener("click", function (e) {
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
    else if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData()
    }
});

function saveData() {
    localStorage.setItem("data", toDoList.innerHTML);
}

function showTask() {
    toDoList.innerHTML = localStorage.getItem("data");
}
showTask();