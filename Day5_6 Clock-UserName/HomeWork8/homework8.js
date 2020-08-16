const div = document.querySelector(".top"),
  bar = document.querySelector("#bar"),
  outPut = document.querySelector("output"),
  numInput = document.querySelector(".numInput"),
  btn = document.querySelector("button"),
  last = document.querySelector(".last"),
  h4RanNum = document.querySelector("h4");

function updateNum() {
  bar.addEventListener("input", addNum, false);
}

function addNum() {
  outPut.innerHTML = bar.value;
  result = outPut.innerHTML;
  //   console.log(result);
}

function handleSubmit() {
  const currentValue = numInput.value;
  writeNum(currentValue);
  numInput.value = "";
}

function writeNum() {
  btn.addEventListener("click", clickBtn);
}

function clickBtn() {
  console.log("ㅎㅇ");
  const text = numInput.value;
  console.log(numInput.value);
  lastText(text);
}

function lastText(text) {
  const ran = Math.floor(Math.random() * result);
  if (text > result) {
    const h4 = document.createElement("h4");
    h4.innerText = "숫자 설정 다시하세요!";
    last.appendChild(h4);
  } else {
    const h4 = document.createElement("h4");
    h4.innerText = `You chose: ${text}, the machine chose: ${ran}`;
    last.appendChild(h4);
  }
  end(text, ran);
}

function end(text, ran) {
  console.log(ran);
  if (text < ran) {
    const h4 = document.createElement("h4");
    h4.innerText = "You Lost!";
    last.appendChild(h4);
  } else {
    const h4 = document.createElement("h4");
    h4.innerText = "You Win!";
    last.appendChild(h4);
  }
}

function init() {
  updateNum();
  addNum();
  handleSubmit();
}

init();
