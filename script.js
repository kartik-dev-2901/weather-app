const btn  =  document.getElementById("search-button");
const input = document.getElementById("city-field");
const outLocation = document.getElementById("location");
const outWeather = document.getElementById("weather");
const outTime = document.getElementById("localtime");

async function getdata(cityName){
        const fetcheddata = await fetch(`http://api.weatherapi.com/v1/current.json?key=e3ed30c43fc74b0aaac104356251006&q=${cityName}&aqi=yes`);
        return await fetcheddata.json();
}
btn.addEventListener("click",async()=>{
   const cityname = input.value;
   const result = await getdata(cityname);
   console.log(result);
   outLocation.innerText = `${result.location.country}`;
   outTime.innerText = `${result.location.localtime}`;
   outWeather.innerText = `${result.current.temp_c}C`;
})

//http://api.weatherapi.com/v1/current.json?key=e3ed30c43fc74b0aaac104356251006&q=London&aqi=yes