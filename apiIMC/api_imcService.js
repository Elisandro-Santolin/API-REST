function calculoIMC(peso, altura){
    let imcCalculo = (peso / (altura * altura));
    return imcCalculo;
}

exports.calculoIMC = calculoIMC;