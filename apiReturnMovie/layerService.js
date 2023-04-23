function sugereFilmeSemana(){

    let data = new Date();
    let diaSemana = data.getDay();
    let filme;

    switch(diaSemana){
        case 0:
            filme = 'Vingadores';
            break;
        case 1:
            filme = 'Liga das Justiça';
            break;
        case 2:
            filme = 'Harry Potter';
            break;
        case 3:
            filme = 'Senhor dos Anéis';
            break;
        case 4:
            filme = 'Capitão América';
            break;
        case 5:
            filme = 'Homem de Ferro';
            break;
        case 6:
            filme = 'Superman';
            break;
    }

    return filme;
}
exports.sugereFilmeSemana = sugereFilmeSemana;