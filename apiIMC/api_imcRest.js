const express = require('express');
const myApp = express();

const calculadoraIMC = require('./api_imcService');

myApp.get('/', (req, res) => {
    let peso = req.query.peso;
    let altura = req.query.altura;

    let imc = calculadoraIMC.calculoIMC(peso, altura);

    res.json({imc: imc});
});

myApp.listen(8080, () => {
    let data = new Date();
    console.log('Serviço Iniciado '+data);
});