import Select from 'react-select'

import PersonalData from "./components/PersonalData";
import TravellingDestinations from "./components/TravellingDestinations";
import Send from "./components/Send";

function App() {
  return (
    <form method="get" action="C:\Users\mathe\React.js\react-project\shrek.png">
      <h1>Agência de Viagens</h1>
      <PersonalData />
      <TravellingDestinations />
      <Send />
    </form>
  );
}

function FetchCountry () {
  fetch ("https://amazon-api.sellead.com/country");
}

/*function FetchState () {
  fetch ("https://api.countrystatecity.in/v1/states");
}*/

function FetchCity () {
  fetch ("https://amazon-api.sellead.com/city");
}

export default App;