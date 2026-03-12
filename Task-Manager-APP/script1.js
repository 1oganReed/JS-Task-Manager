// Initialize tasks array 
let tasks = []; // blank array
// declare function addTask()

function addTask(){
    const input = document.getElementById('taskInput');
    const task = input.value.trim();

    if(task !== "") {
        tasks.push(task);
        input.value = "";
        console.log(tasks);
        displayTasks(); // call displayTasks()
    }
}

// display tasks
function displayTasks(){
    const newTask = document.getElementById("taskList");
    // using string literals
    let html = '';
    let index = 0;
     for(let i of tasks) {
     html += `
             <div class = "taskItem">
                 <span class = "task-text">${index + 1}. ${i}</span>
                 <div class = "button-group"> 
                    <button class = "edit-btn" onclick = "editTask(${index})"> Edit </button>
                     <button class = "delete-btn" onclick = "deleteTask(${index})"> Delete </button>
                 </div>
             </div>
             `;
             index++
     }

// rewrote the above loop with for.of

    taskList.innerHTML = html;
    console.log(tasks);
 }

function editTask(index) {
    const newTask = prompt("Edit task: ", tasks[index] );
    if(newTask !== null && newTask.trim() !== '') {
        tasks[index] = newTask;
        displayTasks();
    }
    
    console.log(tasks);
}

// function deleteTask(index)

function deleteTask(index){
    tasks.splice(index, 1);
    console.log(tasks);
    displayTasks();
}