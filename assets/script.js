var submitEl = document.querySelector(".search");
var enterCityEl = document.querySelector(".enter-city");
var currentWeather = document.querySelector("#current-weather")

var getWeatherData = function(location) {
    // console.log(location);
    
    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=9feddfec43ca2ca89492bcf77207b126&units=imperial'

//    var apiUrl = "http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid=9feddfec43ca2ca89492bcf77207b126"
    fetch(apiUrl)
    .then(function(response){
        // console.log(response)
        return response.json()
    }).then(function(data){
        console.log(data)
        console.log(data.name)
        console.log(data.main.temp)
        console.log(data.wind.speed)
        console.log(data.main.humidity)

        var nameEl = document.createElement("h2");
        nameEl.textContent = data.name;
        currentWeather.appendChild(nameEl);

        var tempEl = document.createElement("h2");
        tempEl.textContent = data.main.temp;
        currentWeather.appendChild(tempEl);

        var windEl = document.createElement("h2");
        windEl.textContent = data.wind.speed;
        currentWeather.appendChild(windEl);

        var humidityEl = document.createElement("h2");
        humidityEl.textContent = data.main.humidity;
        currentWeather.appendChild(humidityEl);

    })
    
};

var getLatLon = function(lat, lon) {

}
  

submitEl.addEventListener("click", function(){
    //   console.log("click")
    // console.log(enterCityEl.value);
    
    getWeatherData(enterCityEl.value);
  }) 