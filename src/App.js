import PersonalData from "./components/PersonalData";
import TravellingDestinations from "./components/TravellingDestinations";
/*import UserData from "./components/UserData"*/

function App() {
/*  function SubmitHandler () {
    <UserData />

    const [submit, setSubmit] = useState('');

    const handleChangeSubmit = (event) => {
        setSubmit(event.target.value)
    }

  }*/

  return (
    <form method="post">
      <h1>Agência de Viagens</h1>
      <PersonalData />
      <TravellingDestinations />
      <div className="submit">
        <input type="submit" value="Enviar" name="submit"/* onClick={handleChangeSubmit}*/ />
      </div>
    </form>
  );
}

export default App;