function retornaEditora(heroi){
    let editora = '';

    if(heroi == 'Superman'){
        editora = 'DC';
    }else if(heroi == 'Hulk'){
        editora = 'Marvel';
    }else if(heroi == 'Batman'){
        editora = 'DC';
    }else{
        editora = 'Não identificado';
    }
}
exports.retornaEditora = retornaEditora;