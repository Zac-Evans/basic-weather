var apikey = '603e534566c1f17974eb79181bdf7102';
    var zipCode
    var countryCode = 'us';

    
    function search (event) {
        document.getElementById('weatherInfo').innerHTML = '';
        document.getElementById('weatherIcon').innerHTML = '';

        event.preventDefault();

        zipCode = parseInt(document.getElementById('zipSearch').value, 10);
        console.log(zipCode)

        $.get(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},${countryCode}&appid=${apikey}`, function (data) {
            
        console.log(data);
        
        var card = document.createElement('div')
        var allData = document.createElement ('p');
        allData.innerHTML = 'Your city is ' + '<b>' + data.name + '</b>.' + '<br>' + 'Currently it is ' + ((data.main.temp - 273.15) * 9/5 + 32).toFixed(1) + "° F with " + data.weather[0].description + '.';

        console.log(data)

        var weatherInfo = document.getElementById('weatherInfo')
        
        weatherInfo.appendChild(allData);
        var picture = document.createElement('img');
        picture.src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
        var weatherIcon = document.getElementById('weatherIcon')
        weatherIcon.appendChild(picture);

        var theWeather = document.getElementById('theWeather');
        theWeather.style('border: 5px solid black')


    });
    
};