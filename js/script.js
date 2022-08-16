function showTime() {
  let d = new Date();
  let month = d.getMonth();
  let date = d.getDate();
  let day = d.getDay();
  let hour = d.getHours();
  let min = d.getMinutes();
  let sec = d.getSeconds();

  switch (month) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May"
      break;
    case 5:
      month = "June"
      break;
    case 6:
      month = "July"
      break;
    case 7:
      month = "August"
      break;
    case 8:
      month = "September"
      break;
    case 9:
      month = "October"
      break;
    case 10:
      month = "November"
      break;
    case 11:
      month = "December"
      break;
    default:

  }

  switch (day) {
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    case 7:
      day = "Sunday";
      break;
    default:
  }

  hour = ("0" + hour).slice(-2);
  min = ("0" + min).slice(-2);
  sec = ("0" + sec).slice(-2);

  const timeBox = document.getElementById("time");
  timeBox.innerHTML = hour + ":" + min + ":" + sec;
  const dateBox = document.getElementById("date");
  dateBox.innerHTML = day + ", " + month + " " + date;
}
setInterval(showTime, 1000);

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');
city.value = "Tashkent";
const windValue = document.getElementById('wind'); 
const humidityValue = document.getElementById('humidity');

async function getWeather() {
  const apiWeatherLink = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=38b5fc85b21b65f3aa1e0120d918939a&units=metric`;
  const res = await fetch(apiWeatherLink);
  const data = await res.json();

  weatherIcon.className = 'weather-icon owf'
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${data.main.temp}°C`;
  weatherDescription.textContent = data.weather[0].description;
  windValue.textContent = `${data.wind.speed} m/s`;
  humidityValue.textContent = `${data.main.humidity}%`;
}
function setCity(event) {
  if (event.code === 'Enter') {
    getWeather();
    city.blur();
  }
}
document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);
