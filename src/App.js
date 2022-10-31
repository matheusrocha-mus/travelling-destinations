import PersonalData from "./components/PersonalData";
import TravellingDestinations from "./components/TravellingDestinations";
/*import UserData from "./components/UserData"*/

function App() {
/*  function handleSubmit () {
    <UserData />
  }*/

  return (
    <form method="post">
      <h1>Agência de Viagens</h1>
      <PersonalData />
      <TravellingDestinations />
      <div className="submit">
        <input type="submit" value="Enviar" name="submit"/* onClick={handleSubmit}*/ />
      </div>
    </form>
  );
}

export default App;