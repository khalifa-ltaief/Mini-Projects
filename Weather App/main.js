document.addEventListener("DOMContentLoaded", () => {
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
  const apiKey = "1fad46e77aeed4d0cf679308e60b431a";
  const searchBox = document.querySelector(".search input");
  const searchBtn = document.querySelector(".search .button");
  const imageUrl =document.querySelector(".weather img")
  const messageBox = document.createElement("p");
  document.body.appendChild(messageBox);
  async function Weather(city) {
    const response = await fetch(
      apiUrl + city + `&appid=${apiKey}&units=metric`
    );
    
    if (!response.ok) {
    
        messageBox.textContent = "City not found. Please check the name.";
        messageBox.style.color = "white";
        messageBox.style.paddingTop = "10px";
        messageBox.style.textAlign = "center";
        
       
        return; 

      }
    var data = await response.json();
    console.log(data);
    messageBox.textContent = "";
    document.querySelector(".weather h1").innerHTML =
      Math.round(data.main.temp) + "°C";
      document.querySelector(".weather h2").innerHTML =data.name
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
      document.querySelector(".speed").innerHTML = data.wind.speed +"Km/h"
      if (data.weather[0].main == "Clouds"){
imageUrl.src="image/cloud.png"
      }else if(data.weather[0].main == "Clear"){
        imageUrl.src="image/sun.png"
      }else if(data.weather[0].main == "Rain"){
        imageUrl.src="image/rain.png"
      }else if(data.weather[0].main == "Snow"){
        imageUrl.src="image/snow.png"
      }
  }
  searchBtn.addEventListener("click", () => {
    Weather(searchBox.value);
  });
});
