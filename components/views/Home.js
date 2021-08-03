import html from "html-literal";
import tarasenkoImg from "../../img/Tarasenko.jpg";
export default (st) => html`
  <section id="jumbotron">
    <h2>Savvy Coders Jan. 2020 Cohort</h2>
  
    <a href="" onClick="alert('Hello! You clicked the Button!')">"Call to Action" "Button"</a>
  </section>
  <img class="cover-img" src="${tarasenkoImg}" />
`;
