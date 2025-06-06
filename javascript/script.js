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
const modifyButton = document.querySelector("#modifyButton");

addButton.addEventListener("click", () => {
  addDialog.classList.add("visibility");
  overlay.classList.add("overlay");
});

mainContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("removeButton")) {
    e.target.parentElement.parentElement.remove();
  }
});

formAddButton.addEventListener("click", (e) => {
  e.preventDefault();
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
  mainContainer.insertBefore(div, addTask);
  addDialog.classList.remove("visibility");
  overlay.classList.remove("overlay");
  dialogTask.value = "";
  dialogTime.value = "";
});

formRemoveButton.addEventListener("click", (e) => {
  e.preventDefault();
  addDialog.classList.remove("visibility");
  overlay.classList.remove("overlay");
  dialogTask.value = "";
  dialogTime.value = "";
});
