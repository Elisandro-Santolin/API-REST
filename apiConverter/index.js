const express = require('express');
const app = express();

const conversorDistancia = require('./conversorDistancia');

app.get('/', (req, res) => {
    let milhas = req.query.milhas;

    let quilometros = conversorDistancia.milhasParaKM(milhas);

    res.json({quilometros: quilometros});
});

app.listen(8080 , () => {
    let data = new Date();
    console.log('Servidor node iniciado em: ' + data);
});