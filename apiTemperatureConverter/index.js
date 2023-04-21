const express = require('express');
const myApp = express();

const conversorTemperatura = require('./temperatureConverter');

myApp.get('/', (req, res) => {
    let celsius = req.query.celsius;
    let kelvin = conversorTemperatura.converteParaKelvin(celsius);

    res.json({kelvin: kelvin});
});

myApp.listen(8080, () => {
    let date = new Date();
    console.log('Servidor Iniciado'+date);

});