const apiKey = "453da7f93ccedd567d47c393b7465c2f"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const inner = document.querySelector(".inner");
const button = document.querySelector(".button")
const input = document.querySelector(".input")

async function checkWheather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}` );
    const data = await response.json();
    console.log(data)
    const cityName = document.querySelector(".city-name");
    const temp = document.querySelector(".temp");
    const windSpeed = document.querySelector(".windspeed");
    const humidity = document.querySelector(".humidity");
    const country = document.querySelector(".country-name");
    const image = document.querySelector(".image img");
    const error = document.querySelector(".error");
    
    if(data.cod === "404") {
        error.style.display = "block";
        inner.style.display = "none"
    }else {
        error.style.display = "none";
        inner.style.display = "block"
        const temperature = Math.round(data.main.temp);
        const wheatherCondition = data.weather[0].main;
        
        cityName.innerHTML = data.name;
        country.innerHTML = data.sys.country;
        temp.innerHTML = temperature + "<sup> o</sup>C";
        windSpeed.innerHTML = data.wind.speed + " km/h";
        humidity.innerHTML = data.main.humidity + "%";
        if(wheatherCondition == "Clear"){
            image.src = "clear.png";
        }else if (wheatherCondition == "Clouds") {
            image.src = "clouds.png";
        }else if (wheatherCondition == "Snow") {
            image.src = "snow.png";
        }else if (wheatherCondition == "Drizzle") {
            image.src = "drizzle.png";
        }else if (wheatherCondition == "Rain") {
            image.src = "rain.png";
        }else if (wheatherCondition == "Mist") {
            image.src = "mist.png";
        }
    }
   
}
let  updateWheather = function(){
    checkWheather(input.value)
}
button.addEventListener("click", updateWheather)

