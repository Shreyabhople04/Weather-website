const options = {method: 'GET'};

const getweather = (city) => {  
      cname.innerHTML = city

            

      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=828c72fbecea42a93bf3e2262af83647`, options)
      .then((Response) => {
            Response.json().then((Response) => {
                  console.log(Response);

                  document.getElementById("temp").innerHTML = Response.main.temp;
                  document.getElementById("min_temp").innerHTML = Response.main.temp_min;
                  document.getElementById("max_temp").innerHTML = Response.main.temp_max;
                  document.getElementById("pre").innerHTML = Response.main.pressure;
                  document.getElementById("feels").innerHTML = Response.main.feels_like;
                  document.getElementById("clo").innerHTML = Response.clouds.all;
                  document.getElementById("vis").innerHTML = Response.visibility;
                  document.getElementById("hum").innerHTML = Response.main.humidity;
                  document.getElementById("speed").innerHTML = Response.wind.speed;
                  document.getElementById("deg").innerHTML = Response.wind.deg;
                  document.getElementById("rise").innerHTML = Response.sys.sunrise;
                  document.getElementById("set").innerHTML = Response.sys.sunset;
                  document.getElementById("name").innerHTML = Response.name;
                  
                  document.getElementById("wicon").src = `https//openweathermap.org/img/wn/${Response.weather[0].icon}@2x.png`;
                  
            })
      })
      
      .catch((error) => {
            console.log(error);
      })
      
}

Sub.addEventListener("click", (s) => {
      s.preventDefault()
      getweather(city.value)
})
getweather("surat")

fetch(`https://api.openweathermap.org/data/2.5/weather?q=lucknow&appid=c58a8b66496da3b6159144324e78df47`)
.then((Response) => {

      Response.json().then((Response) => {

            console.log(Response);


            document.getElementById("rtn").innerHTML = Response.main.temp;
            document.getElementById("clon").innerHTML = Response.clouds.all;
            document.getElementById("huma").innerHTML = Response.main.humidity;

      })

})

.catch((error) => {

console.log(error);

})

fetch(`https://api.openweathermap.org/data/2.5/weather?q=bangalore&appid=c58a8b66496da3b6159144324e78df47`)
.then((Response) => {

      Response.json().then((Response) => {

            console.log(Response);


            document.getElementById("sbg").innerHTML = Response.main.temp;
            document.getElementById("sam").innerHTML = Response.clouds.all;
            document.getElementById("ram").innerHTML = Response.main.humidity;

      })

})

.catch((error) => {

console.log(error);

})

fetch(`https://api.openweathermap.org/data/2.5/weather?q=kolkata&appid=c58a8b66496da3b6159144324e78df47`)
.then((Response) => {

      Response.json().then((Response) => {

            console.log(Response);


            document.getElementById("btemp").innerHTML = Response.main.temp;
            document.getElementById("stemp").innerHTML = Response.clouds.all;
            document.getElementById("gtemp").innerHTML = Response.main.humidity;

      })

})

.catch((error) => {

console.log(error);

})

fetch(`https://api.openweathermap.org/data/2.5/weather?q=Himachal Pradesh&appid=c58a8b66496da3b6159144324e78df47`)
.then((Response) => {

      Response.json().then((Response) => {

            console.log(Response);


            document.getElementById("raju").innerHTML = Response.main.temp;
            document.getElementById("chomu").innerHTML = Response.clouds.all;
            document.getElementById("domu").innerHTML = Response.main.humidity;

      })

})

.catch((error) => {

console.log(error);

})