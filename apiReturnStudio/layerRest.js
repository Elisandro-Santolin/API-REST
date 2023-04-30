const express = require('express');
const myApp = express();
const layerSerive = require('./layerService');

myApp.get('/', (req, res) => {
    let heroi = req.query.heroi;

    let editora = layerSerive.retornaEditora(heroi);
    res.json({editora: editora});
});

myApp.listen(8080, () => {
    let data = new Date();
    console.log('Servidor node iniciado em: '+data);
});