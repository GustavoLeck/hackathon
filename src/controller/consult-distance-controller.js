import { ConsultaDistance } from "../use-case/consult-distance.js";
import { ConsultaCep } from "../use-case/consult-cep.js";
import { DistanceModel } from "../model/distance-model.js";
export class ConsultaDistanceController {
    async handle(req, res) {

        const enderecos = {
            endereco1: { cidade: "Joinville", estado: "SC" },
            endereco2: { cidade: "Porto Alegre", estado: "RS" }
        }

        const cepConsulta = req.params.cep.replace(/\D/g, '');
        const responseCep = await new ConsultaCep().execute(cepConsulta);

        const distanceModel1 = new DistanceModel(enderecos.endereco1, responseCep);
        const responseDistance1 = await new ConsultaDistance().execute(distanceModel1);

        const distanceModel2 = new DistanceModel(enderecos.endereco2, responseCep);
        const responseDistance2 = await new ConsultaDistance().execute(distanceModel2);

        const distancia1 = parseFloat(responseDistance1.distancia);
        const distancia2 = parseFloat(responseDistance2.distancia);

        if (distancia1 < distancia2) {
            res.status(200).send({ cidade: enderecos.endereco1, distancia: responseDistance1 });
        } else {
            res.status(200).send({ cidade: enderecos.endereco2, distancia: responseDistance2 });
        }
    }
}

