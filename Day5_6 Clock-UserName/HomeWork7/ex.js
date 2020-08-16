const toDoSubmit = document.querySelector(".js-form");
const toDoInput = toDoSubmit.querySelector("input");
const toDoList = document.querySelector(".toDoList");
const doneList = document.querySelector(".doneList");
let toDoL = [];
let toDoneL = [];
const TODOS_LS = "todo";
const TODONE_LS = "doneList";

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDoL));
}
function saveToDone() {
  localStorage.setItem(TODONE_LS, JSON.stringify(toDoneL));
}
function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;

  toDoList.removeChild(li);
  const cleanToDos = toDoL.filter(function (toDo) {
    return toDo.id !== li.id;
  });
  toDoL = cleanToDos;
  saveToDos();
}

function deleteToDone(event) {
  const btn = event.target;
  const li = btn.parentNode;
  doneList.removeChild(li);
  const cleanToDos = toDoneL.filter(function (toDo) {
    return toDo.id !== li.id;
  });
  toDoneL = cleanToDos;
  saveToDone();
}
function checkButtonToDo(event) {
  if (toDoL.length) {
    console.log("bye");
    const btn = event.target;
    const li = btn.parentNode;
    console.log(li);
    const liTemp = li;
    deleteToDo(event);
    liTemp.id = toDoneL.length;
    console.log(liTemp.id);
    const checkBtn = liTemp.querySelectorAll("button")[1];
    console.log(checkBtn);
    checkBtn.innerText = "<<";
    paintToDoneList(liTemp.querySelector("span").innerText);
  }
}
function checkButtonToDone(event) {
  if (toDoneL.length) {
    const btn = event.target;
    const li = btn.parentNode;
    const liTemp = li;
    console.log(li);
    deleteToDone(event);
    liTemp.id = toDoL.length;
    const checkBtn = liTemp.querySelectorAll("button")[1];
    checkBtn.innerText = "V";

    paintToDoList(liTemp.querySelector("span").innerText);
  }
}
function paintToDoList(text) {
  const list = document.createElement("li");
  const delBtn = document.createElement("button");
  const checkBtn = document.createElement("button");
  delBtn.innerText = "X";
  checkBtn.innerText = "V";
  const span = document.createElement("span");
  const newId = toDoL.length;
  span.innerText = text;
  list.appendChild(span);
  list.appendChild(delBtn);
  list.appendChild(checkBtn);
  toDoList.appendChild(list);
  list.id = newId + 1;
  delBtn.addEventListener("click", deleteToDo);

  const toDoObj = {
    text: text,
    id: list.id,
  };
  checkBtn.addEventListener("click", checkButtonToDo);
  toDoL.push(toDoObj);
  saveToDos();
}
function paintToDoneList(text) {
  const list = document.createElement("li");
  const delBtn = document.createElement("button");
  const checkBtn = document.createElement("button");
  delBtn.innerText = "X";
  checkBtn.innerText = "<<";
  const span = document.createElement("span");
  const newId = toDoneL.length + 1;
  span.innerText = text;
  list.appendChild(span);
  list.appendChild(delBtn);
  list.appendChild(checkBtn);
  doneList.appendChild(list);
  list.id = newId + 1;
  delBtn.addEventListener("click", deleteToDone);

  const toDoObj = {
    text: text,
    id: list.id,
  };
  checkBtn.addEventListener("click", checkButtonToDone);
  toDoneL.push(toDoObj);
  saveToDone();
}
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDoList(currentValue);
  toDoInput.value = "";
}
function loadToDoList() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  const loadedToDone = localStorage.getItem(TODONE_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDo) {
      paintToDoList(toDo.text);
    });
  }
  if (loadedToDone !== null) {
    const parsedToDos = JSON.parse(loadedToDone);
    parsedToDos.forEach(function (toDo) {
      paintToDoneList(toDo.text);
    });
  }
}

function init() {
  loadToDoList();
  toDoSubmit.addEventListener("submit", handleSubmit);
}

init();
