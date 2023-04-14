const BaseService = require('./BaseService')

class UsuarioService extends BaseService {
    constructor(model) {
        super(model)
    }

    async buscarTodosAtivos() {
        try {
            return await this.model.find({ ativo: true })
        } catch (error) {
            console.log(error);
            throw {
                mensagem: 'Um erro ocorreu ao buscar os Usuarios',
                statusCode: 422,
                code: 'USU0001',
            }
        }
    }
}


module.exports = UsuarioService
