// import "./homework5.css";

const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h3");

// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;

function getTime() {
  // Don't delete this.
  const nowTime = new Date();
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
  const resultTime = xmasDay - nowTime;

  // console.log(resultTime);
  if (resultTime === 0) {
    clockTitle.innerText = "Marry Chrismas!";
  } else {
    const days = Math.floor(resultTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((resultTime / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((resultTime / (1000 * 60)) % 60);
    const seconds = Math.floor((resultTime / 1000) % 60);

    clockTitle.innerText = `${days < 10 ? `0${days}` : days}:${
      hours < 10 ? `0${hours}` : hours
    }:${minutes < 10 ? `0${minutes}` : minutes}:${
      seconds < 10 ? `0${seconds}` : seconds
    }`;
  }
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
