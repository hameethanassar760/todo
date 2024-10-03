function addTodo() {
    const input = document.getElementById('todoInput');
    const list = document.getElementById('todoList');

    const li = document.createElement('li');
    li.textContent = input.value;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function () {
        list.removeChild(li);
    };

    li.appendChild(deleteButton);
    list.appendChild(li);
    input.value = '';

}