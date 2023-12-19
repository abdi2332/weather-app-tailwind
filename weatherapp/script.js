var inputval = document.getElementById("cityinput");
var btn = document.getElementById("add");
var city = document.getElementById("cityoutput");
var descrip = document.getElementById("description");
var temp = document.getElementById("temp");
var wind = document.getElementById("wind");
const weatherIcon=document.getElementById("weather-icon")
apik = "3045dd712ffe6e702e3245525ac7fa38"
function convertion(val)
{
    return (val - 273).toFixed(2)
}

btn.addEventListener('click', function()
{
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
  .then(res => res.json())


  .then(data => 
  {
    console.log(data)
    var nameval = data['name']
    var descrip = data['weather']['0']['description']
    var iconCode=data['weather']['0']['icon']
    var iconurl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
    var tempature = data['main']['temp']
    var wndspd = data['wind']['speed']
    city.innerHTML=`Weather of <span>${nameval}<span>`
    temp.innerHTML = `Temperature: <span>${ convertion(tempature)} C</span>`
    description.innerHTML = `<span>${descrip}<span>`
    wind.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`
   
    var img = document.createElement("img"); 
    img.style.marginTop="10px";
    img.src = "images/wind.png"; 
    var src = document.getElementById("wind"); 
    src.appendChild(img); 

    var img = document.createElement("img");
    img.style.marginTop="10px";
    img.src = "images/humidity.png"; 
    var src = document.getElementById("temp"); 
 
    src.appendChild(img); 
    
    weatherIcon.src=iconurl;
    showImage();

      }  
  )


  .catch(err => alert('You entered Wrong city name'))

}
)
function showImage(){
  const weather=document.getElementById("weather-icon");
  weatherIcon.style.display='block';
}