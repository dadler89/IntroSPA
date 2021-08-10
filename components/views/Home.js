import html from "html-literal";
import tarasenkoImg from "../../img/Tarasenko.jpg";


const kelvinToFahrenheit = (kelvinTemp) =>
  Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);


export default (st) => html`
  <section id="jumbotron">
    <h2>Savvy Coders Jan. 2020 Cohort</h2>
  
    <a href="" onClick="alert('Hello! You clicked the Button!')">"Call to Action" "Button"</a>
  </section>
  
  
  <h3 id="weather">
    The weather outside is weather...but it is
    Temperature in ${st.weather.city} is
    ${kelvinToFahrenheit(st.weather.temp)}F, feels like
    ${kelvinToFahrenheit(st.weather.feelsLike)}F. Humidity is at
    ${st.weather.humidity}%, and the weather is ... ${st.weather.description}
  </h3>
  
  <img class="cover-img" src="${tarasenkoImg}" />
`;
