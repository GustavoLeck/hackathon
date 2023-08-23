export class DistanceModel {
    constructor(endereco, consultCep) {
        this.origem = {
            cidade: consultCep.localidade,
            estado: consultCep.uf
        }
        this.destino = {
            cidade: endereco.cidade,
            estado: endereco.estado
        }
    }
}