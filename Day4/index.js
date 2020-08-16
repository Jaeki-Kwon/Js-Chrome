// if, else, and, or
// if 조건은 항상 참이어야 함
/*
if(10 === "10"){
  console.log("hi")
} else {
  console.log("ho")
} */

/*
if(10 === "10"){
  console.log("hi");
} else if("10" === "9"){
  console.log("lalalala");
} else {
  console.log("ho");
}

// if절에 and 사용하기
if(20 > 5 && "jaeki" === "jaeki"){
  console.log("yes");
} else {
  console.log("no")
};

// if절에 or 사용하기
if(20 > 5 || "jaeki" === "jaeki"){
  console.log("yes");
} else {
  console.log("no")
};
*/

/* and, or 정리
true && true = true;
false && true = false;
true && false = false;
false && false = false;

true || true = true;
false || true = true;
true || false = true;
false || false = false;
*/

// prompt 구려서 이젠 안씀
/*
const age = prompt("How old are you");

if(age >= 18 && age <= 21){
  console.log("you can drink but you should not");
} else if(age > 21){
  console.log("go ahed")
} else {
  console.log("too young")
}
*/

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

// classList 사용 이유 : 클릭 한 번 이후 커서 포인터 사라짐. 그래서 포인터를 계속 유지 시키기 위함.
function handleClick() {
  title.classList.toggle(CLICKED_CLASS);
}

function init() {
  title.addEventListener("click", handleClick);
}
init();
