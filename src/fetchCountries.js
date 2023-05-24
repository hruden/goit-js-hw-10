
export function fetchCountries(query){
    const BASE_URL = 'https://restcountries.com/v3.1/name/'
    
    
    return fetch(`${BASE_URL}${query}?fields=name,capital,population,flags,languages`)
    .then(resp => {
        if (!resp.ok){
            throw new Error(resp.status)    
        }
        return resp.json()
    })
    }
