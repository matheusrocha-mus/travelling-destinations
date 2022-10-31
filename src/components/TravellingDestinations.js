import { useState } from 'react'
import CountryField from "./CountryField";
import CityField from "./CityField";

function TravellingDestinations() {
    const [countryCode, setCountryCode] = useState('')

    const [cityCode, setCityCode] = useState('')

    return (
        <section>
            <ul>
                <h2>Destinos de Interesse</h2>
                <li>
                    <CountryField setCountryCode={setCountryCode} />
                </li>
                <li>
                    <label for="state">Estado: </label>
                    <select required id="state">
                        <option disabled selected>Selecione o estado desejado</option>
                    </select>
                </li>
                <li>
                    <CityField setCityCode={setCityCode/*.filter (setCountryCode)*/} />
                </li>
            </ul>
        </section>
    );
}

export default TravellingDestinations;