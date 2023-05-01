const express = require('express');
const nameValidation = require('./layerService');
const app = express();


app.get('/', (req, res) => {
    let name = req.query.name;

    let validation = nameValidation.nameValidation(name);
    res.json({validationName: validation});
});

app.listen(8008, () => {
    let date =  new Date();
    console.log('Server initialized: '+date);
});