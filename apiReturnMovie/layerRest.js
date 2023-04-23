const express = require('express');
const app = express();
const sugestaoFilmes = require('./sugestaoFilmes');

app.get('/', (req, res) => {
    let filmeSugerido = sugestaoFilmes.sugereFilmeSemana();

    res.json({filme: filmeSugerido});
});

app.listen(8080, () => {
    let data = new Date();
    console.log('Servidor node iniciado em: '+data);
});