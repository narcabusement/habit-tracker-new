const habitInput = document.getElementById("habitInput");
const addBtn = document.getElementById("addBtn");
const habitList = document.getElementById("habitList");

let habits = JSON.parse(localStorage.getItem("habits")) || [];

function saveHabits() {
  localStorage.setItem("habits", JSON.stringify(habits));
}

function renderHabits() {
  habitList.innerHTML = "";

  habits.forEach((habit, index) => {
    const li = document.createElement("li");

    const name = document.createElement("span");
    name.textContent = habit.name;
    if (habit.done) name.classList.add("done");

    const doneBtn = document.createElement("button");
    doneBtn.textContent = habit.done ? "Undo" : "Done";
    doneBtn.className = "small-btn";
    doneBtn.onclick = () => {
      habits[index].done = !habits[index].done;
      saveHabits();
      renderHabits();
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "small-btn";
    deleteBtn.onclick = () => {
      habits.splice(index, 1);
      saveHabits();
      renderHabits();
    };

    const actions = document.createElement("div");
    actions.style.display = "flex";
    actions.style.gap = "8px";
    actions.appendChild(doneBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(name);
    li.appendChild(actions);
    habitList.appendChild(li);
  });
}

addBtn.onclick = () => {
  const text = habitInput.value.trim();
  if (!text) return;

  habits.push({ name: text, done: false });
  habitInput.value = "";
  saveHabits();
  renderHabits();
};

habitInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addBtn.click();
});

renderHabits();
