const  weather = document.querySelector(".js-weather");

const API_KEY = "2b22041df634da0b25372889b519e422";
const COORDS = "coords";

function getWeather(lat, lng) {
    // 데이터 얻는 방법
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
        )
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            const temperature = json.main.temp;
            const place = json.name;
            weather.innerText = `${temperature}ºC @ ${place}`;
        })
    // then() : 데이터가 완전히 우리한테 넘어 왔을 때 함수를 하나 호출, then 앞이 완전히 성공하면 then 으로 넘어감
}

function saveCoords(coordsobj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsobj));
}

function handleGeoSucces(position) {
    // 위도 구하기
    const latitude = position.coords.latitude;
    // 경도 구하기
    const longitude = position.coords.longitude;
    const coordsObj = {
        // latitude: latitude,
        // longtitude: longtitude
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoErro() {
    console.log("Can't access geo location");
}

function askForCoords() {
    // API 사용하기
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoErro);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null) {
        askForCoords();
    } else {
        // getWeather
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);

    }
}



function init() {
    loadCoords();
}

init();