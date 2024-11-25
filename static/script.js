// const modal = document.getElementById('taskModal');
// const taskForm = document.getElementById('taskForm');
// const taskNameInput = document.getElementById('taskNameInput');
// const taskTypeInput = document.getElementById('taskTypeInput');

// function openEditForm(index, name, type) {
//     taskForm.action = `/edit/${index}`;
//     taskNameInput.value = name;
//     taskTypeInput.value = type;
//     modal.classList.remove('hidden');
// }

// function openAddForm() {
//     taskForm.action = '/add';
//     taskNameInput.value = ' ';
//     taskTypeInput.value = 'normal';
//     modal.classList.remove('hidden');
// }

// function closeModal() {
//     modal.classList.add('hidden');
// }

// document.getElementById('addTaskBtn').onclick = openAddForm;

// script.js
document.addEventListener("DOMContentLoaded", () => {
    const todaysTaskBtn = document.getElementById("todays-task-btn");
    const scheduledTaskBtn = document.getElementById("scheduled-task-btn");

    const todaysTask = document.getElementById("todays-task");
    const scheduledTask = document.getElementById("scheduled-task");

    // Event listeners for buttons
    todaysTaskBtn.addEventListener("click", () => {
        toggleActive(todaysTaskBtn, scheduledTaskBtn, todaysTask, scheduledTask);
    });

    scheduledTaskBtn.addEventListener("click", () => {
        toggleActive(scheduledTaskBtn, todaysTaskBtn, scheduledTask, todaysTask);
    });

    function toggleActive(activeBtn, inactiveBtn, activeSection, inactiveSection) {
        // Update button styles
        activeBtn.classList.add("bg-secondary", "text-white");
        activeBtn.classList.remove("bg-tertiary");
        inactiveBtn.classList.remove("bg-secondary", "text-white");
        inactiveBtn.classList.add("bg-tertiary");

        // Update content visibility
        activeSection.classList.remove("hidden");
        inactiveSection.classList.add("hidden");
    }
});