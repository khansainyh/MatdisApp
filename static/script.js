const modal = document.getElementById('taskModal');
const taskForm = document.getElementById('taskForm');
const taskNameInput = document.getElementById('taskNameInput');
const taskTypeInput = document.getElementById('taskTypeInput');

function openEditForm(index, name, type) {
    taskForm.action = `/edit/${index}`;
    taskNameInput.value = name;
    taskTypeInput.value = type;
    modal.classList.remove('hidden');
}

function openAddForm() {
    taskForm.action = '/add';
    taskNameInput.value = ' ';
    taskTypeInput.value = 'normal';
    modal.classList.remove('hidden');
}

function closeModal() {
    modal.classList.add('hidden');
}

document.getElementById('addTaskBtn').onclick = openAddForm;