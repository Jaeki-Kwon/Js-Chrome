const select = document.querySelector("select");
const COUNTRY_LS = "country";

var con2 = localStorage.getItem(COUNTRY_LS);
console.log("con2 > " + con2);

var getSelectId = document.getElementById("country");
console.log("getSelectId");
console.log(getSelectId);
for (var i = 0; i < getSelectId.options.length; i++) {
  if (getSelectId.options[i].value === con2) {
    console.log("getSelectId.options[i]");
    console.log(getSelectId.options[i]);
    getSelectId.options[i].setAttribute("selected", "selected");
  }
}

function selectCountry(e) {
  const value = e.target.value;
  localStorage.setItem(COUNTRY_LS, value);
}

select.addEventListener("change", selectCountry);
