import { useState, useEffect } from 'react'
import { fetchCity } from '../api/Destinations'

function CityField ({ setCityCode }) {
    const [isCityLoading, setIsCityLoading] = useState(false);

    const [cityList, setCityList] = useState([]);

    const [selectedCity, setSelectedCity] = useState ('');

    const handleChangeSelectedCity = (event) => {
        const cityName = event.target.value;
        const city = cityList.find((c) => c.name_ptbr === cityName)
        setCityCode(city.code)
        setSelectedCity(cityName)
    }

    useEffect(() => {
        setIsCityLoading(true)
        fetchCity()
        .then((data) => {
            setIsCityLoading(false)
            setCityList(data)
        })
    }, [])

    return (
        <div>
            <label for="city">Estado/Cidade: </label>
            <select required id="city" onChange={handleChangeSelectedCity} style={{maxWidth: "70%"}}>
            {isCityLoading && <option disabled selected value="">Loading...</option>}
            {!isCityLoading && <option disabled selected value="">Selecione o estado e cidade desejados</option>}
            {/*filter(city => city.code === countryCode)*/}
            {cityList.map(( city ) => 
                <option value={city.name_ptbr}>{city.name_ptbr}</option>
            )}
            </select>
        </div>
    );
}

export default CityField;