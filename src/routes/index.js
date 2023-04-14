const fs = require('fs')

function carregarRotas(app) {
    const nomesDosArquivos = fs.readdirSync(__dirname)
    for (const nome of nomesDosArquivos) {
        if(nome != 'index.js') {
            console.log(`Carregando ${nome}`)
            const rota = require(`./${nome}`)
            rota(app)
        } 
    }
}   

module.exports = carregarRotas