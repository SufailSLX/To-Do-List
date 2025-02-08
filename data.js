// const taskInput = document.getElementById('taskInput');
// const taskList = document.getElementById('taskList');
// const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// function addTask(){
//     const taskText = taskInput.value.trim();
//     if(taskText === "") return

//     const task = {text: taskText}
//     tasks.push(task);

//     localStorage.setItem('tasks', JSON.stringify(tasks));

//     taskInput.value = '';   

//     displayTasks();
// }

// function deleteTask(index){
//     tasks.splice(index, 1);

//     localStorage.setItem('tasks', JSON.stringify(tasks));

//     displayTasks();
// }

// function editTask(index){
//    const newTaskText = prompt('Edit task', tasks[index].text);

//    if(newTaskText !== null || newTaskText === ''){
//     tasks[index].text = newTaskText;

//     localStorage.setItem('tasks', JSON.stringify(tasks));

//     displayTasks();
//    }
// }

// function displayTasks(){
//     taskList.innerHTML = '';

//     tasks.forEach((task, index) => {
//         const li = document.createElement('li');
//         li.innerHTML = `
//             <span>${task.text}</span>
//              <hr>
//             <button class="edit-button" onclick="editTask(${index})">Edit</button>
//             <button class="delete-button" onclick="deleteTask(${index})">Delete</button>
//         `;

//         taskList.appendChild(li);
//     });
// }

// displayTasks();

// -----------------------

// const taskInput = document.getElementById('taskInput');
// const taskList = document.getElementById('taskList');
// const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
// const notification = document.createElement('div');  // Create a div for the notification

// // Add notification styles
// notification.style.position = 'fixed';
// notification.style.top = '10px';
// notification.style.left = '50%';
// notification.style.transform = 'translateX(-50%)';
// notification.style.backgroundColor = '#4CAF50';
// notification.style.color = 'white';
// notification.style.padding = '10px';
// notification.style.borderRadius = '5px';
// notification.style.display = 'none'; // Hide by default
// document.body.appendChild(notification);

// function addTask() {
//     const taskText = taskInput.value.trim();
//     if (taskText === "") {
//         taskInput.placeholder = "Write your task...";  // Show placeholder text
//         return;
//     }

//     const task = { text: taskText };
//     tasks.push(task);
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//     taskInput.value = '';  // Clear input field
//     taskInput.placeholder = "Write your task ...𓂃🖊"; // Reset placeholder
//     displayTasks();

//     // Show Task Added notification
//     showNotification("Task Added");
// }

// function deleteTask(index) {
//     tasks.splice(index, 1);
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//     displayTasks();

//     // Show Task Deleted notification
//     showNotification("Task Deleted");
// }

// function editTask(index) {
//     const newTaskText = prompt('Edit task', tasks[index].text);
//     if (newTaskText !== null && newTaskText !== '') {
//         tasks[index].text = newTaskText;
//         localStorage.setItem('tasks', JSON.stringify(tasks));
//         displayTasks();

//         // Show Updated notification
//         showNotification("Task Updated");
//     }
// }

// function displayTasks() {
//     taskList.innerHTML = '';
//     tasks.forEach((task, index) => {
//         const li = document.createElement('li');
//         li.innerHTML = `
//             <span>${task.text}</span>
//             <hr>
//             <button class="edit-button" onclick="editTask(${index})">Edit</button>
//             <button class="delete-button" onclick="deleteTask(${index})">Delete</button>
//         `;
//         taskList.appendChild(li);
//     });
// }

// // Function to show notifications
// function showNotification(message) {
//     notification.textContent = message;  // Set notification message
//     notification.style.display = 'block'; // Show notification
//     setTimeout(() => {
//         notification.style.display = 'none'; // Hide after 3 seconds
//     }, 3000);
// }

// displayTasks();

const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
const notification = document.createElement('div');  // Create a div for the notification

// Add notification styles by assigning a class
notification.classList.add('notification');
document.body.appendChild(notification);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        taskInput.placeholder = "Write your task...";  // Show placeholder text
        return;
    }

    const task = { text: taskText };
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    taskInput.value = '';  // Clear input field
    taskInput.placeholder = "Write your task ...𓂃🖊"; // Reset placeholder
    displayTasks();

    // Show Task Added notification
    showNotification("Task Added", 'taskAdded');
}

function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();

    // Show Task Deleted notification
    showNotification("Task Deleted", 'taskDeleted');
}

function editTask(index) {
    const newTaskText = prompt('Edit task', tasks[index].text);
    if (newTaskText !== null && newTaskText !== '') {
        tasks[index].text = newTaskText;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        displayTasks();

        // Show Task Updated notification
        showNotification("Task Updated", 'taskUpdated');
    }
}

function displayTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task.text}</span>
            <hr>
            <button class="edit-button" onclick="editTask(${index})">Edit</button>
            <button class="delete-button" onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

// Function to show notifications
function showNotification(message, type) {
    notification.textContent = message;  // Set notification message
    notification.classList.add(type);    // Add specific class for notification type
    notification.style.visibility = 'visible'; // Show notification
    setTimeout(() => {
        notification.style.visibility = 'hidden'; // Hide after 3 seconds
        notification.classList.remove(type);  // Remove the type class after hiding
    }, 3000);
}

displayTasks();
