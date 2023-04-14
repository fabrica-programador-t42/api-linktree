const { getUsuarioController } = require("../factories/UsuarioFactory")

function rota(app) {
    const controller = getUsuarioController()

    app.get('/usuarios', (req, res) => controller.buscarTodos(req, res))
}

module.exports = rota