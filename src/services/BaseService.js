class BaseService {
    constructor(model) {
        this.model = model
    }

    async buscarTodos() {
        return await this.model.find({})
    }

    async buscarPorId(id) {
        return await this.model.findOne({ _id: id })
    }

    criar(dados) {

    }

    atualizar(id, dados) {

    }

    deletar(id) {
    }
}

module.exports = BaseService