const express = require('express');
const appEnlistment  = express();
const layerService = require('./layerService');

appEnlistment.get('/', (req, res) => {
    let anoNascimento = req.query.anoNascimento;
    let alistar = layerService.verificaAlistamento(anoNascimento);

   res.json({alistar: alistar});
});

appEnlistment.listen(8080, () => {
    let data = new Date();
    console.log('Server node running '+data); 
});