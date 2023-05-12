function calculaIMC(peso, altura){
    let imc = peso / (altura * altura);
    return imc;
}

function returnStatusIMC(imc){
    let status;

    if(imc < 18.5){ 
        status = 'Abaixo do peso';

    }else if(imc >= 15.5){
        status = 'Peso normal';

    }else if(imc >= 24.9){
        status = 'Acima do peso';

    }else{
        status = 'Obeso';
    }

    return status; 
}

function validParameter(parameter){
    if(isNaN(parameter)){
        return false;
    }else{
        return true;
    }
}

exports.calculaIMC = calculaIMC;
exports.returnStatusIMC = returnStatusIMC;
exports.validParameter = validParameter; 