// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
// const selectElement = document.querySelector(".js-select");
// const COUNTRY_LS = "country";

// function selectCountry() {
//   const pick = event.target.value;
//   localStorage.setItem(COUNTRY_LS, pick);
// }

// selectElement.addEventListener("change", selectCountry);

// const sibal = selectElement.querySelector(
//     `option[value=${event.target.value}]`
//   );
//   console.log(sibal);

const selectElement = document.querySelector("select");
const COUNTRY_LS = "country";

function loadCountry(something) {
  for (var i = 0; i < something.options.length; i++) {
    if (localStorage.getItem(COUNTRY_LS) === something.options[i].value) {
      something.options[i].selected = "selected";
    }
  }
}

function saveCountry(text) {
  localStorage.setItem(COUNTRY_LS, text);
}

function handleValue(event) {
  const value = event.target.value;
  saveCountry(value);
}

function init() {
  loadCountry(selectElement);
  selectElement.addEventListener("change", handleValue);
}

init();
