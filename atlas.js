const staty = document.getElementById('staty');

fetch('https://restcountries.com/v3.1/region/europe')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        data.forEach(stat => {
            let blockCountry = 
            `<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <div class="card mb-4" style="width: 18rem;">
                    <div class="card-body">
                        <a href="${stat.maps.googleMaps}">
                            <img src="${stat.flags.png}" alt="${stat.name.official}" class="card-img-top rounded">
                        </a>
                        <div class="text-center">
                            <h3 class="card-title">${stat.name.common}</h3>
                            <h5 class="card-subtitle mb-2 text-muted">${stat.subregion}</h5>
                        </div>
                        <p class="card-text mt-3">
                            <b>Capital city:</b> ${stat.capital}
                        <br><b>Population:</b> ${stat.population}
                        <br><b>Area:</b> ${stat.area} km<sup>2</sup>
                        </p>
                    </div>
                </div>    
            </div>`;
            staty.innerHTML += blockCountry;
        });
    });