document.getElementById('search').addEventListener('click',function getcity(){
    const  citydata = document.getElementById("city").value;
    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${citydata}&appid=8f02c4ec7ac2fa5405c74f2e7e8fafa3`)
    .then(resp =>resp.json() )
    .then(data => {
       const lat =data[0].lat;
       const lon =data[0].lon;
       const city = data[0].name;
       
       fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=8f02c4ec7ac2fa5405c74f2e7e8fafa3`)
        .then(resp =>resp.json() )
        .then (weatherdata => {
            const temp  = weatherdata.main.temp;
            const cloud  = weatherdata.weather[0].main;
            const name  = city;
            console.log( );
            document.getElementById("cityname").innerHTML = name;
            document.getElementById("temp").innerHTML = temp;
            document.getElementById("cloud").innerHTML = cloud;
        })
    })
})