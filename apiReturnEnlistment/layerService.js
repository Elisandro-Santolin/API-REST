function verificaAlistamento(anoNascimento){
    let data = new Date();
    let anoAtual = data.getFullYear();
    
    let idade = anoAtual - anoNascimento;

    let alistar;

    if(idade == 18){
        alistar = true;
    }else{
        alistar = false;
    }

    return alistar;
}

exports.verificaAlistamento = verificaAlistamento;