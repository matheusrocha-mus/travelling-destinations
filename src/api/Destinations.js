export function fetchCountries () {
    return fetch("https://amazon-api.sellead.com/country")
            .then((resp) => resp.json());
}

export function fetchCity () {
    return fetch("https://amazon-api.sellead.com/city")
            .then((resp) => resp.json());
}