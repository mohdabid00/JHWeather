// let real_data;
// const getdata = async() =>{
//     try {
//         console.log('hi');
//         const api = `https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=d3f1d47093f21b26d699b8922c19a3c1&units=metric`;
//         const data = await fetch(api);
//         real_data = await data.json();

//     } catch (error) {
//         console.log(error);
//     }
// }

// console.log(real_data);

// };
// function foo(){
//     const city = document.getElementById("city").value;
    
    
//     if(city === ''){
//         console.log("hoo");
//         document.querySelector(".class").innerHTML = "please enter city";
//     }else{
//         getdata(city);
//         document.querySelector("temp_cntry").innerHTML = `${real_data[0].name}`+","+`${real_data[0].sys.country}`;
//         document.querySelector("temp").innerHTML = `${real_data[0].main.temp}`;
//     }

    
//     console.log("hola");
//     document.querySelector(".weather_temp").style.display = 'block';
//     const day_date = document.querySelector("#date");
//     var date= new Date();
//     const days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
//     const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
//     let dat = date.getDate();
//     let hour = date.getHours();
//     let min = date.getMinutes();
//     let d = date.getDay();
//     let m = date.getMonth();
//     let p = "AM";
//     const date_time_mon = () => {
//         if(hour>12){
//             p="PM";
//         }if(hour>12){
//             hour-=12;
//         }if(min<10){
//             min="0"+min;
//         }
//         return `${days[d-1]} | ${months[m]} ${dat} | ${hour}:${min} ${p}`
//     }
//     day_date.innerHTML = date_time_mon();

// };
