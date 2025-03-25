const apiKey = "268ff28b9a35a5966d4850696374ab7e"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")


async function checkWeather(city) {
    const response = await fetch(apiUrl + city +  `&appid=${apiKey}`)
    var data = await response.json()

    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{

    
    
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    document.querySelector(".wind").innerHTML = data.wind.speed+"km/h";


    if(data.weather[0].main.toLowerCase() == "clouds"){
        weatherIcon.src= "assets/clouds.png"
    }
    else if(data.weather[0].main.toLowerCase() == "clear"){
        weatherIcon.src= "assets/clear.png"
    }
    else if(data.weather[0].main.toLowerCase() == "rain"){
        weatherIcon.src= "assets/rain.png"
    }
    else if(data.weather[0].main.toLowerCase() == "drizzle"){
        weatherIcon.src= "assets/drizzle.png"
    }
    else if(data.weather[0].main.toLowerCase() == "mist"){
        weatherIcon.src= "assets/mist.png"
    }
    else if(data.weather[0].main.toLowerCase() == "snow"){
        weatherIcon.src="assets/snow.png"
    }

    document.querySelector(".weather").style.display ="block"
    document.querySelector(".error").style.display="none";
}

}

searchBtn.addEventListener("click", () =>{
    checkWeather(searchBox.value);

});

