const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}

loadCountries();

const displayCountries = countries => {
    // console.log(data);
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML = `
        <h3>${country.name}</h3>
        <p>${country.capital}</p>
        <button onclick="loadCountryByName('${country.name}')">Details</button>
        `;
        // const h3 = document.createElement('h3');
        // h3.innerText = country.name;
        // div.appendChild(h3);
        // const p = document.createElement('p');
        // p.innerText = country.capital;
        // div.appendChild(p);
        countriesDiv.appendChild(div);

    });
}

const loadCountryByName = name => {
    const url = `https://restcountries.com/v2/name/${name}`
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]));
}

const displayCountryDetail = country => {
    const countryDiv = document.getElementById('country-detail');
    countryDiv.innerHTML = `
    <h3>Name: ${country.name}</h3>
    <h5>Capital: ${country.capital}</h5>
    <h5>Population: ${country.population}</h5>
    <h5>Language: ${country.languages[0].name}</h5>
    Flag: <img src="${country.flag}" width="100px" height="60px">
    `
}