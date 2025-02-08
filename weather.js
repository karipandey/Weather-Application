const inputBox = document.getElementById("inputBox");
const searchBtn = document.querySelector(".searchBtn");
const temperature = document.querySelector(".temperature");
const weather_image = document.querySelector(".weather-image");
const description = document.querySelector(".description");
const humidity = document.querySelector(".humidity");
const windy = document.querySelector(".windy");
console.log("called", searchBtn, document.querySelector("body"));

async function checkWeather(city) {
  const api_key = "3ce6080e4b2e10621edd432a8d300c68";
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
  console.log("URL", URL);
  const weather_data = await fetch(`${URL}`).then((response) =>
    response.json()
  );
  temperature.innerHTML = `${weather_data.main.temp}`;
}
searchBtn.addEventListener("click", () => {
  console.log("clicked", inputBox);
  checkWeather(inputBox.value);
});
