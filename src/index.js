document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const task = e.target["new-task-description"].value.trim();

    if(task) {
      createTask(task);
    }
    form.reset();
  })
});

function createTask(todo) {
  let list = document.getElementById("tasks");
  let li = document.createElement("li");
  li.innerText = `${todo} `;
  list.append(li);
  let button = document.createElement("button");
  button.addEventListener("click", deleteButton);
  button.innerText = "[x]";
  li.append(button);
}

function deleteButton(e) {
  e.target.parentNode.remove();
}