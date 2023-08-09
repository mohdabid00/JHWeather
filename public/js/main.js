document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('#btn');
    const city = document.querySelector('#city');
    let real_data = '';
    const getWeather = () => {
                document.querySelector('.weather_image').src = `https://openweathermap.org/img/wn/${real_data[0].weather[0].icon}@2x.png`
                document.querySelector(".weather_temp").style.display = "block";
                document.querySelector('.location').innerHTML = `${real_data[0].name}` + ", " + `${real_data[0].sys.country}`;
                const day_date = document.querySelector("#date");
            var date= new Date();
            const days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
            const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
            let dat = date.getDate();
            let hour = date.getHours();
            let min = date.getMinutes();
            let d = date.getDay();
            let m = date.getMonth();
            let p = "AM";
            const date_time_mon = () => {
                if(hour>12){
                    p="PM";
                }if(hour>12){
                    hour-=12;
                }if(min<10){
                    min="0"+min;
                }
                return `${days[d-1]} | ${months[m]} ${dat} | ${hour}:${min} ${p}`
            }
            day_date.innerHTML = date_time_mon();
            document.querySelector('.temp').innerHTML = `${real_data[0].main.temp}` + ' &deg;C';
            document.querySelector('.tempmin_max').innerHTML = 'Min ' + ` ${real_data[0].main.temp_min}` + ' &deg;C' + " | " + 'Max ' + ` ${real_data[0].main.temp_max}` + ' &deg;C';


    }
    const getTemp = async () => {
        let cityVal = city.value;
        if(cityVal === ''){
            city.innerHTML = "please enter city name";
        }
        else{
            try {
                let api = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=d3f1d47093f21b26d699b8922c19a3c1&units=metric`;
                const data =await fetch(api);
                const temp_data = await data.json();
                real_data = [temp_data];
                getWeather();
                
            } catch (error) {
               alert("please enter vaild city name") 
            }
        }
    };
    

    btn.addEventListener('click',getTemp);
});