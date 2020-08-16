const toDoForm = document.querySelector(".js-addForm"),
  toDoInput = document.querySelector("input"),
  midToDoList = document.querySelector(".middle-toDOList"),
  latsToDoList = document.querySelector(".last-toDOList");

const PENDING_LS = "PENDING";
const FINISHED_LS = "FINISH";

let pendings = [];
let finishes = [];

function savePending() {
  localStorage.setItem(PENDING_LS, JSON.stringify(pendings));
}

function saveFinished() {
  localStorage.setItem(FINISHED_LS, JSON.stringify(finishes));
}

function delPending(event) {
  const btn = event.target;
  const li = btn.parentNode;
  midToDoList.removeChild(li);
  const cleanPendings = pendings.filter(function (pending) {
    return pending.id !== parseInt(li.id);
  });
  pendings = cleanPendings;
  savePending();
}

function delFinish(event) {
  const btn = event.target;
  const li = btn.parentNode;
  latsToDoList.removeChild(li);
  const cleanFinishes = finishes.filter(function (finish) {
    return finish.id !== parseInt(li.id);
  });
  finishes = cleanFinishes;
  saveFinished();
}

function checkPending(event) {
  const btn = event.target;
  const li = btn.parentNode;
  delPending(event);
  // Pending에 저장 된 글씨 가져오기!!
  const text = li.childNodes[0].innerText;
  finishedToDo(text);
}

function checkFinish(event) {
  const btn = event.target;
  const li = btn.parentNode;
  delFinish(event);
  const text = li.childNodes[0].innerText;
  // console.log(text);
  pendingToDo(text);
}

function pendingToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const checkBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = pendings.length + 1;

  delBtn.innerText = "X";
  delBtn.addEventListener("click", delPending);
  checkBtn.innerText = "√";
  checkBtn.addEventListener("click", checkPending);
  span.innerText = text;

  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(checkBtn);

  li.id = newId;
  midToDoList.appendChild(li);
  const midPendingObj = {
    id: newId,
    text: text,
  };
  pendings.push(midPendingObj);
  savePending();
}

function finishedToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const backBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = finishes.length + 1;

  delBtn.innerText = "X";
  delBtn.addEventListener("click", delFinish);
  backBtn.innerText = "←";
  backBtn.addEventListener("click", checkFinish);
  span.innerText = text;

  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(backBtn);

  li.id = newId;
  latsToDoList.appendChild(li);
  const lastFinishedObj = {
    id: newId,
    text: text,
  };
  finishes.push(lastFinishedObj);
  saveFinished();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  pendingToDo(currentValue);
  toDoInput.value = "";
}

function loadPendings() {
  const loadedPendings = localStorage.getItem(PENDING_LS);
  if (loadedPendings !== null) {
    const parsedPendings = JSON.parse(loadedPendings);
    parsedPendings.forEach(function (pending) {
      pendingToDo(pending.text);
    });
  }
}

function loadFinishes() {
  const loadedFinishes = localStorage.getItem(FINISHED_LS);
  if (loadedFinishes !== null) {
    const parsedFinishes = JSON.parse(loadedFinishes);
    parsedFinishes.forEach(function (finish) {
      finishedToDo(finish.text);
    });
  }
}

function init() {
  loadPendings();
  loadFinishes();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
