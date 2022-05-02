var submitEl = document.querySelector(".search");
var enterCityEl = document.querySelector(".enter-city");
var currentWeather = document.querySelector("#current-weather");
var searchCity = document.querySelector(".search-city");
var iconEl = document.querySelector("#weather-icno");
var cityEl = document.querySelector("#city-input");

var day1 = document.querySelector("#day1");
var day2 = document.querySelector("#day2");
var day3 = document.querySelector("#day3");
var day4 = document.querySelector("#day4");
var day5 = document.querySelector("#day5");


var apiKey = "9feddfec43ca2ca89492bcf77207b126";


// var submitHandler(event) {
//   event.preventDefault();

//   var city = searchCity.value;
//   var searchAr = [];
//   console.log(city);
// }


// var loadSearches = function() {
  
//   var searchHistory = [];

// searchHistory = JSON.parse(localStorage.getItem(""))
// }


// var buttonHandler = function(event) {
//   var searchText = event.target.vlaue;

//   localStorage.setItem("currentWeather", searchText);

//   location.reload
//   console.log("button")
// }


var getWeatherData = function(location) {
    // console.log(location);
  
    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=9feddfec43ca2ca89492bcf77207b126&units=imperial&appid=' + apiKey;

    fetch(apiUrl)
    .then(function(response){
        // console.log(response)
        return response.json()
    }).then(function(data){
        // console.log(data)


        var nameEl = document.createElement("h2");
        nameEl.textContent = data.name;
        currentWeather.appendChild(nameEl);

        var currentDate = document.createElement("h3");
        currentDate.textContent = moment().format("MM/DD/YYYY");
        currentWeather.appendChild(currentDate);
 
        
        //  $("#weather-icon").attr("src", data.weather[0].icon + "@2px.png");

        var tempEl = document.createElement("h2");
        tempEl.textContent = "Temp: " + data.main.temp;
        currentWeather.appendChild(tempEl);

        var windEl = document.createElement("h2");
        windEl.textContent = "Wind Speen: " + data.wind.speed + " MPH";
        currentWeather.appendChild(windEl);

        var humidityEl = document.createElement("h2");
        humidityEl.textContent = "Humidity: " + data.main.humidity + "%";
        currentWeather.appendChild(humidityEl);


    })  
  // if (enterCityEl === null || enterCityEl === "") {
  //     window.alert("Must enter a City Name.");
  //     return;
  //   }
    
};

// var fiveDay = function(cityName) {

//   let apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=9feddfec43ca2ca89492bcf77207b126&units=imperial&appid=' + apiKey;
//   fetch(apiUrl).then(function (response) {
//     return response.json().then(function (data) {
//         console.log(data);

//         var lat = data[0].lat;
//         var lon = data[0].lon;

//       }
//       )}
// )}

// fiveDay();

var getLatLon = function(location) {
  var apiCall = 'http://api.openweathermap.org/geo/1.0/direct?q=' + location + '&limit=1&appid=' + apiKey;
  fetch(apiCall).then(function (response) {
    return response.json().then(function (data) {
        console.log(data);
}
    )}
  )}
getLatLon();

submitEl.addEventListener("click", function(){
    console.log("click")
  
  getWeatherData(enterCityEl.value);
})




//       var iconEl = document.createElement('img');
//       img.src = apiUrl.iconCode;
//       console.log(icon);
      
      
//       var weatherIcon = document.createElement("img")
//    weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
//    currentWeather.appendChild(currentWeather);

      
      //   var weatherIcon = document.createElement("img");
      //   weatherIcon.setAttribute("src", data.weather.icon);
      //   currentWeather.appendChild(weatherIcon);
      // console.log(weatherIcon);
      