// const inputBox = document.getElementById("input-box");
// const listContainer = document.getElementById("list-container");

// function addTask() {
//     if(inputBox.value === '')
//     {
//         alert("You must write something");
//     }
//     else{
//         let li = document.createElement("li");
//         li.innerHtml = inputBox.value;
//         listContainer.appendChild(li);
//         let span = document.createElement("span");
//         span.innerHTML = '\u00d7';
//         li.appendChild(span);
//     }
//     inputBox.value = "";
//     saveData();
// }  
// listContainer.addEventListener("click", function(e){
//     if(e.target.tagName === "LI")
//     {
//         e.target.classList.toggle("checked");
//         saveData();
//     } 
//     else if(e.target.tagName === "SPAN"){
//         e.target.parentElement.remove();
//         saveData();
//     }
// },false);

// function saveData()
// {
//     localStorage.setItem("data", listContainer.innerHTML);
// }

// function showTask()
// {
//     listContainer.innerHTML = localStorage.getItem("data");
// }
// showTask();

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if(inputBox.value === '') {
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value; // Corrected typo here
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        li.appendChild(span);
        saveData(); // Save data after adding the task
    }
    inputBox.value = "";
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    const tasks = [];
    listContainer.querySelectorAll("li").forEach(function(task) {
        tasks.push(task.textContent.trim());
    });
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Save only task text content
}

function showTasks() {
    const savedTasks = localStorage.getItem("tasks");
    if(savedTasks) {
        const tasks = JSON.parse(savedTasks);
        tasks.forEach(function(taskText) {
            let li = document.createElement("li");
            li.textContent = taskText;
            let span = document.createElement("span");
            span.innerHTML = '\u00d7';
            li.appendChild(span);
            listContainer.appendChild(li);
        });
    }
}
showTasks();
