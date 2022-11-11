const title = document.getElementById("title");
const description = document.getElementById("description");
const form = document.querySelector("form");
const container = document.querySelector(".container");

const tasks = []

function showAllTasks() {
  tasks.forEach((value, index) => {
    const div = document.createElement("div");
    div.setAttribute("class", "task");

    const innerDiv = document.createElement("div");
    div.append(innerDiv);

    const p = document.createElement("p");
    p.innerText = value.title;
    innerDiv.append(p);

    const span = document.createElement("span");
    span.innerText = value.description;
    innerDiv.append(span);

    const btn = document.createElement("button");
    btn.setAttribute("class", "deleteBtn");

    btn.innerText = "-";

    btn.addEventListener("click", () => {
          removeTasks();
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      showAllTasks();
    });
    
    div.append(btn);
    container.append(div);
});
}
function removeTasks() {
  tasks.forEach(() => {
    const div = document.querySelector(".task");
    console.log(div)   //it will remove the values and will help in making new array
    div.remove();
  });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    removeTasks()
tasks.push({
    title: title.value,
    description: description.value,
});
console.log(tasks);
showAllTasks()
});





// const tasks = localStorage.getItem("tasks")
//   ? JSON.parse(localStorage.getItem("tasks"))
//   : [];

// showAllTasks();

