import { useState, useEffect } from 'react'
import { fetchCountries } from '../api/Destinations'

function CountryField ({ setCountryCode }) {
    const [isCountryLoading, setIsCountryLoading] = useState(false);

    const [countryList, setCountryList] = useState([]);

    const [selectedCountry, setSelectedCountry] = useState ('');

    const handleChangeSelectedCountry = (event) => {
        const countryName = event.target.value;
        const country = countryList.find((c) => c.name_ptbr === countryName)
        setCountryCode(country.code)
        setSelectedCountry(countryName)
    }

    useEffect(() => {
        setIsCountryLoading(true)
        fetchCountries()
        .then((data) => {
            setIsCountryLoading(false)
            setCountryList(data)
        })
    }, [])

    return (
        <div>
            <label for="country">País: </label>
            <select required id="country" onChange={handleChangeSelectedCountry}>
                <option disabled selected value="">Selecione o país desejado</option>
                {countryList.map(( country ) => 
                    <option value={country.name_ptbr}>{country.name_ptbr}</option>
                )}
            </select>
            {isCountryLoading && 'Loading...'}
            {selectedCountry}
        </div>
    );
}

export default CountryField;