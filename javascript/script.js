const addButton = document.querySelector("#addButton");
const overlay = document.querySelector("#js-overlay");
const addDialog = document.querySelector("#addDialog");
const formRemoveButton = document.querySelector("#formRemoveButton");
const formAddButton = document.querySelector("#formAddButton");
const dialogTask = document.querySelector("#dialogTask");
const dialogTime = document.querySelector("#dialogTime");
const dialogPeriod = document.querySelector("#dialogPeriod");
const mainContainer = document.querySelector("#mainContainer");
const addTask = document.querySelector("#addTask");
const longDate = document.querySelector("#longDate");
const shortDate = document.querySelector("#shortDate");

const now = dayjs();
let currentMode;
let target;

shortDate.textContent = now.format("dddd");
longDate.textContent = now.format("MMMM DD YYYY");

addButton.addEventListener("click", () => {
  addDialog.classList.add("visibility");
  overlay.classList.add("overlay");
  currentMode = "add";
});

mainContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("removeButton")) {
    e.target.parentElement.parentElement.remove();
  }
  if (e.target.classList.contains("modifyButton")) {
    addDialog.classList.add("visibility");
    overlay.classList.add("overlay");
    target = e.target;
    currentMode = "modify";
  }
});

formAddButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    Number.isInteger(Number(dialogTime.value)) &&
    dialogTime.value <= 12 &&
    dialogTime.value >= 1
  ) {
    if (!Number(dialogTask.value) && dialogTask.value.length >= 1) {
      const div = document.createElement("div");
      div.className = "taskContainer";
      div.innerHTML = `
        <div id="task">
          <h3>${dialogTask.value}</h3>
          <p>${dialogTime.value}${dialogPeriod.value}</p>
        </div>
        <div id="buttons">
          <button class="removeButton"type="button">
          Remove</button>
          <button class="modifyButton"type="button">
          Modify</button>
        </div>
  `;
      if (currentMode === "add") {
        mainContainer.insertBefore(div, addTask);
      }
      if (currentMode === "modify") {
        mainContainer.insertBefore(div, target.parentElement.parentElement);
        target.parentElement.parentElement.remove();
      }
      addDialog.classList.remove("visibility");
      overlay.classList.remove("overlay");
      dialogTask.value = "";
      dialogTime.value = "";
    } else {
      const child = addDialog.querySelector("p");
      if (child) {
        child.remove();
      }
      let p = document.createElement("p");
      p.textContent = "The task must include one letter at least";
      addDialog.appendChild(p);
      setTimeout(() => {
        addDialog.removeChild(p);
      }, 3000);
    }
  } else {
    const child = addDialog.querySelector("p");
    if (child) {
      child.remove();
    }
    let p = document.createElement("p");
    p.textContent = "The time must be a number between 1 and 12 (inclusive)";
    addDialog.appendChild(p);
    setTimeout(() => {
      addDialog.removeChild(p);
    }, 3000);
  }
});

formRemoveButton.addEventListener("click", (e) => {
  e.preventDefault();
  addDialog.classList.remove("visibility");
  overlay.classList.remove("overlay");
  dialogTask.value = "";
  dialogTime.value = "";
});
