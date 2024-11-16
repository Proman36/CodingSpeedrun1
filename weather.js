document.addEventListener('DOMContentLoaded', () => {
var data = JSON.parse(localStorage.getItem('data'))
var humidity = document.getElementById('humidity')
var cloud = document.getElementById('cloud')
var temp = document.getElementById('temperature')
var co = document.getElementById('co')
var so2 = document.getElementById('so2')
var no2 = document.getElementById('no2')
var o3 = document.getElementById('o3')
var wind = document.getElementById('ws')
var uv = document.getElementById('uv')
var pressure = document.getElementById('pressure')
var coV = data.co
var so2V = data.so2
var no2V = data.no2
var o3V = data.o3
var windV = data.wind
var uvV = data.uv
var pressureV = data.pressure
var humidityV = data.humidity
var cloudV = data.cloudCover
var tempV = data.temp
function idk(){
    console.log(coV,so2V,no2V,o3V,windV,uvV,pressure)
}
idk()
humidity.innerText = humidityV
cloud.innerText = cloudV
temp.innerText = tempV
co.innerText = coV
so2.innerText = so2V
no2.innerText = no2V
o3.innerText = o3V
wind.innerText = windV
uv.innerText = uvV
pressure.innerText = pressureV
})