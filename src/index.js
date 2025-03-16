document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const todoList = document.getElementById("tasks");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const inputElement = document.getElementById("new-task-description");
    const todo = inputElement.value;

    // Create task item
    const listTodo = document.createElement("li");
    listTodo.textContent = todo;

    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "x";
    deleteButton.style.marginLeft = "10px";

    deleteButton.addEventListener("click", () => {
      listTodo.remove();
    });

    listTodo.appendChild(deleteButton);
    todoList.appendChild(listTodo);

    inputElement.value = "";
  });
});
