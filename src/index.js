document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const inputField = document.getElementById("new-task-description");
    const taskTest = inputField.value.trim();

    if (taskTest !== "") {
      const listItem = document.createElement("li");
      listItem.textContent = taskTest;

      taskList.appendChild(listItem);
      inputField.value = "";
    }
  });
});
