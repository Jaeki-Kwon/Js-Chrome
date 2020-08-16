const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDOList");

const TODOS_LS = "toDos";

let toDos = [];

function deleteToDo(event) {
  // parentNode : li의 부모 -> console.dir(event.target)으로 찾아!!
  // console.log(event.target.parentNode);
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  /* JSON.stringify() : 자바스크립트는 local storage에 있는 모든 데이터를 
     string으로 저장하려고 함. local storage의 Value 값인 object를 
     string이 되도록 만들기 위하여 사용.
     => 자바스크립트의 object를 string으로 바꿔줌!!!!
  */
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerText = "X";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;
  // li.appendChild : li의 father element안에 뭔가를 넣기 위해 사용!
  li.appendChild(span);
  li.appendChild(delBtn);
  // 자바스크립트에서 html에 있는 li에 id 이름 주기
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId,
  };
  // toDos 라는 list 안에 toDoObj라는 array를 집어 넣음.
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  // event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  /* Write a to do 에서 글을 쓰고 엔터를 누를 때 글씨가 남아있었는데
   그것을 없애줌. */
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    // 자바스크립트의 string을 object로 변환 시키기!!
    const parsedToDos = JSON.parse(loadedToDos);
    /* array의 forEach : forEach는 기본적으로 함수를 실행,
       array에 담겨있는 것들을 각각에 한번씩 함수를 실행
    */
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
