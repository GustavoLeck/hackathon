export class ConsultDistanceMiddleware {
    async handle(req, res, next) {
        if (req.body.origem == undefined) {
            return res.status(401).send({ status: "Erro", message: "Informe a origem!" })
        }
        if (req.body.destino == undefined) {
            return res.status(401).send({ status: "Erro", message: "Informe o destino!" })
        }

        if (req.body.destino.cidade == undefined) {
            return res.status(401).send({ status: "Erro", message: "Informe a cidade de destino!" })
        }

        if (req.body.destino.estado == undefined) {
            return res.status(401).send({ status: "Erro", message: "Informe o estado de destino!" })
        }

        if (req.body.origem.cidade == undefined) {
            return res.status(401).send({ status: "Erro", message: "Informe a cidade de origem!" })
        }

        if (req.body.origem.estado == undefined) {
            return res.status(401).send({ status: "Erro", message: "Informe o estado de origem!" })
        }

        return next()
    }
}