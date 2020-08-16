const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
  // 날짜 불러오기
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

/* setInterval(arg1, arg2);
    arg1 : 인자로 실행할 함수를 받음(인자 함수)
    arg2 : 함수를 실행하고 싶은 시간(실행할 시간 간격)
*/

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
