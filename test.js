const inputValue = document.getElementById("inputValue");
const addToTask = document.getElementById("addToTask");
const toDoList = document.getElementById("toDoList");

addToTask.addEventListener("click", addToTaskList);

function addToTaskList() {
    if (inputValue.value === "") {
        alert("Empty!! Please add a task");
        savData();
    }
    else {
        let li = document.createElement("li");
        li.innerText = inputValue.value;
        toDoList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        savData();

    }
    inputValue.value = "";
}
toDoList.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savData();
    }
});
function savData() {
    localStorage.setItem("data", toDoList.innerHTML);
}
function showTask() {
   toDoList.innerHTML = localStorage.getItem("data")
}
showTask();