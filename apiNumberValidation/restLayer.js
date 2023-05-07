const express = require('express');
const validationApp = express();
const validationPhone = require('./serviceLayer');

validationApp.get('/', (req, res) => {
    let phone = req.query.phone;

    let validation = validationPhone.validation(phone);
    res.json({valid: validation});
});

validationApp.listen(8080, () => {
    let data = new Date();
    console.log('Server initial date: '+data);
});