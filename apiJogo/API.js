const express = require('express');
const app = express();  

let jogos = ['Gears 5', 'Halo Infinite', 'Perfect Dark', 'Forza Horizon'];
let jogo_escolhido = jogos[2];

let json_jogo = {jogo: jogo_escolhido}

app.get('/', (res,req) => {
    res.json(json_jogo);

});
app.listen(8080, () =>{
    let data = new Date();
    console.log('Servidor ativo desde: '+data);
});
