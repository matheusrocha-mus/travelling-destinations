import PersonalData from "./components/PersonalData";
import TravellingDestinations from "./components/TravellingDestinations";

function App() {
  return (
    <form method="get" action="shrek.png">
      <h1>Agência de Viagens</h1>
      <PersonalData />
      <TravellingDestinations />
      <div id="submit">
        <input type="submit" value="Enviar" name="submit" />
      </div>
    </form>
  );
}

export default App;