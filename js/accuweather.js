// mi API key//
const key = 'CZaH47BtIgMIkl9tBGZoYW5rc6nZAIGD';

///////////////////////////////////////////////////////////////////////////////
// Hago la request para tener la información del clima de la ciudad que elegí//
const obtenerClima = async (id) => {
    const dbURL = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const queryParametros = `${id}?apikey=${key}`;

    const respuesta = await fetch(dbURL + queryParametros);
    const datos = await respuesta.json();

    return datos[0];


}

////////////////////////////////////////////////////////////////////////////
/// Hago la request para tener la información de la ciudad que me interesa//
const obtenerCiudad = async (ciudad) => {
    const dbURL = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const queryParametros = `?apikey=${key}&q=${ciudad}`;

    const respuesta = await fetch(dbURL + queryParametros);

    const datos = await respuesta.json();

    return datos[0];

};