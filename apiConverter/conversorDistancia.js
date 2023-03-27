function conversorDistancia(quilometros){
    let milhas = quilometros * 0.62137;
    return milhas.toFixed(2);
}
exports.conversorDistancia = conversorDistancia;