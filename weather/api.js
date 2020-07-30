const cityform = document.querySelector('.form');
const card = document.querySelector('.cardpic');
const details = document.querySelector('.showtemp');

const time = document.querySelector('img.pl');
const pic2  = document.querySelector('icon img');



const updateui = (data) => {
    console.log(data);
     const citydets = data.citydets;
     const weather = data.weather;
     details.innerHTML = `
            <h4 style="text-align: center; margin: 20px;">${citydets.EnglishName}</h4>
            <div style="border: 1px solid black; width: 200px; margin: auto; text-align: center;">
                <span>${weather.Temperature.Metric.Value}</span>
                <span>&deg;C</span>
            </div>
     `;
};



const updatecity = async(city) => {

    const citydets = await  getCity(city);
    const weather = await getWeather(citydets.Key );

    return{
        citydets : citydets,
        weather : weather
    };
};

cityform.addEventListener('submit' , (e)=> {
    e.preventDefault();
    const city = cityform.city.value.trim();
    cityform.reset();

    updatecity(city)
        .then(data => updateui(data))
        .catch(err => console.log(err));
});