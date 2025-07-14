const Api = "https://jsonplaceholder.typicode.com/todos";

const input = document.querySelector(".input");
const tasksection = document.querySelector(".list");
const counter = document.querySelector(".counter");
const add = document.getElementById("addbtn");

const incrementCount = () => {
  counter.textContent = Number(counter.textContent) + 1;
};

const decrementCount = () => {
  counter.textContent = Number(counter.textContent) - 1;
};

const Completestyle = (card, label, isCompleted) => {
  if (isCompleted) {
    card.classList.add("bg-success-subtle");
    label.classList.add("text-decoration-line-through");
  } else {
    card.classList.remove("bg-success-subtle");
    label.classList.remove("text-decoration-line-through");
  }
};

const createTaskItem = ({ id, title, completed }) => {
  const data_added = document.createElement("div");
  data_added.className = "col-11 col-lg-7 mb-2 mx-auto";

  const card = document.createElement("div");
  card.className = "card p-2";

  const taskrow = document.createElement("div");
  taskrow.className =
    "d-flex justify-content-between align-items-center overflow-hidden";

  const label = document.createElement("span");
  label.textContent = title;
  label.style.wordBreak = "break-word";

  Completestyle(card, label, completed);

  const donedeletediv = document.createElement("div");
  donedeletediv.className = "d-flex gap-1";

  const done = document.createElement("button");
  done.className = "btn btn-outline-success";
  done.textContent = completed ? "Undo" : "Done";

  done.onclick = async () => {
    try {
      completed = !completed;
      await fetch(`${Api}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, title, completed }),
      });
      Completestyle(card, label, completed);
      done.textContent = completed ? "Undo" : "Done";
    } catch (err) {
      alert("Error updating status");
    }
  };

  const del = document.createElement("button");
  del.className = "btn btn-outline-danger";
  del.textContent = "Delete";

  del.onclick = async () => {
    try {
      await fetch(`${Api}/${id}`, { method: "DELETE" });
      data_added.remove();
      decrementCount();
    } catch (err) {
      alert("Error deleting task");
    }
  };

  donedeletediv.append(done, del);
  taskrow.append(label, donedeletediv);
  card.appendChild(taskrow);
  data_added.appendChild(card);

  return data_added;
};

const gettasks = async () => {
  try {
    const res = await fetch(`${Api}?_limit=5`);
    const data = await res.json();

    data.map((tasks) => {
      tasksection.appendChild(createTaskItem(tasks));
      incrementCount();
    });
  } catch (err) {
    alert("Error getting tasks");
  }
};

add.onclick = async (e) => {
  e.preventDefault();
  const title = input.value;
  if (title.trim() === "") return;

  try {
    const res = await fetch(Api, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, completed: false }),
    });

    const newTask = await res.json();
    tasksection.appendChild(createTaskItem(newTask));
    input.value = "";
    incrementCount();
  } catch (err) {
    alert("Error posting task");
  }
};

gettasks();
