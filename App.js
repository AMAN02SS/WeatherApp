let weather = {
    apiKey: "d5d19485fd174a05941185445211009",
    fetchWeather: function (city) {
        fetch(
            "http://api.weatherapi.com/v1/forecast.json?key="
            + this.apiKey
            + "&q="
            + city
            + "&days=7"
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));

    },
    displayWeather: function (data) {
        {
            const { name } = data.location;
            const { temp_c, feelslike_c, humidity, wind_kph, pressure_mb, vis_km, cloud } = data.current;
            const { text, icon } = data.current.condition;



            document.querySelector(".city").innerText = "Weather in " + name;
            document.querySelector(".icon").src = icon;
            document.querySelector(".description").innerText = text;
            document.querySelector(".temp").innerText = temp_c + " °C";
            document.querySelector(".humidity").innerText = "Humidity: " + humidity + " %";
            document.querySelector(".wind").innerText = "Wind Speed: " + wind_kph + " Km/h";
            document.querySelector(".feelsLike").innerText = "Feels Like: " + feelslike_c + " °C";
            document.querySelector(".pressure").innerText = "Pressure: " + pressure_mb + " mBar";
            document.querySelector(".visibility").innerText = "Visibility: " + vis_km + " Km";
            document.querySelector(".cloud").innerText = "Clouds:" + cloud + " %";

            document.querySelector(".weather").classList.remove("loading");
        };
        {
            const { maxtemp_c, mintemp_c, daily_chance_of_rain } = data.forecast.forecastday[1].day;
            const { text, icon } = data.forecast.forecastday[1].day.condition;

            document.querySelector(".max_temp1").innerText = "Max. : " + maxtemp_c + " °C";
            document.querySelector(".min_temp1").innerText = "Min. : " + mintemp_c + " °C";
            document.querySelector(".icon2").src = icon;
            document.querySelector(".text2").innerText = text;
            document.querySelector(".weather").classList.remove("loading2");
            document.querySelector(".chance_of_rain1").innerText = "chance of Rain: " + daily_chance_of_rain + " %";


        };

        {
            const { maxtemp_c, mintemp_c, daily_chance_of_rain } = data.forecast.forecastday[2].day;
            const { text, icon } = data.forecast.forecastday[2].day.condition;

            document.querySelector(".max_temp2").innerText = "Max. : " + maxtemp_c + " °C";
            document.querySelector(".min_temp2").innerText = "Min. : " + mintemp_c + " °C";
            document.querySelector(".icon3").src = icon;
            document.querySelector(".text3").innerText = text;
            document.querySelector(".weather").classList.remove("loading3");
            document.querySelector(".chance_of_rain2").innerText = "chance of Rain: " + daily_chance_of_rain + " %";


        };

        let weatherType = document.getElementById('description');


        switch (weatherType) {



        }


    },



    search: function () {
        this.fetchWeather(document.querySelector(".search-Bar").value);
    }

};

document.querySelector(".Button button").addEventListener("click", function () {
    weather.search();

});

document.querySelector(".search-Bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
});




weather.fetchWeather("Gwalior");

let date = document.getElementById('date');
let date2 = document.getElementById('date2');
let date3 = document.getElementById('date3');
let todaydate = new Date();
let todaydate2 = new Date();
let todaydate3 = new Date();
date.innerText = dateManager(todaydate);
date2.innerText = dateManager2(todaydate2);
date3.innerText = dateManager3(todaydate3);


function dateManager(dateArg) {
    let days = ['sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday'];
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];
    let dinak = (month + ',' + date + " " + year + "  (" + day + ")");

    return dinak;

}

function dateManager2(dateArg2) {
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday', 'sunday'];
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let year = dateArg2.getFullYear();
    let month = months[dateArg2.getMonth()];
    let date1 = dateArg2.getDate() + 1;
    let date = date1;
    let day1 = days[dateArg2.getDay()];
    let day = day1;
    let dinak2 = (month + ',' + date + " " + year + "  (" + day + ")");

    return dinak2;

}

function dateManager3(dateArg3) {
    let days = ['Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday', 'sunday', 'Monday'];
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let year = dateArg3.getFullYear();
    let month = months[dateArg3.getMonth()];
    let date2 = dateArg3.getDate() + 2;
    let date = date2;
    let day = days[dateArg3.getDay()];

    let dinak3 = (month + ',' + date + " " + year + "  (" + day + ")");

    return dinak3;

}
