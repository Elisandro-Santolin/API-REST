const express = require('express');
const layerService = require('./layerService');
const app = express(); 


app.get('/', (req, res) => {
    let peso = req.query.peso;
    let altura = req.query.altura;

    if(layerService.validParameter(req.query.peso) && layerService.validParameter(req.query.altura)){
    
    let imc = layerService.calculaIMC(peso, altura);
    let status = layerService.returnStatusIMC(status);

    let json = {imc: imc, status: status};

    res.json(json); 
    }else {
        res.status(400).json({'Erro':'Peso ou altura inválido' });
    }
}); 

app.listen(8080, () => {
     let date = new Date();
     console.log('Servidor Iniciado: '+date);
});