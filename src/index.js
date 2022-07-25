function formatDate(currentTime) {
  let year = currentTime.getFullYear();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[currentTime.getDay()];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let month = months[currentTime.getMonth()];
  let date = currentTime.getDate();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  return `${day} ${date}th, ${hours}:${minutes}`;
}
console.log(formatDate(new Date()));
let heading = document.querySelector(".temperature h2");
heading.innerHTML = formatDate(new Date());

function changeCity() {
  let cityName = document.querySelector(".city h1");
  cityName.innerHTML = search.value;

  let apiKey = "a4ee9bf42b21367a1023c4509955d8ca";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${search.value}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayCurrentTemp);
}

let search = document.querySelector("#searchCity");
search.addEventListener("blur", changeCity);

function displayCurrentTemp(response) {
  document.querySelector("#temperature h1 span").innerHTML = Math.round(
    response.data.main.temp
  );
  /*document.querySelector("#searchCity").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp 
    );*/

  console.log(response);
}
