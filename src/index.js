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

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "x";
      deleteButton.style.marginLeft = "10px";
      deleteButton.style.cursor = "pointer";

      deleteButton.addEventListener("click", () => {
        listItem.remove();
      });

      listItem.appendChild(deleteButton);
      taskList.appendChild(listItem);

      inputField.value = "";
    }
  });
});
