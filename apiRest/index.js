const express = require('express');
const app = express();

let data = new Date();

let retornaMensagemDoDia = require('./mensagemDoDia');

app.get('/', (req, res) => {
    let dia = data.getDate();
    let retornaMensagemDoDia = retornaMensagemDoDia.retornaMensagemDoDia(dia);
    res.json({mensagem: retornaMensagemDoDia});
});

app.listen(10533, () => {
    console.log('Servidor node iniciado em: '+data);
})