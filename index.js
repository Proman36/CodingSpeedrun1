var plc = document.getElementById('city')
var btn = document.getElementById('getWeather')
var redirect = false
btn.addEventListener('click', () => {
    var x = fetch('http://api.weatherapi.com/v1/current.json?key=05f9dd687763458391092944241011&q='+plc.value+'&aqi=yes')
    x.then((val)=>{
        redirect = val.ok
        return val.json()
    }).then((val)=>{
        if(redirect){
            var data = {
                temp: val.current.temp_c,
                co: val.current.air_quality.co,
                so2: val.current.air_quality.so2,
                no2: val.current.air_quality.no2,
                o3: val.current.air_quality.o3,
                wind: val.current.wind_mph,
                uv: val.current.uv,
                cloudCover: val.current.cloud,
                humidity: val.current.humidity,
                pressure: val.current.pressure_mb
            }
            localStorage.setItem('data',JSON.stringify(data))
            window.location.href = 'weather.html'
        }else{
            plc.value = ''
            alert("Place not found")
        }
    })
})