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
            <label for="city">Cidade: </label>
            <select required id="city" onChange={handleChangeSelectedCity}>
                <option disabled selected value="">Selecione a cidade desejada</option>
                {cityList.map(( city ) => 
                    <option value={city.name_ptbr}>{city.name_ptbr}</option>
                )}
            </select>
            {isCityLoading && 'Loading...'}
            {selectedCity}
        </div>
    );
}

export default CityField;